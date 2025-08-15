import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Intern',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!formData.acceptTerms) {
      alert('Please accept terms and conditions');
      return;
    }
    // Simulate signup process
    navigate('/login');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex">
      {/* Left Section - Plant Illustration */}
      <div className="flex-1 flex items-end justify-start p-8">
        <div className="w-48 h-64 relative">
          {/* Plant pot */}
          <div className="absolute bottom-0 w-20 h-16 bg-blue-600 rounded-t-lg mx-auto left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 w-16 h-12 bg-blue-800 rounded-t-lg mx-auto left-1/2 transform -translate-x-1/2"></div>
          {/* Plant */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-20 bg-green-600 rounded-full"></div>
            <div className="w-6 h-16 bg-green-500 rounded-full absolute -left-2 top-4"></div>
            <div className="w-6 h-16 bg-green-500 rounded-full absolute -right-2 top-4"></div>
          </div>
          {/* Stand */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-amber-800"></div>
        </div>
      </div>

      {/* Center Section - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-md"></div>
            </div>
            <span className="text-gray-800 font-bold text-xl">workflow</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Repeat your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <div className="flex gap-4">
                {['Admin', 'Intern', 'User'].map((role) => (
                  <label key={role} className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="mr-2 mt-1 text-blue-600 focus:ring-blue-500"
                  required
                />
                <span className="text-sm text-gray-700">
                  Accept terms and condition
                </span>
              </div>
              <p className="text-xs text-gray-500 ml-6">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              📧 Signup with Email
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center space-y-4">
          <p className="text-gray-600 text-sm">already have an account?</p>
          <Link
            to="/login"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Login
          </Link>
          
          <div className="space-y-2">
            <p className="text-gray-500 text-sm">Or,</p>
            <p className="text-gray-600 text-sm">Connect with</p>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <span className="text-2xl">G</span>
            </button>
            <button className="w-12 h-12 bg-blue-600 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <span className="text-white text-xl">f</span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm mb-4">Having any issues?</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>

        {/* Right Plant */}
        <div className="mt-16 w-32 h-48 relative">
          {/* Plant pot */}
          <div className="absolute bottom-0 w-16 h-12 bg-red-500 rounded-t-lg mx-auto left-1/2 transform -translate-x-1/2"></div>
          {/* Plant */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-16 bg-green-600 rounded-full"></div>
            <div className="w-4 h-12 bg-green-500 rounded-full absolute -left-1 top-2"></div>
            <div className="w-4 h-12 bg-green-500 rounded-full absolute -right-1 top-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
