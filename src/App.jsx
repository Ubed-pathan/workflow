import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import Components from './pages/Components';
import ColorStyle from './pages/ColorStyle';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes - Full screen without sidebar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/components" element={<Components />} />
        <Route path="/color-style" element={<ColorStyle />} />
        
        {/* Dashboard Routes - With sidebar layout */}
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        <Route path="/employees" element={
          <Layout>
            <Employees />
          </Layout>
        } />
        <Route path="/attendance" element={
          <Layout>
            <Attendance />
          </Layout>
        } />
        <Route path="/tasks" element={
          <Layout>
            <Tasks />
          </Layout>
        } />
        <Route path="/settings" element={
          <Layout>
            <Settings />
          </Layout>
        } />
        
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
