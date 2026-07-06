import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function GitHubCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (!code || state !== "github-oauth") {
      toast.error("Invalid GitHub callback");
      setIsLoading(false);
      return;
    }

    const handleCallback = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/github-login`,
          { code },
          { headers: { "Content-Type": "application/json" }, withCredentials: true }
        );

        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          toast.success("GitHub login successful! 🎉");

          // Clean URL
          window.history.replaceState({}, document.title, "/");
          navigate("/analyze");
        } else {
          throw new Error("No token received from server");
        }
      } catch (err) {
        console.error("GitHub callback error:", err);
        toast.error(err.response?.data?.error || "GitHub login failed");
        window.history.replaceState({}, document.title, "/");
        setIsLoading(false);
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {isLoading ? "Processing GitHub login..." : "Something went wrong."}
    </div>
  );
}