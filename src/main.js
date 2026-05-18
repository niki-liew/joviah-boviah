const firebaseConfig = {
  apiKey: "AIzaSyChhzqIKM9LOY_LGPZrbvUurMrH8GlZBjI",
  authDomain: "pystart-b38e2.firebaseapp.com",
  projectId: "pystart-b38e2",
  storageBucket: "pystart-b38e2.firebasestorage.app",
  messagingSenderId: "513344854145",
  appId: "1:513344854145:web:1863d16bfdbc3c50a65580"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

function signUp(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log("Signed up:", user.user.uid);
    })
    .catch(err => alert(err.message));
}

function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log("Logged in:", user.user.uid);
    })
    .catch(err => alert(err.message));
}

function saveData(data) {
  const user = auth.currentUser;

  db.collection("users").doc(user.uid).set({
    data: data
  });
}

function loadData() {
  const user = auth.currentUser;

  db.collection("users").doc(user.uid)
    .get()
    .then(doc => {
      console.log(doc.data());
    });
}