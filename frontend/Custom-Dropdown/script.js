const dropbtn = document.querySelector(".dropbtn");

const dropbtnSelect = document.querySelector(".dropbtn__select");

const dropdownContent = document.querySelector(".dropdown-content");

const options = document.querySelectorAll('.dropdown-content .option');

dropbtn.addEventListener("click", () => {
    const dropbtnIndicator = document.querySelector(".dropbtn__indicator");

    dropdownContent.classList.toggle("active")
    if (dropbtnIndicator.textContent === "V"){
        dropbtnIndicator.textContent = "Λ"
    } else {
        dropbtnIndicator.textContent = "V"
    }
});

options.forEach(option => {
    option.addEventListener("click", (event) => {

        options.forEach(opt => opt.classList.remove('activeIcon'));

        event.target.classList.add('activeIcon');

        let opcao = option.innerHTML

        dropbtnSelect.textContent = opcao
    });
});

window.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
        dropdownContent.classList.remove("active")
    }
})