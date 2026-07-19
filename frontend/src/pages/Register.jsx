import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "@/firebase";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth(app);

  // Google login
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
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        toast.success("Google signup successful! 🎉");
        navigate("/analyze");
      } else {
        throw new Error("No token received from server");
      }
    } catch (err) {
      console.error("Google signup error:", err);
      toast.error(err.response?.data?.error || err.message || "Google signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  // GitHub login (redirect only)
  const handleGitHubLogin = () => {
    try {
      setIsLoading(true);

      const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
      if (!clientId) {
        toast.error("GitHub OAuth not configured");
        setIsLoading(false);
        return;
      }

      const redirectUri = `${window.location.origin}/auth/github/callback`;
      const scope = "user:email";
      const state = "github-oauth";

      const githubAuthUrl =
        `https://github.com/login/oauth/authorize?` +
        `client_id=${clientId}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `scope=${encodeURIComponent(scope)}&` +
        `state=${state}`;

      window.location.href = githubAuthUrl;
    } catch (error) {
      console.error("GitHub OAuth error:", error);
      toast.error("Failed to initiate GitHub login");
      setIsLoading(false);
    }
  };

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Registration failed");

      localStorage.setItem("token", data.token);
      toast.success("Registration successful! 🎉");
      navigate("/analyze");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center overflow-x-hidden bg-[#080b1f] px-4 py-24 sm:px-6">
      <div className="z-10 w-full max-w-xl">
        <Card className="glassmorphism-card backdrop-blur-2xl bg-white/30 border border-white/20 shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl text-slate-800 mb-2">Create Account</CardTitle>
            <CardDescription className="text-slate-600">
              Join thousands of professionals analyzing their resumes
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-slate-700">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    className="pl-10 py-3 backdrop-blur-sm bg-white/20 border-white/30 text-slate-800 placeholder:text-slate-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-slate-700">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    className="pl-10 py-3 backdrop-blur-sm bg-white/20 border-white/30 text-slate-800 placeholder:text-slate-500"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-slate-700">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange("password")}
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

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword" className="text-slate-700">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange("confirmPassword")}
                    className="pl-10 pr-10 py-3 backdrop-blur-sm bg-white/20 border-white/30 text-slate-800 placeholder:text-slate-500"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-slate-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) => setAgreeToTerms(checked)}
                  className="border-white/40 bg-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 mt-0.5"
                />
                <Label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                  I agree to the{" "}
                  <Link to="/terms-of-service" className="text-blue-600 underline">Terms of Service</Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link>
                </Label>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            {/* Or continue with */}
            <div className="relative my-6">
              <Separator className="bg-white/30" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 px-3 text-sm text-slate-600 rounded-full">
                Or continue with
              </span>
            </div>

            {/* Social login buttons */}
            <div className="grid grid-cols-2 gap-4">
              {/* Google */}
              <Button
                variant="outline"
                className="backdrop-blur-md bg-white/30 border border-white/50 flex items-center justify-center hover:bg-white/40 transition"
                onClick={handleGoogleLogin}
              >
                <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </Button>

              {/* GitHub */}
              <Button
                variant="outline"
                className="backdrop-blur-md bg-white/30 border border-white/50 flex items-center justify-center hover:bg-white/40 transition"
                onClick={handleGitHubLogin}
              >
                <img src="/github-icon.png" alt="GitHub" className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>

            {/* Redirect to login */}
            <div className="text-center text-sm text-slate-600 mt-6">
              Already have an account?{" "}
              <Button
                variant="link"
                className="text-blue-600 underline p-0 h-auto"
                onClick={() => navigate("/login")}
              >
                Sign in
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
