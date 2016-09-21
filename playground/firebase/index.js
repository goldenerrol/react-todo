import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCbgJm-qLcTSQSHweFhlQT8DjYLnQAJlhs",
    authDomain: "codeberg-todo-app.firebaseapp.com",
    databaseURL: "https://codeberg-todo-app.firebaseio.com",
    storageBucket: "codeberg-todo-app.appspot.com",
    messagingSenderId: "174170138464"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Daniel',
    age: 34
  }
});


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
  text: 'Todo 1'
});

var newTodoRef = todosRef.push({
  text: 'Todo 2'
});




// // Create a new "notes" item with unique id.
// var notesRef = firebaseRef.child('notes');
//
// //everytime a new note is added, fire a callback
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// // .Push() returns the uniqueID so that we can add to it.
// // push can take the .Set command without having to call it, simply put the data into the push
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);





// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Andrew'});
//
// firebaseRef.child('app').update({name: 'Todo Application'});


// *********get entire dB
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });


// ************DB Listener
// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
// //DB Listener on
// firebaseRef.on('value', logData);
//
// //db listener off
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});

// ******Updating and removing info
// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Mike'
// });
//
// firebaseRef.child('app').update({name: 'Todo App'});
//
// firebaseRef.child('user').update({name: 'Andrew'});

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   'isRunning': null
// });
//
// firebaseRef.child('user/age').remove();
