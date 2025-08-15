import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const AddEmployeeModal = ({ isOpen, onClose, onSubmit, departments, roles }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    department: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role || !formData.department) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit(formData);
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      role: '',
      department: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Don't render if modal is not open
  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex">
          {/* Left side - Illustration */}
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 flex-shrink-0 w-64 flex items-center justify-center">
            <div className="text-center">
              {/* Man illustration */}
              <div className="w-32 h-40 relative mx-auto mb-4">
                {/* Head */}
                <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto relative">
                  {/* Hair */}
                  <div className="absolute -top-2 left-2 w-12 h-8 bg-gray-800 rounded-full"></div>
                  {/* Beard */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-800 rounded-b-full"></div>
                </div>
                {/* Body */}
                <div className="w-20 h-24 bg-green-600 rounded-t-full mx-auto mt-2 relative">
                  {/* Arms */}
                  <div className="absolute -left-6 top-4 w-8 h-16 bg-amber-200 rounded-full transform -rotate-12"></div>
                  <div className="absolute -right-6 top-4 w-8 h-16 bg-amber-200 rounded-full transform rotate-45">
                    {/* Hand gesture */}
                    <div className="absolute -right-2 -top-2 w-4 h-4 bg-amber-200 rounded-full"></div>
                  </div>
                </div>
                {/* Legs */}
                <div className="flex justify-center gap-2 mt-1">
                  <div className="w-6 h-16 bg-blue-800 rounded-full"></div>
                  <div className="w-6 h-16 bg-blue-800 rounded-full"></div>
                </div>
                {/* Shoes */}
                <div className="flex justify-center gap-2 mt-1">
                  <div className="w-8 h-4 bg-gray-900 rounded-full"></div>
                  <div className="w-8 h-4 bg-gray-900 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-blue-600">Add New Employee</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Role and Department */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Add Employee
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  // Render modal outside the root element to avoid blur
  return createPortal(modalContent, document.body);
};

export default AddEmployeeModal;