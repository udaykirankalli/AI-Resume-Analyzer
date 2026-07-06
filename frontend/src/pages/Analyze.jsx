import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { FlyingResumeAnimation } from "@/components/FlyingResumeAnimation";
import TypingText from '@/TypingText'
import {
  Upload,
  Sparkles,
  Target,
  Brain,
  User,
  FileText,
  Image as ImageIcon,
  File
} from 'lucide-react';

function ResumeAnalyzer() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState('');
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userData, setUserData] = useState(null);

  const token = localStorage.getItem("token");
  const isLoggedIn = token && token !== "undefined" && token !== "null";

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

useEffect(() => {
  if (!isLoggedIn) return;

  fetch(`${import.meta.env.VITE_API_URL}/user-details`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        setUserData(data);
      }
    })
    .catch((err) => console.error("User fetch error:", err));
}, [isLoggedIn, token]);
  const handleFileUpload = (file) => {
    if (!file) return;

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/png',
      'image/jpeg',
      'image/jpg',
      'text/plain'
    ];

    const allowedExtensions = ['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg', '.txt'];
    
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    const isValidType = allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension);

    if (isValidType) {
      setResumeFile(file);
    } else {
      alert('Please upload a valid resume file (PDF, DOC, DOCX, PNG, JPG, or TXT).');
    }
  };

  // Function to get file icon based on file type
  const getFileIcon = (fileName) => {
    const extension = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
    
    switch (extension) {
      case '.pdf':
        return <FileText className="w-4 h-4 text-red-600" />;
      case '.doc':
      case '.docx':
        return <FileText className="w-4 h-4 text-blue-600" />;
      case '.png':
      case '.jpg':
      case '.jpeg':
        return <ImageIcon className="w-4 h-4 text-green-600" />;
      case '.txt':
        return <File className="w-4 h-4 text-gray-600" />;
      default:
        return <File className="w-4 h-4 text-gray-600" />;
    }
  };

  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
  };

  const handleEvaluate = async () => {
    if (!resumeFile || !jobDesc.trim()) {
      alert('Please upload a resume and provide a job description');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('job_description', jobDesc); 

    setLoading(true);
    simulateProgress();

try {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/evaluate`, {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  if (data.error) throw new Error(data.error);
  setEvaluation(data);
} catch (err) {
  alert('Error evaluating resume: ' + err.message);
} finally {
  setLoading(false);
}

  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FlyingResumeAnimation />
      </div>

      {/* ✅ Profile icon only for logged-in users */}
      {isLoggedIn && (
        <div className="absolute top-6 right-6 z-20">
          <Button
            variant="ghost"
            className="flex items-center space-x-2 text-slate-700 hover:text-blue-700"
            onClick={() => navigate('/user-details')}
          >
            <User className="w-5 h-5" />
            <span className="text-sm font-medium">Profile</span>
          </Button>
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        {/* 🧠 Header */}
        <div className="text-center pt-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-xl mr-3">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl text-slate-800 font-bold">AI Resume Analyzer</h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Upload your resume (PDF, DOC, DOCX, or Image) and a job description to receive an AI-generated compatibility evaluation.
          </p>

          {/* ✅ Show user name if logged in */}
          {userData && (
            <p className="text-md mt-2 text-green-800 font-medium">
              Welcome back, {userData.name || userData.email}!
            </p>
          )}
        </div>

        {/* 📄 Resume + Job Description Inputs */}
        <div className="grid md:grid-cols-2 gap-5">
          <Card className="bg-white/30 backdrop-blur-lg border-white/40 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <Upload className="w-5 h-5 mr-2 text-blue-600" /> Resume Upload
              </CardTitle>
              <CardDescription className="text-slate-600">
                Upload PDF, DOC, DOCX, or Image files
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt"
                onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
                className="mb-3"
              />
              
              {/* Supported formats info */}
              <div className="text-xs text-slate-500 mb-3">
                Supported formats: PDF, DOC, DOCX, PNG, JPG, TXT
              </div>
              
              {resumeFile && (
                <div className="mt-4 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-2 text-sm text-slate-700">
                    {getFileIcon(resumeFile.name)}
                    <span className="font-medium">{resumeFile.name}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Size: {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white/30 backdrop-blur-lg border-white/40 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <Target className="w-5 h-5 mr-2 text-blue-600" /> Job Description
              </CardTitle>
              <CardDescription className="text-slate-600">Paste the job description</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste job description here..."
                rows={6}
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                className="bg-white/20 backdrop-blur-sm text-slate-800 placeholder:text-slate-500"
              />
            </CardContent>
          </Card>
        </div>

        {/* 🚀 Analyze Button */}
        <div className="text-center">
          <Button
            onClick={handleEvaluate}
            disabled={loading || !resumeFile || !jobDesc.trim()}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Analyzing...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Analyze Resume</span>
              </div>
            )}
          </Button>
        </div>

        {/* 📊 Result */}
        {loading && (
          <div className="max-w-md mx-auto">
            <Card className="bg-white/40 backdrop-blur-lg mt-4">
              <CardContent className="p-4">
                <p className="text-slate-700 mb-2">Analyzing your resume...</p>
                <Progress value={progress} />
                <div className="text-xs text-slate-500 mt-2">
                  Processing {resumeFile?.name}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {evaluation && (
          <Card className="bg-white/30 border border-white-300 p-4 rounded-lg shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Evaluation Result</CardTitle>
            </CardHeader>
            <CardContent>
              <TypingText
                text={
                  (evaluation?.evaluation || evaluation || "")
                    .replace(/\*/g, "")
                    .replace(/\r\n/g, "\n")
                    .trim()
                }
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default ResumeAnalyzer;