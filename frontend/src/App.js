import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route 
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route 
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route 
              path="/forgot-password"
              element={<ForgotPassword /> }
            />
            <Route 
              path="/reset-password/:token"
              element={<ResetPassword /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
