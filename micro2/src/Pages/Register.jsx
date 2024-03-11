/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { app, db } from '../firebase';
import Imagenregistro from '../assets/registropic.png';
import FotoPerfil from '../assets/fotodeperfil.png';
import  {auth, provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import HomePage from './HomePage';

//const auth = getAuth(app);

const Register = () => {
  const [registrando, setRegistrando] = useState(false);

  const funcAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    const nombre = e.target.name.value;

    try {
      // Registrar usuario en la autenticación de Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
      const user = userCredential.user;

      // Guardar información adicional en la colección 'Usuarios' de Firestore
      await addDoc(collection(db, 'Usuarios'), {
        uid: user.uid,
        nombre: nombre,
        correo: correo,
      });

      console.log('Usuario registrado con éxito');

    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card card-body shadow lg">
            <img src={FotoPerfil} alt="Foto de perfil" className="estilo-profile" />
            <form onSubmit={funcAutenticacion}>
              <label className="etiqueta1">Nombre:</label>
              <input type="text" placeholder="María" className="cajatexto" id="name" />
              <label className="etiqueta1">Correo electrónico:</label>
              <input type="text" placeholder="mariasuarez08@gmail.com" className="cajatexto" id="email" />
              <label className="etiqueta2">Contraseña:</label>
              <input type="password" placeholder="nomegustaprogramar1234" className="cajatexto2" id="password" />
              <button className="boton">¡Registrarme!</button>
            </form>
            <h4>
              ¿Ya tienes una cuenta?
                <a href="/LoginPage.jsx" className="enlace">
                  Inicia sesión
                </a>
            </h4>
          </div>
        </div>
        <div className="col-md-6">
          <img src={Imagenregistro} alt="Imagen de inicio de sesión" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Register;
