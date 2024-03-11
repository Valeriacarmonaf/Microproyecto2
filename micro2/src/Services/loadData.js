import { db } from '../firebase'; 
import { collection, doc, setDoc } from 'firebase/firestore';  // Cambio en las importaciones
import clubesJSON from '../Componentes/Clubs/Clubs.json';

const loadClubsData = async () => {
  const clubsCollection = collection(db, 'Clubes');  // Cambio en la referencia a la colección

  try {
    await Promise.all(
      clubesJSON.map(async (club) => {
        const { ID, nombre, descripcion, videojuegos } = club;
        const clubDoc = doc(clubsCollection, ID);  // Cambio en la referencia al documento

        await setDoc(clubDoc, { nombre, descripcion, videojuegos });  // Cambio en la función para establecer datos
      })
    );

    console.log('Datos de Clubs cargados exitosamente.');
  } catch (error) {
    console.error('Error al cargar datos de Clubs:', error);
  }
};

export { loadClubsData };
