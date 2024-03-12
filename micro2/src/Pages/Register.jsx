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
import { Link } from 'react-router-dom';
//const auth = getAuth(app);

const Register = () => {

  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');

  // Funciones para manejar el cambio en los campos de texto
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleCorreoElectronicoChange = (event) => {
    setCorreoElectronico(event.target.value);
  };

  // Funciones para manejar el evento de pérdida de foco y guardar en localStorage
  const handleNombreBlur = () => {
    localStorage.setItem('nombre', nombre);
  };

  const handleUsuarioBlur = () => {
    localStorage.setItem('usuario', usuario);
  };

  const handleCorreoElectronicoBlur = () => {
    localStorage.setItem('correoElectronico', correoElectronico);
  };

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
              <input type="text" value={nombre} onChange={handleNombreChange} onBlur={handleNombreBlur} placeholder="María" className="cajatexto" id="name" />
              <label className="etiqueta1">Correo electrónico:</label>
              <input type="text" value={correoElectronico} onChange={handleCorreoElectronicoChange} onBlur={handleCorreoElectronicoBlur} placeholder="mariasuarez08@gmail.com" className="cajatexto" id="email" />
              <label className="etiqueta2">Contraseña:</label>
              <input type="password" value={usuario} onChange={handleUsuarioChange} onBlur={handleUsuarioBlur} placeholder="nomegustaprogramar1234" className="cajatexto2" id="password" />
              <Link to="/login" className='enlace'>
                <button className="boton">¡Registrarme!</button>
              </Link>
            </form>
            <h4>
              ¿Ya tienes una cuenta?

                <Link to="/login" className='enlace'>
                  Inicia sesión
                </Link>
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