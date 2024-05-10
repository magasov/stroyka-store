function signUp() {
    let signUp = document.querySelector('#signUpPopup')
    let signIn = document.querySelector('#signInPopup')
    signIn.style.display = 'none'
    signUp.style.display = 'block'
}

function popupBlock() {
    let popupDiv = document.querySelector('#popup')
    popupDiv.style = 'div'
}
function popupClose() {
    let popupDiv = document.querySelector('#popup')
    popupDiv.style.display = 'none'
}

function toggleCategories() {
    var categoriesDiv = document.getElementById("categories");
    if (categoriesDiv.style.display === "block") {
        categoriesDiv.style.display = "none";
    } else {
        categoriesDiv.style.display = "block";
    }
}


// header изменение цвета 
const header = document.querySelector('.header__navbar')

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', this.window.scrollY > 700)
})



