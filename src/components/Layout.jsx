import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-48">
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
