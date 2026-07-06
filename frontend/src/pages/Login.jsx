import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FlyingResumeAnimation } from "@/components/FlyingResumeAnimation";
import { toast } from "react-hot-toast";
import axios from "axios";

// Firebase imports
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "@/firebase";

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth(app);

  // ------------------------
  // GOOGLE LOGIN
  // ------------------------
  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/google-login`,
        { token: idToken },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          timeout: 30000,
        }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        toast.success("Google login successful! 🎉");
        navigate("/analyze");
      } else {
        throw new Error("No token received from server");
      }
    } catch (err) {
      console.error("Google login error:", err);
      toast.error(
        err.response?.data?.error || err.message || "Google login failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // ------------------------
  // GITHUB LOGIN
  // ------------------------
  const handleGitHubLogin = () => {
    try {
      const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
      if (!clientId) {
        toast.error("GitHub OAuth not configured");
        return;
      }

      // Save current page for redirect after auth
      localStorage.setItem("github_auth_redirect", window.location.pathname);

      const redirectUri = `${window.location.origin}/auth/github/callback`;
      const scope = "user:email";
      const state = "github-oauth";

      const githubAuthUrl =
        `https://github.com/login/oauth/authorize?client_id=${clientId}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&scope=${encodeURIComponent(scope)}` +
        `&state=${state}`;

      window.location.href = githubAuthUrl;
    } catch (err) {
      console.error("GitHub OAuth error:", err);
      toast.error("Failed to initiate GitHub login");
    }
  };

  // ------------------------
  // EMAIL LOGIN
  // ------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      localStorage.setItem("token", data.token);
      toast.success("Login successful! 🎉");
      navigate("/analyze");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // ------------------------
  // GitHub Callback handling (optional)
  // ------------------------
  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state === "github-oauth") {
      // Process GitHub callback
      (async () => {
        setIsLoading(true);
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/github-login`,
            { code },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
              timeout: 30000,
            }
          );

          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            toast.success("GitHub login successful! 🎉");

            // Redirect to saved location or default
            const redirect = localStorage.getItem("github_auth_redirect") || "/";
            localStorage.removeItem("github_auth_redirect");
            window.history.replaceState({}, document.title, redirect);
            navigate("/analyze");
          } else {
            throw new Error("No token received from server");
          }
        } catch (err) {
          console.error("GitHub callback error:", err);
          toast.error(err.response?.data?.error || "GitHub login failed");
          window.history.replaceState({}, document.title, "/");
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [searchParams, navigate]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 overflow-hidden">
      <FlyingResumeAnimation />
      <div className="z-10 w-full max-w-xl">
        <Card className="glassmorphism-card backdrop-blur-2xl bg-white/30 border border-white/20 shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl text-slate-800 mb-2">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-slate-600">
              Sign in to your resume analyzer account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Email Login */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-slate-700">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 py-3 backdrop-blur-sm bg-white/20 border-white/30 text-slate-800 placeholder:text-slate-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-slate-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 py-3 backdrop-blur-sm bg-white/20 border-white/30 text-slate-800 placeholder:text-slate-500"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-slate-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="text-left text-sm text-slate-600">
                <Button
                  type="button"
                  variant="link"
                  className="text-blue-600 underline p-0 h-auto"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </Button>
              </div>
            </form>

            {/* Separator */}
            <div className="relative my-6">
              <Separator className="bg-white/30" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 px-3 text-sm text-slate-600 rounded-full">
                Or continue with
              </span>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="backdrop-blur-md bg-white/30 border border-white/50 flex items-center justify-center hover:bg-white/40 transition"
                onClick={handleGoogleLogin}
              >
                <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </Button>

              <Button
                variant="outline"
                className="backdrop-blur-md bg-white/30 border border-white/50 flex items-center justify-center hover:bg-white/40 transition"
                onClick={handleGitHubLogin}
              >
                <img src="/github-icon.png" alt="GitHub" className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>

            <div className="text-center text-sm text-slate-600 mt-6">
              Don&apos;t have an account?{" "}
              <Button
                variant="link"
                className="text-blue-600 underline p-0 h-auto"
                onClick={() => navigate("/register")}
              >
                Sign up
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
