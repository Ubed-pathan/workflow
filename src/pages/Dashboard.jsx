import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Users, CheckSquare, GraduationCap, TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { dashboardStats, employeeActivityData } from '../data/mockData';

const Dashboard = () => {
  // State for calendar navigation
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Calendar generation function
  const generateCalendar = (date) => {
    const calendar = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0

    // Add empty cells for days before the month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }

    return calendar;
  };

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Get month name
  const getMonthName = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Check if date is today
  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  // Check if date is selected
  const isSelected = (day) => {
    return selectedDate === day;
  };

  // Handle date selection
  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(day);
    }
  };

  const calendarDays = generateCalendar(currentDate);
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Employees */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Employees</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{dashboardStats.totalEmployees}</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm font-medium">
                  {dashboardStats.employeeGrowth}% from last month
                </span>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <Users className="w-8 h-8 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Active Tasks */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Active Tasks</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{dashboardStats.activeTasks}</p>
              <div className="flex items-center mt-2">
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                <span className="text-red-500 text-sm font-medium">
                  {Math.abs(dashboardStats.taskChange)}% from last week
                </span>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <CheckSquare className="w-8 h-8 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Interns */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Interns</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{dashboardStats.interns}</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm font-medium">
                  {dashboardStats.internGrowth}% from last week
                </span>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <GraduationCap className="w-8 h-8 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employee Activity Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Employee Activity</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Quarterly</option>
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={employeeActivityData}>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis hide />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg">
                          <p className="text-sm font-medium">{`${label}: ${payload[0].value}%`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                  cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Overview Calendar */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Attendance Overview</h3>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <span className="text-gray-600">‹</span>
              </button>
              <span className="text-sm font-medium">June, 2025</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <span className="text-gray-600">›</span>
              </button>
            </div>
          </div>
          
          {/* Calendar */}
          <div className="space-y-2">
            {/* Week days header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map(day => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`
                    aspect-square flex items-center justify-center text-sm rounded
                    ${day === null ? '' : 'hover:bg-gray-100 cursor-pointer'}
                    ${day === 16 ? 'bg-blue-600 text-white' : 'text-gray-700'}
                  `}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
