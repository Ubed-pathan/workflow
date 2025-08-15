import { 
  Download, 
  Home, 
  Users, 
  Calendar, 
  CheckSquare, 
  Settings,
  Eye,
  Edit,
  Trash2,
  Star,
  ArrowUp
} from 'lucide-react';

const Components = () => {
  const iconList = [
    { icon: Download, name: 'Download' },
    { icon: Home, name: 'Home' },
    { icon: Users, name: 'Users' },
    { icon: Calendar, name: 'Calendar' },
    { icon: CheckSquare, name: 'CheckSquare' },
    { icon: Settings, name: 'Settings' },
    { icon: Eye, name: 'Eye' },
    { icon: Edit, name: 'Edit' },
    { icon: Trash2, name: 'Trash' },
    { icon: Star, name: 'Star' },
    { icon: ArrowUp, name: 'ArrowUp' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">Components</h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-800 rounded-md"></div>
            </div>
            <span className="text-white font-bold text-xl">workflow</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-700 rounded-lg p-1 flex gap-1">
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md font-medium">
              Continue
            </button>
            <button className="text-gray-300 px-4 py-2 rounded-md font-medium hover:text-white">
              Getting started
            </button>
          </div>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-6 gap-8 mb-12">
          {iconList.map(({ icon: Icon, name }) => (
            <div key={name} className="flex flex-col items-center">
              <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center mb-2 hover:bg-gray-700 transition-colors">
                <Icon className="w-8 h-8 text-gray-300" />
              </div>
              <span className="text-xs text-gray-400">{name}</span>
            </div>
          ))}
        </div>

        {/* Additional Components */}
        <div className="grid grid-cols-6 gap-8 mb-12">
          {/* More icons row */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center mb-2">
              <div className="w-8 h-8 bg-gray-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center mb-2">
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center mb-2">
              <Eye className="w-8 h-8 text-gray-300" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center mb-2">
              <Edit className="w-8 h-8 text-gray-300" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center mb-2">
              <ArrowUp className="w-8 h-8 text-gray-300" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center mb-2">
              <Trash2 className="w-8 h-8 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Configuration Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Width
            </label>
            <input
              type="text"
              placeholder="Add value"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">G</span>
              <span className="text-2xl text-blue-500">f</span>
              <span className="w-6 h-6 bg-white rounded-full"></span>
              <span className="text-gray-400">Default</span>
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Active
          </button>
        </div>
      </div>
    </div>
  );
};

export default Components;
