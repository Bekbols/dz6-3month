// MODAL

const modalTriggerButton = document.querySelector("#btn-get");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal_close");

const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}
const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
}
modalTriggerButton.onclick = () => {
    openModal()
}
modalCloseButton.onclick = () => {
    closeModal()
}
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}


// SCROLL MODAL
const scrollModal = () => {
    if ((window.innerHeight + window.scrollY+10) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', scrollModal)
    }
}

window.addEventListener('scroll', scrollModal)



setTimeout(() => {
    openModal()
}, 10000)
