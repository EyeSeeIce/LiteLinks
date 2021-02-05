import fb from "firebase";

let config = {
    apiKey: "AIzaSyC3CbtNPYY3HVaEECHx8PgKb6Jpcrx92HI",
    authDomain: "myawsometodolist.firebaseapp.com",
    databaseURL: "https://myawsometodolist-default-rtdb.firebaseio.com",
    projectId: "myawsometodolist",
    storageBucket: "myawsometodolist.appspot.com",
    messagingSenderId: "523212344821",
    appId: "1:523212344821:web:5b8d84865275a43e75e4bc",
    measurementId: "G-2W9ZKNRZC4"
}

fb.initializeApp(config)
export let firebase = fb