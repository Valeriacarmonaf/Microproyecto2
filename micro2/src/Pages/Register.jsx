/* eslint-disable no-unused-vars */
//ESTA ES LA PÁGINA DE REGISTRO, AQUÍ SE REGISTRAN LOS USUARIOS.

import React, { createRef } from 'react';
import { useState } from 'react';
import Imagenregistro from '../assets/registropic.png';
import FotoPerfil from '../assets/fotodeperfil.png';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { app } from '../firebase'; // Ajusta la ruta según la estructura de tus carpetas

//------------------------------------------------------------------------------//

const auth= getAuth(app)


const Register = () => {
    const [registrando, setRegistrando] = useState(false)
    const funcAutenticacion= async(e)=>{

        e.preventDefault();
        const correo= e.target.email.value;
        const contraseña= e.target.password.value;
        console.log(correo)

        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }


    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card card-body shadow lg">
            <img src={FotoPerfil} alt="Foto de perfil" className="estilo-profile" />
            <form onSubmit={funcAutenticacion}>
                <label className= 'etiqueta1'>Nombre:</label>
                <input type="text" placeholder="María" className="cajatexto" id='name' />
                <label className='etiqueta1'>Correo electrónico:</label>
                <input type="text" placeholder="mariasuarez08@gmail.com" className="cajatexto" id='email' />
                <label className='etiqueta2'>Contraseña:</label>
                <input type="password" placeholder="nomegustaprogramar1234" className="cajatexto2" id='password' />
                <button className="boton">¡Registrarme!</button>
            </form>
            <h4>¿Ya tienes una cuenta?<button className='boton2' ><u>Inicia sesión</u></button></h4>
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

