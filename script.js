const page = document.getElementById("page");

let current = 1;
const total = 40;

function showPage() {

    const number = String(current).padStart(2, "0");

    page.src = `${number}.jpg`;

}

function nextPage() {
    if (current < total) {
        current++;
        showPage();
    }
}

function previousPage() {
    if (current > 1) {
        current--;
        showPage();
    }
}

// Keyboard navigation
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {
        previousPage();
    }
});

// Mouse navigation
document.addEventListener("click", (event) => {

    if (event.clientX > window.innerWidth / 2) {
        nextPage();
    } else {
        previousPage();
    }

});
