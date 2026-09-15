// Get all our structural elements
const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".close-btn");

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// 1. Open the modal when clicking the portfolio button
openBtn.addEventListener("click", openModal);

// 2. Close the modal when clicking the close button
closeBtn.addEventListener("click", closeModal);

// 3. Close the modal if clicking outside the white box completely
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// 4. Close the modal with the Escape key (accessibility)
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "flex") {
        closeModal();
    }
});
