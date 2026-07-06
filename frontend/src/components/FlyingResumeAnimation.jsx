import React, { useEffect, useState } from "react";
import { FileText } from "lucide-react";

const NUM_RESUMES = 1000;

const generateResume = () => ({
  id: Math.random().toString(36).substr(2, 9),
  top: Math.random() * 100 + "%",
  left: Math.random() * 100 + "%",
  duration: Math.random() * 10 + 5, 
  size: Math.random() * 200 + 10000,
  rotate: Math.random() * 360,
});

export const FlyingResumeAnimation = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const newResumes = [];
    for (let i = 0; i < NUM_RESUMES; i++) {
      newResumes.push(generateResume());
    }
    setResumes(newResumes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {resumes.map((resume) => (
        <div
          key={resume.id}
          className="absolute text-indigo-300 opacity-20 animate-float"
          style={{
            top: resume.top,
            left: resume.left,
            animationDuration: `${resume.duration}s`,
            transform: `rotate(${resume.rotate}deg)`,
            fontSize: `${resume.size}rem`,
          }}
        >
          <FileText />
        </div>
      ))}
    </div>
  );
};
