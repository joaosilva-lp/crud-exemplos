
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