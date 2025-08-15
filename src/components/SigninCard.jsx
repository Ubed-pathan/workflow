import { useState } from 'react';

const SigninCard = ({ onSuccess, onSwitchToSignin, isLoginView = false }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'Intern'
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  // If this is the login view (when signin is active), show the full form
  if (isLoginView) {
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
              placeholder="Email"
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

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500 scale-75"
            />
            <label htmlFor="remember" className="text-xs text-gray-700">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-700 hover:via-blue-700 hover:to-purple-700 text-white font-medium py-2 px-8 rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Login
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <button
              type="button"
              className="text-xs text-gray-500 hover:text-gray-700 underline"
            >
              forgot password?
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Simple view when signup is active
  return (
    <div className="p-6 w-full">
      {/* Content */}
      <div className="text-center space-y-4">
        {/* Text */}
        <p className="text-gray-600 text-xs">
          already have an account?
        </p>

        {/* Login Button */}
        <button
          onClick={() => onSwitchToSignin && onSwitchToSignin()}
          className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-700 hover:via-blue-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg text-sm transition-all duration-300 mx-auto block shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Login
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

        {/* Support section */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-xs mb-2">
            Having any issues?
          </p>
          <button className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-600 hover:via-teal-600 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninCard;
