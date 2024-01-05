import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  
  const db = getFirestore();
  const dbRef = collection(db, "agenda");


//MODAL

const addBtn = document.querySelector(".add-btn");
const modalOverlay = document.getElementById("modal-overlay");
const closeBtn = document.querySelector(".close-btn");

const addButtonPressed = () => {
    modalOverlay.style.display="flex";
}

const closeButtonPressed = ()=>{
    modalOverlay.style.display = "none";
}

const hideModal = (e) =>{
    if(e.target===e.currentTarget){
        modalOverlay.style.display = "none"
    }
}


addBtn.addEventListener("click", addButtonPressed);
closeBtn.addEventListener("click", closeButtonPressed);
modalOverlay.addEventListener("click", hideModal);



//FORM VALIDATION

const saveBtn = document.querySelector(".save-btn");

const error = {};

const firstname = document.getElementById("fistname");

const lastname = document.getElementById("lastname");

const email = document.getElementById("email");

const age = document.getElementById("age");

const phone = document.getElementById("phone");


const saveButtonPressed = async() =>{
    //console.log(firstname.value)
    checkRequired([firstname,lastname,email,age,phone]);
    checkEmail(email);
    checkInputLength(age,2);
    checkInputLength(phone,10);
    showErrorMessages();
    
    if(Object.keys(error).length === 0){
        await addDoc(dbRef, {
            firstname: firstname.value,
            lastname: lastname.value,
            age: age.value,
            phone: phone.value,
            email: email.value
        });
    };
}

const checkRequired = (inputArray) => {
    inputArray.forEach((input) => {
      if (input.value.trim() === "") {
        setErrorMessage(input, input.id + " is empty");
      } else {
        deleteErrorMessage(input);
      }
    });
  };

  const setErrorMessage = (input, message) => {
    if (input.nodeName === "INPUT") {
      error[input.id] = message;
      input.style.border = "1px solid red";
    } else {
      error[input] = message;
    }
  };

const deleteErrorMessage = (input) => {
    delete error[input.id];
    input.style.border = "1px solid green";
  };

const checkInputLength = (input, num) => {
    if (input.value.trim() !== "") {
      if (input.value.trim().length === num) {
        deleteErrorMessage(input);
      } else {
        setErrorMessage(input, input.id + ` must be ${num} digits`);
      }
    }
  };

const checkEmail = (input) => {
    if (input.value.trim() !== "") {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(input.value.trim())) {
        deleteErrorMessage(input);
      } else {
        setErrorMessage(input, input.id + " is invalid");
      }
    }
  };


const showErrorMessages = ()=>{
    const errorLabel = document.getElementById("error-label");
    errorLabel.innerHTML = "";
    for(const key in error){
        const li = document.createElement("li");
        li.innerHTML = error[key];
        li.style.color = "red"
        errorLabel.appendChild(li);
    }
}


saveBtn.addEventListener("click", saveButtonPressed);
