import './index.css';
import AppRoutes from './routes/route'
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './context/AuthContext'

function App() {
  const { loading } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  if (loading) return <p>Carregando aplicação...</p>;
  return (
    <>
      <AppRoutes/>
    </>
  );
}

export default App;

