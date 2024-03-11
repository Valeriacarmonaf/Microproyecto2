import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import clubesJSON from './clubs.json';

const TransferirDatos = () => {
  useEffect(() => {
    const transferirDatos = async () => {
      const db = firebase.firestore();
      
      try {
        const batch = db.batch();
        
        // Itera sobre cada club en el archivo JSON
        clubesJSON.forEach((club) => {
          const { ID, nombre, descripcion, videojuegos } = club;

          // Crea una referencia para el documento del club
          const clubRef = db.collection('clubes').doc(ID);

          // Agrega los datos del club al lote (batch)
          batch.set(clubRef, { nombre, descripcion, videojuegos });
        });

        // Ejecuta el lote de escrituras
        await batch.commit();
        console.log('Datos transferidos correctamente.');
      } catch (error) {
        console.error('Error al transferir datos:', error);
      }
    };

    transferirDatos();
  }, []);

  return (
    <div>
      <p>Transferiendo datos...</p>
    </div>
  );
};

export default TransferirDatos;