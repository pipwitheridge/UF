const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const readBtn = document.getElementById('readBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.firestore();


const usersCollection = database.collection('users');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  const ID = usersCollection.add({
    first_name: firstName.value,
    last_name: lastName.value,
    age: Number(age.value)
  });
});