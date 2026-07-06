// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import { FlyingResumeAnimation } from "@/components/FlyingResumeAnimation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/forgot-password-link`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");

      toast.success("Password reset link sent! Check your email.");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 overflow-hidden">
      <FlyingResumeAnimation />

      <div className="relative z-10 backdrop-blur-lg bg-white/30 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-semibold text-center text-slate-800">
          Forgot Password
        </h2>
        <p className="text-center text-sm text-slate-600">
          Enter your account email. We’ll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-slate-700">
              Account Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="mt-1 bg-white/80 backdrop-blur rounded-md"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            disabled={isLoading}
          >
            {isLoading ? "Sending link..." : "Send Reset Link"}
          </Button>
        </form>

        <div className="text-center text-sm text-slate-600">
          Remembered your password?{" "}
          <Button
            type="button"
            variant="link"
            className="text-blue-600 hover:underline"
            onClick={() => navigate("/login")}
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
