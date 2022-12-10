import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxib5g7-GnZKjEoFv8ujQupDpvBOiAiSM",
  authDomain: "reactjs-iani.firebaseapp.com",
  projectId: "reactjs-iani",
  storageBucket: "reactjs-iani.appspot.com",
  messagingSenderId: "71582276227",
  appId: "1:71582276227:web:dcfcdf252c9fdebaefd9b6"
};

const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);

export default async function getItems() {
  const colectionProductsRef = collection(DB, "products");
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
 
  return documentsData;
}

export async function getItemsOrdered() {
  const colectionProductsRef = collection(DB, "products");
  const q = query(colectionProductsRef, orderBy("index"), limit(10));

  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map((doc) => {

    return {
      ...doc.data(),
      id: doc.id,
    };
  }); 
  return documentsData;
}


export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}


export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");

  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}

export async function exportArrayToFirestore() {
  const products = [
    {
    id: 1,
    title: "Inglés para negocios",
    price: 3500 ,
    stock: 10,
    category: "Books",
    body: "Take your business to the next level by improving your accuracy and fluency as regards English language focused on business and convey professionalism in current business situations",
    thumbnail: "/images/book.jpg"
    }, 
    
    {
    id: 2,
    title: "Inglés general",
    price: 2500,
    stock: 8,
    category: "Books",
    body:  "Start familiarizing with the English language in the best possible way by addressing the most common mistakes beginners usually have and by overcoming various challenges in your written and spoken performance",
    thumbnail: "/images/book.jpg"
    
    }, 
    
    {
      id: 3,
     title:  "Inglés para viajes",
     price: 4500,
     stock: 15,
     category: "Books",
     body: "Feel confident during your trips around the globe whenever you encounter situations where you have to communicate with native English speakers in different countries by learning all the most frequent and common interactional language tools ",
     thumbnail:"/images/book.jpg"
     }, 
    
      {
      id: 4,
     title:  "Inglés para exámenes internacionales",
    price: 5000,
    stock: 5,
    category: "Books",
     body:  "If you are eager to pass international exams to live or study abroad, this book is perfect to fulfil those needs and prepare you to overcome exam situations that require specific strategies",
     thumbnail: "/images/book.jpg"
    },
   
    {
     id: 5,
     title:  "Inglés general para nivel BEGINNER"  ,
     price: 37500,
     stock: 4,
     category: "Courses" ,
     body: "Este es un curso para descagarte de forma online y aprender inglés con videos y actividades armados por nuestros profesores. Tiene un total del 10 modulos, con 5 secciones cada uno." ,
     thumbnail: "/images/course.jpg"
   },
      
       {
         id: 6,
        title: "Inglés general para nivel INTERMEDIATE" ,
       price: 45000,
       stock: 6,
       category: "Courses",
        body:  "Este es un curso para descagarte de forma online y aprender inglés con videos y    actividades armados por nuestros profesores. Tiene un total del 10 modulos, con 5 secciones cada uno. ",
        thumbnail: "/images/course.jpg"
       },
    
       {
        id: 7,
        title: "Inglés general para nivel ADVANCED" ,
       price: 58500,
       stock: 3,
       category: "Courses",
        body:  "Este es un curso para descagarte de forma online y aprender inglés con videos y actividades armados por nuestros profesores. Tiene un total del 10 modulos, con 5 secciones cada uno.",
        thumbnail: "/images/course.jpg"
       },
    ];

    const collectionRef = collection(DB, "products");

    // for... of
    // products.map( (item) => {})
    for (let item of products) {
      item.index = item.id;
      delete item.id;
      let docOrder = await addDoc(collectionRef, item);
      console.log("Documento creado, id:", docOrder.id);
    }
  }