import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout';
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
        {/* Auth Layout - Default landing page with sidebar + auth cards */}
        <Route path="/" element={<AuthLayout />} />
        
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
        
        {/* Default redirect - removed since "/" now goes to AuthLayout */}
      </Routes>
    </Router>
  );
}

export default App;
