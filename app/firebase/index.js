import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCbgJm-qLcTSQSHweFhlQT8DjYLnQAJlhs",
      authDomain: "codeberg-todo-app.firebaseapp.com",
      databaseURL: "https://codeberg-todo-app.firebaseio.com",
      storageBucket: "codeberg-todo-app.appspot.com",
      messagingSenderId: "174170138464"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
