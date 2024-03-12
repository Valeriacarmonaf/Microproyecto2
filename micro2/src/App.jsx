/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';
import Register from './Pages/Register';
import Home from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { loadClubsData } from './Services/loadData';
import { loadGamesData } from './Services/loadGamesData'; 
import './App.css';

const auth = getAuth(app);

function App() {
  useEffect(() => {
    loadClubsData();
    loadGamesData();
  }, []);

  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div>
      {usuario ? <LoginPage/> : <Register />}
      {/* {usuario ? <Home correoUsuario={usuario.email} /> : <Register />}  */}
    </div>
  );
}

export default App;
