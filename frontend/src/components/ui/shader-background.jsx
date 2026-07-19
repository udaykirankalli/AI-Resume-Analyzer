import { useEffect, useRef } from "react";

const vertexShader = `attribute vec4 aVertexPosition; void main(){ gl_Position = aVertexPosition; }`;
const fragmentShader = `
precision highp float;
uniform vec2 iResolution; uniform float iTime;
float random(float t){ return (cos(t)+cos(t*1.3+1.3)+cos(t*1.4+1.4))/3.; }
float line(float p,float w,float t){ return smoothstep(w,0.,abs(p-t)); }
void main(){
  vec2 coord=gl_FragCoord.xy; vec2 uv=coord/iResolution.xy;
  vec2 space=(coord-iResolution.xy*.5)/iResolution.x*10.;
  float horizontalFade=1.-(cos(uv.x*6.28)*.5+.5);
  float verticalFade=1.-(cos(uv.y*6.28)*.5+.5);
  space.y+=random(space.x*.1+iTime*.04)*(.55+horizontalFade);
  space.x+=random(space.y*.1+iTime*.04+2.)*horizontalFade;
  float waves=0.;
  for(int index=0; index<16; index++){
    float item=float(index); float rand=random(item+space.x*.5+iTime*.266)*.5+.5;
    float offset=random(item+space.x*.5+iTime*.266*(1.+item/16.))*mix(.6,2.,horizontalFade);
    float position=random(space.x*.2+iTime*.2)*horizontalFade+offset;
    float width=mix(.01,.2,rand*horizontalFade)*.5;
    waves+=line(position,width,space.y)*(.15+.35*rand);
  }
  vec3 base=mix(vec3(.025,.03,.045),vec3(.10,.12,.15),uv.x)*verticalFade;
  vec3 silver=vec3(.62,.68,.75)*waves;
  gl_FragColor=vec4(base+silver,1.);
}`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  console.error("Shader compile error:", gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
  return null;
}

export default function ShaderBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return undefined;

    const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return undefined;
    const program = gl.createProgram();
    gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "aVertexPosition");
    const resolution = gl.getUniformLocation(program, "iResolution");
    const time = gl.getUniformLocation(program, "iTime");
    let frame;
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const startedAt = performance.now();
    const render = (now) => {
      gl.useProgram(program);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, (now - startedAt) / 1000);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(position);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(render);
    };
    window.addEventListener("resize", resize);
    resize(); frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame); window.removeEventListener("resize", resize);
      gl.deleteBuffer(buffer); gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
