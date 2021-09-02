import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC7k5onF3n-Fxb8OWWiqx5ejaZDuA0fgcw",
  authDomain: "musicsh-cef87.firebaseapp.com",
  projectId: "musicsh-cef87",
  storageBucket: "musicsh-cef87.appspot.com",
  messagingSenderId: "156308129322",
  appId: "1:156308129322:web:f0e07a848d3ed07725a553",
  measurementId: "G-7YNNB1R1EE"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const mapUser = (user) =>{
  try{
    const {photoURL,displayName} = user["_delegate"]
    return {photoURL,displayName}
  }catch(err){
    return user;
  }
}

export const onAuthStateChanged = (setState) =>{
  return firebase.auth().onAuthStateChanged((user)=>{
    const normalizedUser = mapUser(user)
    setState(normalizedUser)
  })
}

export const fecthSongs = (callback) =>{
  return db.collection("songs").orderBy("name","asc").onSnapshot(({docs})=>{
    callback(docs.map((doc)=>doc.data()))
  })
}

export const loginWithGithub = () =>{
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const loginWithGoogle = () =>{
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}

export const signOut = async() =>{
  return firebase.auth().signOut();
}

export const saveSong = async({content,name}) =>{
  db.collection("songs").add({
    content,
    name,
    createdAt:firebase.firestore.Timestamp.fromDate(new Date())
  })
}


export const uploadFile = (file) =>{
  const ref = firebase.storage().ref(`files/${file.name}`);
  const task = ref.put(file)
  return task;
}