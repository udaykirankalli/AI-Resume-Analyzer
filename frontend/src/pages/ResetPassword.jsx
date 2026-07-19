import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(null);
  const [debugInfo, setDebugInfo] = useState({});
  const [validationError, setValidationError] = useState(null);

  // Add comprehensive debugging
  useEffect(() => {
    console.log("ResetPassword component mounted");
    console.log("Token from params:", token);
    console.log("API URL:", import.meta.env.VITE_API_URL);
   
    setDebugInfo({
      token: token || "No token",
      apiUrl: import.meta.env.VITE_API_URL || "No API URL",
      timestamp: new Date().toISOString()
    });
  }, [token]);

  // Validate token with backend on mount
  useEffect(() => {
    const validateToken = async () => {
      console.log("Starting token validation...");
     
      if (!token) {
        console.log("No token provided");
        setIsValid(false);
        setValidationError("No reset token provided");
        return;
      }

      if (!import.meta.env.VITE_API_URL) {
        console.log("No API URL configured");
        setIsValid(false);
        setValidationError("API URL not configured");
        return;
      }

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        // Use /api prefix for JSON endpoints
        const url = `${import.meta.env.VITE_API_URL}/api/reset-password/${token}`;
        console.log("Making request to:", url);
       
        const res = await fetch(url, {
          method: 'GET',
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          }
        });

        clearTimeout(timeoutId);
        
        // Check if response is JSON
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server returned non-JSON response");
        }
        
        const data = await res.json();
       
        console.log("Response status:", res.status);
        console.log("Response data:", data);

        if (res.ok && data.message === "Valid token") {
          console.log("Token is valid");
          setIsValid(true);
          setValidationError(null);
        } else {
          console.log("Token is invalid:", data.error || "Unknown error");
          setIsValid(false);
          setValidationError(data.error || "Invalid token");
        }
      } catch (err) {
        console.error("Token validation error:", err);
        setIsValid(false);
       
        if (err.name === 'AbortError') {
          setValidationError("Request timeout - please check your connection");
        } else {
          setValidationError(`Network error: ${err.message}`);
        }
      }
    };
   
    validateToken();
  }, [token]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    try {
      // Use /api prefix for JSON endpoints
      const url = `${import.meta.env.VITE_API_URL}/api/reset-password/${token}`;
      console.log("Submitting password reset to:", url);
     
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ new_password: password }),
      });

      const data = await res.json();
      console.log("Password reset response:", data);

      if (!res.ok) {
        throw new Error(data.error || "Password reset failed");
      }

      toast.success("Password reset successful. Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Password reset error:", err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Show debug info if component isn't rendering properly
  console.log("Render state - isValid:", isValid, "debugInfo:", debugInfo);

  // Loading state with more detailed info
  if (isValid === null) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-[#080b1f] px-4 py-24 sm:px-6">
        <div className="bg-white/90 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4 text-slate-800">
            Validating Reset Link...
          </h2>
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-sm text-slate-600">
              Please wait while we verify your reset link...
            </p>
          </div>
         
          {/* Debug panel */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs">
            <p className="font-semibold mb-2">Debug Information:</p>
            <div className="space-y-1 text-gray-600">
              <p><span className="font-medium">Token:</span> {debugInfo.token?.substring(0, 20)}...</p>
              <p><span className="font-medium">API URL:</span> {debugInfo.apiUrl}</p>
              <p><span className="font-medium">Time:</span> {debugInfo.timestamp}</p>
            </div>
          </div>
         
          {/* Manual override button for testing */}
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                console.log("Manual override - proceeding anyway");
                setIsValid(true);
              }}
              className="text-xs text-blue-600 hover:underline"
            >
              Having trouble? Click here to proceed anyway
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If token invalid/expired
  if (!isValid) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
        <div className="bg-white/90 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-red-700 mb-4">
            Invalid Reset Link
          </h2>
          <p className="text-center text-sm text-slate-600 mb-4">
            {validationError || "This reset link is invalid or has expired. Please request a new one."}
          </p>
         
          <div className="space-y-3">
            <Button
              onClick={() => navigate("/forgot-password")}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full"
            >
              Request New Reset Link
            </Button>
           
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="w-full"
            >
              Back to Login
            </Button>
          </div>
         
          {/* Debug info for invalid state */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs">
            <p className="font-semibold mb-2">Debug Information:</p>
            <div className="space-y-1 text-gray-600">
              <p><span className="font-medium">Token:</span> {debugInfo.token?.substring(0, 20)}...</p>
              <p><span className="font-medium">API URL:</span> {debugInfo.apiUrl}</p>
              <p><span className="font-medium">Error:</span> {validationError}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Valid token - show reset form
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center bg-[#080b1f] px-4 py-24 sm:px-6">
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/30 bg-white/90 p-6 shadow-xl backdrop-blur-lg sm:p-8">
        <h2 className="text-3xl font-semibold text-center text-slate-800 mb-4">
          Reset Password
        </h2>
        <p className="text-center text-sm text-slate-600 mb-6">
          Enter your new password below to reset your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="password" className="text-slate-700 block mb-1">
              New Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password (min 6 characters)"
              required
              minLength={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white/80"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="text-slate-700 block mb-1">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
              required
              minLength={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white/80"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Resetting...
              </span>
            ) : (
              "Reset Password"
            )}
          </Button>
        </form>

        <div className="text-center text-sm text-slate-600 mt-4">
          Back to{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline font-medium"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
