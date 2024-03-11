/* eslint-disable no-unused-vars */

import { db } from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import gamesJSON from '../Componentes/Games/Games.json' 

const loadGamesData = async () => {
  const gamesCollection = collection(db, 'Juegos');  

  try {
    await Promise.all(
      gamesJSON.map(async (game) => {
        const { ID, titulo, genero, descripcion } = game;
        const gameDoc = doc(gamesCollection, ID); 

        await setDoc(gameDoc, { titulo, genero, descripcion });  
      })
    );

    console.log('Datos de Juegos cargados exitosamente.');
  } catch (error) {
    console.error('Error al cargar datos de Juegos:', error);
  }
};

export { loadGamesData };
