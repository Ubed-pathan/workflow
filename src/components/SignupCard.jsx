import { useState } from 'react';

const SignupCard = ({ onSwitchToSignin, onSwitchToSignup, isSignupView = true }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Intern'
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }
    // Simulate signup success
    console.log('Signup form submitted:', formData);
    
    // Switch to signin view directly
    if (onSwitchToSignin) {
      onSwitchToSignin();
    }
  };

  // If this is not the signup view (when signin is active), show simple signup option
  if (!isSignupView) {
    return (
      <div className="p-6 w-full">
        {/* Content */}
        <div className="text-center space-y-4">
          {/* Text */}
          <p className="text-gray-600 text-xs">
            don't have an account?
          </p>

          {/* Sign Up Button */}
          <button
            onClick={() => onSwitchToSignup && onSwitchToSignup()}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-medium py-2 px-6 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Sign Up with Email
          </button>

          {/* Divider */}
          <div className="text-center">
            <span className="text-gray-500 text-xs">Or,</span>
          </div>

          {/* Social Login Text */}
          <p className="text-gray-600 text-xs">
            Connect with
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center gap-3">
            {/* Google */}
            <button className="w-8 h-8 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>

            {/* Facebook */}
            <button className="w-8 h-8 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center">
              <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Full signup form view
  return (
    <div className="p-6 w-full">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:border-blue-300"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:border-blue-300"
            placeholder="Password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:border-blue-300"
            placeholder="Repeat your password"
            required
          />
        </div>

        {/* Role */}
        <div className="flex items-center gap-4">
          <label className="text-xs font-medium text-gray-700 whitespace-nowrap">
            Role
          </label>
          <div className="flex gap-6">
            <label className="flex items-center whitespace-nowrap">
              <input
                type="radio"
                name="role"
                value="Admin"
                checked={formData.role === 'Admin'}
                onChange={handleInputChange}
                className="mr-1 text-blue-600 scale-75"
              />
              <span className="text-xs text-gray-700">Admin</span>
            </label>
            <label className="flex items-center whitespace-nowrap">
              <input
                type="radio"
                name="role"
                value="Intern"
                checked={formData.role === 'Intern'}
                onChange={handleInputChange}
                className="mr-1 text-blue-600 scale-75"
              />
              <span className="text-xs text-gray-700 font-medium">Intern</span>
            </label>
            <label className="flex items-center whitespace-nowrap">
              <input
                type="radio"
                name="role"
                value="User"
                checked={formData.role === 'User'}
                onChange={handleInputChange}
                className="mr-1 text-blue-600 scale-75"
              />
              <span className="text-xs text-gray-700">User</span>
            </label>
          </div>
        </div>

        {/* Accept Terms */}
        <div className="space-y-1">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 scale-75"
              required
            />
            <label htmlFor="acceptTerms" className="text-xs text-gray-700">
              Accept terms and condition
            </label>
          </div>
          <p className="text-xs text-gray-500 ml-5">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        {/* Signup Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-medium py-2 px-6 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Signup with Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupCard;
