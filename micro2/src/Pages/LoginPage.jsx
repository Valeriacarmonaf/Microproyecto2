/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';
import iniciosesion from '../assets/iniciosesion.jpg';
import FotoPerfil from '../assets/fotodeperfil.png';
import  {auth, provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import HomePage from './HomePage';
//const auth = getAuth(app);

const LoginPage = () => {
    const [error, setError] = useState(null);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;
  
      try {
        // Intentar iniciar sesión con Firebase Authentication
        await signInWithEmailAndPassword(auth, correo, contraseña);
        console.log('Inicio de sesión exitoso');
        setError(null);
        // Aquí podrías redirigir a la página que corresponda después del inicio de sesión
      } catch (error) {
        // Manejar errores específicos
        if (error.code === 'auth/invalid-email') {
          setError('Correo electrónico inválido');
        } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setError('Usuario o contraseña incorrectos');
        } else {
          console.error('Error al iniciar sesión:', error.message);
          setError('Error al iniciar sesión. Verifica tus credenciales.');
        }
      }
    };
    

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card card-body shadow lg">
            <img src={FotoPerfil} alt="Foto de perfil" className="estilo-profile" />
            <form onSubmit={handleLogin}>
              <label className="etiqueta1">Correo electrónico:</label>
              <input type="text" placeholder="mariasuarez08@gmail.com" className="cajatexto" id="email" />
              <label className="etiqueta2">Contraseña:</label>
              <input type="password" placeholder="nomegustaprogramar1234" className="cajatexto2" id="password" />
              <button type="submit" className="boton">¡Entrar!</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <h4>
              ¿No tienes una cuenta?
              <a href="/RegistroPage.jsx" className="enlace">
                Regístrate aquí
              </a>
            </h4>
          </div>
        </div>
        <div className="col-md-6">
          <img src={iniciosesion} alt="Imagen de inicio de sesión" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
