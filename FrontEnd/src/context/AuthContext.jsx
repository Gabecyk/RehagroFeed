import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Mantém o token em todos os requests
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.get('http://127.0.0.1:8000/api/rf/me')
    .then((response) => {
      setUser(response.data);
    })
    .catch(() => {
      localStorage.removeItem('token');
    })
    .finally(() => {
      setLoading(false);
    });
} else {
  setLoading(false);
}
    }, [children]);

    const login = (token) => {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return axios.get('http://127.0.0.1:8000/api/rf/me').then((res) => {
            setUser(res.data);
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
