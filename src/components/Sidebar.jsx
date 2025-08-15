import { 
  Home, 
  Users, 
  Calendar, 
  CheckSquare, 
  Settings, 
  Search 
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Employees', path: '/employees' },
    { icon: Calendar, label: 'Attendance', path: '/attendance' },
    { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const user = {
    name: "Tom H.",
    role: "Project Manager",
    avatar: "TH"
  };

  return (
    <div className="w-48 bg-blue-600 h-screen fixed left-0 top-0 flex flex-col sidebar">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="white"/>
            <g transform="translate(20, 25)">
              <path d="M5 5 C5 5, 15 5, 15 5 C20 5, 25 10, 25 15 C25 20, 20 25, 15 25 C15 25, 5 25, 5 25 C0 25, -5 20, -5 15 C-5 10, 0 5, 5 5" fill="black" fillOpacity="0.8"/>
              <path d="M5 15 C5 15, 15 15, 15 15 C20 15, 25 20, 25 25 C25 30, 20 35, 15 35 C15 35, 5 35, 5 35 C0 35, -5 30, -5 25 C-5 20, 0 15, 5 15" fill="black" fillOpacity="0.6"/>
              <path d="M5 25 C5 25, 15 25, 15 25 C20 25, 25 30, 25 35 C25 40, 20 45, 15 45 C15 45, 5 45, 5 45 C0 45, -5 40, -5 35 C-5 30, 0 25, 5 25" fill="black" fillOpacity="0.4"/>
              <path d="M35 5 C35 5, 45 5, 45 5 C50 5, 55 10, 55 15 C55 20, 50 25, 45 25 C45 25, 35 25, 35 25 C30 25, 25 20, 25 15 C25 10, 30 5, 35 5" fill="black" fillOpacity="0.8"/>
              <path d="M35 15 C35 15, 45 15, 45 15 C50 15, 55 20, 55 25 C55 30, 50 35, 45 35 C45 35, 35 35, 35 35 C30 35, 25 30, 25 25 C25 20, 30 15, 35 15" fill="black" fillOpacity="0.6"/>
              <path d="M35 25 C35 25, 45 25, 45 25 C50 25, 55 30, 55 35 C55 40, 50 45, 45 45 C45 45, 35 45, 35 45 C30 45, 25 40, 25 35 C25 30, 30 25, 35 25" fill="black" fillOpacity="0.4"/>
            </g>
          </svg>
          <span className="text-white font-bold text-xl">workflow</span>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white/10 text-white placeholder-white/60 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-3 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer w-full text-left ${isActive ? 'text-white bg-white/20' : ''}`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format&q=80" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="text-white text-sm font-medium">{user.name}</div>
            <div className="text-white/60 text-xs">{user.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
