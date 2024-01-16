import {  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
  
const db = getFirestore();
const dbRef = collection(db, "agenda");

//////////
//GET DATA
//////////

let contacts = [];

const getContacts = async () => {
  try {
    await onSnapshot(dbRef, (docsSnap) => {
      contacts = [];

      docsSnap.forEach((doc) => {
        const contact = doc.data();
        contact.id = doc.id;
        contacts.push(contact);
      });
      showContacts(contacts);
    });
  } catch (err) {
    console.log("getContacts: " + err);
  }
};

getContacts();

// **************
// SHOW CONTACT AS LIST ITEM ON THE LEFT
// **************

const contactList = document.getElementById("contact-list");

const showContacts = (contacts) => {
  contactList.innerHTML = "";

  contacts.forEach((contact) => {
    const li = `
                <li class="contact-list-item" id="${contact.id}">
                    <div class="media">
                        <div class="two-letters">${contact.firstname.charAt(
                          0
                        )}${contact.lastname.charAt(0)}</div>
                    </div>
                    <div class="content">
                        <div class="title">
                        ${contact.firstname} ${contact.lastname}
                        </div>
                        <div class="sub-title">
                        ${contact.email}
                        </div>
                    </div>
                    <div class="action">
                        <button class="edit-user">edit</button>
                        <button class="delete-user">delete</button>
                    </div>
                </li>`;

    contactList.innerHTML += li;
  });
};

//------------------------------------------------------------------------------------
// CLICK CONTACT LIST UL ELEMENT
//------------------------------------------------------------------------------------

const contactListPressed = (event) => {
  const id = event.target.closest("li").getAttribute("id")
  //console.log("id: "+id)
  displayContactOnDetailsView(id);
}

contactList.addEventListener("click", contactListPressed);


//------------------------------------------------------------------------------------
// DISPLAY DETAILS VIEW ON LIST ITEM CLICK
//------------------------------------------------------------------------------------

const getContact = (id) =>{
  return contacts.find(contact =>{
    return contact.id === id;
  });
}

const displayContactOnDetailsView = (id)=>{
  const contact = getContact(id);
  //console.log(contact)
  const rightColDetail = document.getElementById('right-col-detail');
  rightColDetail.innerHTML = `
    <div class="label">Name:</div>
    <div class="data">${contact.firstname} ${contact.lastname}</div>
    
    <div class="label">Age:</div>
    <div class="data">${contact.age}</div>

    <div class="label">Phone:</div>
    <div class="data">${contact.phone}</div>

    <div class="label">E-mail:</div>
    <div class="data">${contact.email}</div>
  `
}


/////////
//MODAL//
/////////
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
  if(e instanceof Event){
    if(e.target===e.currentTarget){
      modalOverlay.style.display = "none"
    }
  } else{
    modalOverlay.style.display="none";
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
    showErrorMessages(error);
    
    if(Object.keys(error).length === 0){

      try {
        await addDoc(dbRef, {
          firstname: firstname.value,
          lastname: lastname.value,
          age: age.value,
          phone: phone.value,
          email: email.value
      });

      hideModal();

      } catch (err) {
       setErrorMessage("error", "Unable to add user data to the database. Please try again later");
       showErrorMessages();
      }
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
