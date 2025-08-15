const ColorStyle = () => {
  const colors = [
    { name: 'Blue', bg: 'bg-blue-600', hex: '#2563EB' },
    { name: 'Gray', bg: 'bg-gray-400', hex: '#9CA3AF' },
    { name: 'Red', bg: 'bg-red-600', hex: '#DC2626' },
    { name: 'Yellow', bg: 'bg-yellow-500', hex: '#EAB308' },
    { name: 'Green', bg: 'bg-green-500', hex: '#22C55E' },
    { name: 'White', bg: 'bg-white border border-gray-300', hex: '#FFFFFF' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-8">Color Style</h1>
        </div>

        {/* Color Palette */}
        <div className="grid grid-cols-6 gap-8 justify-center">
          {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`w-32 h-32 rounded-lg ${color.bg} shadow-lg hover:scale-105 transition-transform cursor-pointer`}
                title={`${color.name} - ${color.hex}`}
              ></div>
              <div className="mt-4 text-center">
                <p className="text-white text-sm font-medium">{color.name}</p>
                <p className="text-gray-400 text-xs">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Color Usage Examples */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-center mb-8">Color Usage Examples</h2>
          
          {/* Primary Colors */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Primary Colors</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-600 p-4 rounded-lg text-center">
                <p className="font-medium">Primary Blue</p>
                <p className="text-sm opacity-80">#2563EB</p>
              </div>
              <div className="bg-blue-700 p-4 rounded-lg text-center">
                <p className="font-medium">Dark Blue</p>
                <p className="text-sm opacity-80">#1D4ED8</p>
              </div>
              <div className="bg-blue-500 p-4 rounded-lg text-center">
                <p className="font-medium">Light Blue</p>
                <p className="text-sm opacity-80">#3B82F6</p>
              </div>
            </div>
          </div>

          {/* Status Colors */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Status Colors</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-green-500 p-4 rounded-lg text-center">
                <p className="font-medium">Success</p>
                <p className="text-sm opacity-80">#22C55E</p>
              </div>
              <div className="bg-red-500 p-4 rounded-lg text-center">
                <p className="font-medium">Error</p>
                <p className="text-sm opacity-80">#EF4444</p>
              </div>
              <div className="bg-yellow-500 p-4 rounded-lg text-center text-gray-900">
                <p className="font-medium">Warning</p>
                <p className="text-sm opacity-80">#EAB308</p>
              </div>
              <div className="bg-gray-500 p-4 rounded-lg text-center">
                <p className="font-medium">Neutral</p>
                <p className="text-sm opacity-80">#6B7280</p>
              </div>
            </div>
          </div>

          {/* Gradient Examples */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Gradient Examples</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-center">
                <p className="font-medium">Blue to Purple</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-lg text-center">
                <p className="font-medium">Green to Blue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorStyle;
