const trailerButton = document.querySelector("#btn-trailer");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal-button");
const video = document.getElementById("video");
const videoLink = video.src;

function openModal(){
    video.setAttribute("src", videoLink);
    toggleModal("modalOpened");
}

function closeModal(){
    video.setAttribute("src", "");
    toggleModal("modalOpened");
};

function toggleModal(className){
    modal.classList.toggle(className);
}