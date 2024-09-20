const button_date = document.getElementById("button_date");

const datepicker__month = document.querySelector(".datepicker__month")

button_date.addEventListener("click", () => {
    datepicker__month.classList.toggle("active");
});