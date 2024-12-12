
const groupSelect = document.getElementById("groupSelect");
groupSelect.addEventListener("change", () => {
    console.log("Таңдалған топ:", groupSelect.value);
});

const textarea = document.getElementById("textarea");
const feedbackMessage = document.getElementById("feedbackMessage");
textarea.addEventListener("input", () => {
    if (textarea.value.length > 15) {
        feedbackMessage.textContent = "Пікір 15 символдан аспауы керек!";
    } else {
        feedbackMessage.textContent = "";
    }
});

const rating = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");
rating.addEventListener("input", () => {
    ratingValue.textContent = rating.value;
});

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    if (textarea.value.length > 15) {
        alert("Пікір ұзындығы дұрыс емес!");
    } else {
        console.log("Таңдалған топ:", groupSelect.value);
        console.log("Пікір:", textarea.value);
        console.log("Бағалау:", rating.value);
        alert("Форма сәтті жіберілді!");
    }
});