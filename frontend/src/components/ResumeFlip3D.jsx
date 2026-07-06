import { useState, useEffect } from "react";

export function ResumeFlip3D() {
  const [animationPhase, setAnimationPhase] = useState('waiting');

  useEffect(() => {
    const sequence = async () => {
      setAnimationPhase('entering');
      await new Promise(resolve => setTimeout(resolve, 4000));
      setAnimationPhase('displaying');
      await new Promise(resolve => setTimeout(resolve, 2500));
      setAnimationPhase('exiting');
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAnimationPhase('waiting');
      await new Promise(resolve => setTimeout(resolve, 1500));
    };

    sequence();
    const interval = setInterval(sequence, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden" style={{ perspective: '2500px' }}>
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-3000 ease-in-out`}
        style={{
          width: '600px',
          height: '848px',
          transformStyle: 'preserve-3d',
          transform: 
            animationPhase === 'waiting' ? 
              'translateX(-1500px) rotateY(-30deg) rotateZ(-10deg) scale(0.6)' :
            animationPhase === 'entering' ?
              'translateX(0px) rotateY(0deg) rotateZ(0deg) scale(0.95)' :
            animationPhase === 'displaying' ?
              'translateX(0px) rotateY(0deg) rotateZ(0deg) scale(1)' :
              'translateX(1500px) rotateY(30deg) rotateZ(10deg) scale(0.6)',
          boxShadow: 
            animationPhase === 'waiting' || animationPhase === 'exiting' ? 
              '0 0 0 rgba(0,0,0,0)' :
            animationPhase === 'displaying' ?
              '0 60px 200px rgba(0,0,0,0.2), 0 30px 100px rgba(59,130,246,0.15), 0 0 0 8px rgba(59,130,246,0.05)' :
              '0 50px 150px rgba(0,0,0,0.2), 0 25px 80px rgba(0,0,0,0.1)',
          opacity: animationPhase === 'waiting' ? 0 : animationPhase === 'displaying' ? 0.8 : 0.7,
          zIndex: 1
        }}
      >
        <div className="absolute inset-0 p-12 overflow-hidden">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-4xl">JS</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3">John Smith</h1>
            <p className="text-gray-600 font-medium text-2xl">Senior Software Engineer</p>
            <div className="flex justify-center items-center space-x-6 mt-4 text-lg text-gray-500">
              <span>john.smith@email.com</span>
              <span>•</span>
              <span>(555) 123-4567</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-gray-200 pb-3">PROFESSIONAL SUMMARY</h2>
            <div className="space-y-3">
              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-4/5 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="w-3/4 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="w-2/3 h-3 bg-gray-200 rounded-full">
                <div className="w-5/6 h-3 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-gray-200 pb-3">EXPERIENCE</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl">Senior Software Engineer</h3>
                    <p className="text-gray-600 text-lg">Tech Solutions Inc.</p>
                  </div>
                  <span className="text-gray-500 text-lg">2020-2024</span>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="w-5/6 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-4/5 h-2 bg-gray-200 rounded-full">
                    <div className="w-3/4 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded-full">
                    <div className="w-4/5 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl">Software Engineer</h3>
                    <p className="text-gray-600 text-lg">Innovation Labs</p>
                  </div>
                  <span className="text-gray-500 text-lg">2018-2020</span>
                </div>
                <div className="space-y-2">
                  <div className="w-4/5 h-2 bg-gray-200 rounded-full">
                    <div className="w-3/5 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-3/5 h-2 bg-gray-200 rounded-full">
                    <div className="w-4/5 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-gray-200 pb-3">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-2 gap-4">
              {[{ skill: 'JavaScript', level: 90 }, { skill: 'React', level: 85 }, { skill: 'Node.js', level: 80 }, { skill: 'Python', level: 75 }, { skill: 'AWS', level: 70 }, { skill: 'Docker', level: 65 }].map((item) => (
                <div key={item.skill} className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-lg text-gray-700 truncate font-medium">{item.skill}</div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                      <div 
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-gray-200 pb-3">EDUCATION</h2>
            <div>
              <h3 className="font-semibold text-gray-900 text-xl">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600 text-lg">University of Technology</p>
              <span className="text-gray-500 text-lg">2014-2018 • GPA: 3.8/4.0</span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 transform rotate-45 translate-x-10 -translate-y-10 rounded-sm shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-transparent rounded-2xl pointer-events-none"></div>
        <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-20">
          <div className="absolute top-32 left-12 right-12 h-px bg-blue-200"></div>
          <div className="absolute top-40 left-12 right-12 h-px bg-blue-200"></div>
          <div className="absolute top-48 left-12 right-12 h-px bg-blue-200"></div>
        </div>
      </div>

      <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${animationPhase === 'entering' || animationPhase === 'exiting' ? 'opacity-40' : 'opacity-0'}`}>
        <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-blue-500/60 rounded-full transform -translate-y-1/2 animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-500/40 rounded-full transform -translate-y-1/2 animate-ping delay-200"></div>
        <div className="absolute top-1/2 left-1/3 w-10 h-10 bg-blue-500/20 rounded-full transform -translate-y-1/2 animate-ping delay-400"></div>
        <div className="absolute top-1/2 right-1/6 w-6 h-6 bg-blue-500/60 rounded-full transform -translate-y-1/2 animate-ping delay-100"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-purple-500/40 rounded-full transform -translate-y-1/2 animate-ping delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-10 h-10 bg-blue-500/20 rounded-full transform -translate-y-1/2 animate-ping delay-500"></div>
      </div>

      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-3000 ${animationPhase === 'waiting' ? 'opacity-0' : 'opacity-100'}`}
        style={{
          width: animationPhase === 'displaying' ? '700px' : '600px',
          height: '100px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)',
          filter: 'blur(25px)',
          transform: `translateX(-50%) translateY(${animationPhase === 'displaying' ? '30px' : '40px'})`
        }}
      ></div>

      <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${animationPhase === 'entering' || animationPhase === 'exiting' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform -translate-y-20"></div>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform -translate-y-10"></div>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform translate-y-10"></div>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform translate-y-20"></div>
      </div>

      <div className={`absolute inset-0 pointer-events-none transition-all duration-1500 ${animationPhase === 'displaying' ? 'opacity-20' : 'opacity-0'}`}>
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-600"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-900"></div>
        <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1200"></div>
        <div className="absolute top-3/4 right-2/3 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-1500"></div>
      </div>
    </div>
  );
}
