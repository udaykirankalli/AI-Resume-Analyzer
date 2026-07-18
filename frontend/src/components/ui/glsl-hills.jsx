import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
attribute vec3 position;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix; uniform float time;
varying vec3 vPosition;
mat4 rotateX(float angle) { return mat4(1.,0.,0.,0., 0.,cos(angle),-sin(angle),0., 0.,sin(angle),cos(angle),0., 0.,0.,0.,1.); }
vec3 mod289(vec3 x){return x-floor(x/289.)*289.;} vec4 mod289(vec4 x){return x-floor(x/289.)*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);} vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
vec3 fade(vec3 t){return t*t*t*(t*(t*6.-15.)+10.);}
float cnoise(vec3 P){
  vec3 Pi0=floor(P), Pi1=Pi0+vec3(1.); Pi0=mod289(Pi0); Pi1=mod289(Pi1);
  vec3 Pf0=fract(P), Pf1=Pf0-vec3(1.); vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);
  vec4 iy=vec4(Pi0.yy,Pi1.yy), iz0=Pi0.zzzz, iz1=Pi1.zzzz; vec4 ixy=permute(permute(ix)+iy);
  vec4 ixy0=permute(ixy+iz0), ixy1=permute(ixy+iz1); vec4 gx0=ixy0/7., gy0=fract(floor(gx0)/7.)-.5;
  gx0=fract(gx0); vec4 gz0=vec4(.5)-abs(gx0)-abs(gy0), sz0=step(gz0,vec4(0.)); gx0-=sz0*(step(0.,gx0)-.5); gy0-=sz0*(step(0.,gy0)-.5);
  vec4 gx1=ixy1/7., gy1=fract(floor(gx1)/7.)-.5; gx1=fract(gx1); vec4 gz1=vec4(.5)-abs(gx1)-abs(gy1), sz1=step(gz1,vec4(0.)); gx1-=sz1*(step(0.,gx1)-.5); gy1-=sz1*(step(0.,gy1)-.5);
  vec3 g000=vec3(gx0.x,gy0.x,gz0.x),g100=vec3(gx0.y,gy0.y,gz0.y),g010=vec3(gx0.z,gy0.z,gz0.z),g110=vec3(gx0.w,gy0.w,gz0.w),g001=vec3(gx1.x,gy1.x,gz1.x),g101=vec3(gx1.y,gy1.y,gz1.y),g011=vec3(gx1.z,gy1.z,gz1.z),g111=vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110))); g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;
  vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111))); g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;
  float n000=dot(g000,Pf0),n100=dot(g100,vec3(Pf1.x,Pf0.yz)),n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z)),n110=dot(g110,vec3(Pf1.xy,Pf0.z)),n001=dot(g001,vec3(Pf0.xy,Pf1.z)),n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z)),n011=dot(g011,vec3(Pf0.x,Pf1.yz)),n111=dot(g111,Pf1);
  vec3 f=fade(Pf0); vec4 nz=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),f.z); vec2 nyz=mix(nz.xy,nz.zw,f.y); return 2.2*mix(nyz.x,nyz.y,f.x);
}
void main(){ vec3 p=(rotateX(radians(90.))*vec4(position,1.)).xyz; float wave=sin(radians(p.x/128.*90.)); vec3 np=p+vec3(0.,0.,time*-30.); float h=cnoise(np*.08)*wave*8.+cnoise(np*.06)*wave*8.+cnoise(np*.4)*(abs(wave)*2.+.5)+pow(wave,2.)*40.; vPosition=p+vec3(0.,h,0.); gl_Position=projectionMatrix*modelViewMatrix*vec4(vPosition,1.); }
`;

const fragmentShader = `
precision highp float; varying vec3 vPosition;
void main(){ float opacity=(96.-length(vPosition))/256.*.58; vec3 color=mix(vec3(.10,.12,.16),vec3(.58,.64,.72),clamp(vPosition.y/85.,0.,1.)); gl_FragColor=vec4(color,opacity); }
`;

export function GLSLHills({ className = "", cameraZ = 125, planeSize = 256, speed = 0.18 }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return undefined;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
    camera.position.set(0, 16, cameraZ);
    camera.lookAt(new THREE.Vector3(0, 28, 0));
    const geometry = new THREE.PlaneGeometry(planeSize, planeSize, 160, 160);
    const material = new THREE.RawShaderMaterial({ uniforms: { time: { value: 0 } }, vertexShader, fragmentShader, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    const clock = new THREE.Clock();
    let frameId;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const render = () => {
      material.uniforms.time.value += clock.getDelta() * speed;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    render();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [cameraZ, planeSize, speed]);

  return <div ref={containerRef} aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}><canvas ref={canvasRef} className="h-full w-full" /></div>;
}
