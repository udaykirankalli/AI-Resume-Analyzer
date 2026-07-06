import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FlyingResumeAnimation } from '../components/FlyingResumeAnimation';

const UserDetails = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profile_image: '',
    resumes_analyzed: 0,
    average_score: 0,
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resumes, setResumes] = useState([]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageTimestamp, setImageTimestamp] = useState(Date.now()); // Stable timestamp

  // Helper function to get correct image URL with stable cache busting
  const getImageUrl = useCallback((imagePath) => {
    if (!imagePath) return null;
    
    // If it's already a full URL (for external images like Google profile pics)
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // For local images, construct the full URL
    const baseUrl = import.meta.env.VITE_API_URL || '';
    let fullUrl;
    
    if (imagePath.startsWith('/profile_images/')) {
      fullUrl = `${baseUrl}${imagePath}`;
    } else {
      fullUrl = `${baseUrl}/profile_images/${imagePath}`;
    }
    
    // Add stable timestamp for cache busting (only changes when image is updated)
    return `${fullUrl}?t=${imageTimestamp}`;
  }, [imageTimestamp]);

  const fetchUserData = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user-details`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) {
        if (res.status === 401) {
          // Token expired or invalid
          localStorage.removeItem('token');
          navigate('/login');
          return;
        }
        throw new Error('Failed to fetch user data');
      }
      
      const data = await res.json();
      console.log('Fetched user data:', data);
      
      setUserData(prev => {
        // Only update timestamp if image path actually changed
        if (data.profile_image && data.profile_image !== prev.profile_image) {
          setImageTimestamp(Date.now());
        }
        return data;
      });
      setName(data.name || '');
      setEmail(data.email || '');
      setImageError(false); // Reset image error state
      
    } catch (err) {
      console.error('Error fetching user data:', err);
      toast.error('Failed to load user data');
      // Only redirect to login if it's an auth error
      if (err.message.includes('Unauthorized') || err.message.includes('401')) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  }, [navigate]);

  const fetchResumeHistory = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/resume-history`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) {
        if (res.status === 401) {
          return; // Don't show error, let main auth flow handle it
        }
        throw new Error('Failed to fetch resume history');
      }
      
      const data = await res.json();
      if (Array.isArray(data)) {
        setResumes(data);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (err) {
      console.error('Error fetching resume history:', err);
      toast.error('Failed to load resume history');
      setResumes([]);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
    fetchResumeHistory();
  }, [fetchUserData, fetchResumeHistory]);

  const handleLogout = () => {
    // Clear all user-related data
    localStorage.removeItem('token');
    setUserData({
      name: '',
      email: '',
      profile_image: '',
      resumes_analyzed: 0,
      average_score: 0,
    });
    setName('');
    setEmail('');
    setResumes([]);
    setImageError(false);
    setImageTimestamp(Date.now());
    
    navigate('/');
    toast.success('Logged out successfully');
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/update-name`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();
      if (res.ok && data.message) {
        toast.success('Name updated successfully');
        setUserData((prev) => ({ ...prev, name }));
      } else {
        toast.error(data.error || 'Failed to update name');
      }
    } catch (err) {
      console.error('Error updating name:', err);
      toast.error('Error updating name');
    }
  };

  const handleChangePassword = async () => {
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ password }),
      });
      
      const data = await res.json();
      if (res.ok && data.message) {
        toast.success('Password changed successfully');
        setPassword('');
        setConfirmPassword('');
      } else {
        toast.error(data.error || 'Failed to change password');
      }
    } catch (err) {
      console.error('Error changing password:', err);
      toast.error('Password update failed');
    }
  };

  const handlePhotoChange = async (e) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload a valid image file (JPEG, PNG, GIF)');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size must be less than 5MB');
      return;
    }

    setImageLoading(true);
    setImageError(false);
    
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/upload-profile-image`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.profile_image) {
        // Update timestamp to force image reload
        const newTimestamp = data.timestamp || Date.now();
        setImageTimestamp(newTimestamp);
        
        // Update user data with new image path
        const newUserData = {
          ...userData,
          profile_image: data.profile_image,
        };
        setUserData(newUserData);
        setImageError(false);
        
        toast.success('Profile image updated successfully!');
        
        // Clear the file input
        e.target.value = '';
        
      } else {
        toast.error(data.error || 'Failed to update image');
      }
    } catch (err) {
      console.error('Image upload error:', err);
      toast.error('Image upload failed');
      setImageError(true);
    } finally {
      setImageLoading(false);
    }
  };

  const handleImageError = useCallback(() => {
    console.log('Image failed to load, showing fallback');
    setImageError(true);
  }, []);

  const handleImageLoad = useCallback(() => {
    console.log('Image loaded successfully');
    setImageError(false);
  }, []);

  // Memoize the image URL to prevent unnecessary re-renders
  const currentImageUrl = getImageUrl(userData.profile_image);

  const fullStars = Math.round((userData.average_score || 0) / 20);
  const emptyStars = 5 - fullStars;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 overflow-hidden">
      <FlyingResumeAnimation />

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl z-10 p-4">
        {/* Profile Info */}
        <div className="bg-white/30 rounded-xl shadow-md p-6 flex-1 backdrop-blur">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Profile Information</h2>

          {/* Profile Image and User Info Section */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="relative flex-shrink-0">
              {/* Loading indicator */}
              {imageLoading && (
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}
              
              {/* Profile Image or Fallback */}
              {!imageLoading && (
                <>
                  {currentImageUrl && !imageError ? (
                    <img
                      src={currentImageUrl}
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      key={imageTimestamp} // Force re-render when timestamp changes
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl border-2 border-white shadow-sm">
                      {userData.name?.slice(0, 2).toUpperCase() || 'NA'}
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* User Details */}
            <div className="flex-1">
              <h3 className="text-slate-800 font-medium text-lg">{userData.name || 'Unknown'}</h3>
              <p className="text-sm text-slate-600 mb-2">{userData.email || 'No email'}</p>
              <label className="text-blue-600 text-sm cursor-pointer inline-block hover:text-blue-800 transition-colors">
                {imageLoading ? 'Uploading...' : 'Change Photo'}
                <input 
                  type="file" 
                  onChange={handlePhotoChange} 
                  className="hidden" 
                  accept="image/jpeg,image/jpg,image/png,image/gif"
                  disabled={imageLoading}
                />
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button 
              onClick={handleSave} 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
            >
              Save Changes
            </button>
            <button 
              onClick={handleLogout} 
              className="text-red-500 hover:underline hover:text-red-700 transition-colors font-medium"
            >
              Logout
            </button>
          </div>

          {/* Change Password Section */}
          <div className="mb-8">
            <h3 className="text-md font-semibold text-slate-700 mb-4">Change Password</h3>
            <div className="space-y-3">
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleChangePassword}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200 font-medium"
              >
                Update Password
              </button>
            </div>
          </div>

          {/* Resume History Section */}
          <div>
            <h3 className="text-md font-semibold text-slate-700 mb-3">Resume History</h3>
            <div className="max-h-40 overflow-auto border border-gray-300 rounded-md bg-white/20 p-3">
              {resumes.length === 0 ? (
                <p className="text-sm text-slate-600 text-center py-4">No resumes analyzed yet.</p>
              ) : (
                <ul className="text-sm text-slate-600 space-y-2">
                  {resumes.map((resume, index) => (
                    <li key={index} className="pb-2 border-b border-slate-200 last:border-b-0 last:pb-0">
                      <span className="font-medium">{resume.filename}</span>
                      <br />
                      <span className="text-xs text-slate-500">{resume.date}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white/30 rounded-xl shadow-md p-6 w-full max-w-sm self-start backdrop-blur">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Your Stats</h2>
          <div className="space-y-6">
            <div>
              <p className="text-slate-700 text-3xl font-bold">{userData.resumes_analyzed}</p>
              <p className="text-sm text-slate-500">Resumes Analyzed</p>
            </div>
            <div>
              <p className="text-slate-700 text-3xl font-bold">{Math.round(userData.average_score)}%</p>
              <p className="text-sm text-slate-500">Average Score</p>
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(fullStars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                  <span key={i} className="text-slate-300 text-xl">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-500">Resume Quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;