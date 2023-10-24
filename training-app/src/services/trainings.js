import {db} from './firebase.js';
import { addDoc, collection, onSnapshot, serverTimestamp, query, orderBy, getDocs, doc, deleteDoc, where } from "firebase/firestore";

  const refTraining = collection(db, 'trainings');
  console.log(refTraining);

/**
 * Guarda un nuevo mensaje de chat (documento) en la colección trainings con la data correspondiente incluyendo la fecha y hora que se publicó. 
 * @param {{}} data 
 * @returns {Promise}
 */
export function trainingsSaveTraining(data){
  
    return addDoc(refTraining, {
        ...data,
        created_at: serverTimestamp(),
    });
};

export async function getTrainings(){
  let getTrainings = await getDocs(refTraining);
  console.log(getTrainings);
  let trainingDocs = getTrainings.docs;

  return trainingDocs;
}

/**
 * Elimina un documento en una colección de Firebase Firestore.
 * @param {string} collectionName - El nombre de la colección que contiene el documento.
 * @param {string} documentId - El ID del documento que deseas eliminar.
 * @returns {Promise} - Una promesa que se resuelve cuando se ha eliminado el documento.
 */
export async function deleteDocument(documentId) {
  const documentRef = doc(db, 'trainings', documentId);
  console.log(documentRef);
  await deleteDoc(documentRef);
}



export async function getTrainingDocs(){
  let trainingDocId;
  let documents = [];
  const querySnapshot = await getDocs(collection(db, 'trainings'));
  console.log(querySnapshot);

  querySnapshot.forEach((doc) => {
       // Aquí puedes acceder a los datos de cada documento.
       // Por ejemplo, doc.data() te proporcionará los datos del documento.
       // Puedes ajustar esta parte según tu estructura de datos real.
           const documentData = {
               id: doc.id, // ID del documento
               ...doc.data(), // Datos del documento
           };
   
           documents.push(documentData);
       });
       // const snapshot = await getDocs( 
       //     query(privateChatAdmin,
       //     where('users', '==', {
       //         [adminId]: true,
       //         [receiverId]: true,
       //     }),
       //     //cuando encuentra un documento con esos valores deje de buscar:
       //     limit(1),
       //  ));
    
       trainingDocId = querySnapshot.docs[0];
       console.log(trainingDocId.id);
       return trainingDocId.id;
}


export async function buscarYEliminarDocumento(valor) {
  const collectionName = 'trainings';
  const campo = 'name';
  let deleted;
  try {
    
      const collectionRef = collection(db, collectionName);
      const q = query(collectionRef, where(campo, '==', valor));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
      console.log('No se encontraron documentos que coincidan con la búsqueda.');
      return;
      }
      
      // Supongamos que quieres eliminar el primer documento encontrado (ajusta esta lógica según tus necesidades).
      const documentToDelete = querySnapshot.docs[0];
      const documentRef = doc(db, collectionName, documentToDelete.id);
    
     deleted = await deleteDoc(documentRef);
      
     
      console.log(documentRef);
 

     
  } catch (error) {
      console.error('Error al buscar y eliminar el documento:', error);
  }

  return deleted;

}