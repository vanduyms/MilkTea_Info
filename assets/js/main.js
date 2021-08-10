// Show product
const btnAll = document.getElementById('btn-allfoods'),
    btnMacchiato = document.getElementById('btn-macchiato'),
    btnSpecial = document.getElementById('btn-specialdrink'),
    macchiato = document.querySelectorAll('#macchiato'),
    special = document.querySelectorAll('#specialdrink')

if (btnAll) {
    btnAll.addEventListener('click', () => {
        [...macchiato].forEach((item) => {
            item.classList.add('active-food')
        });
        [...special].forEach((item) => {
            item.classList.add('active-food')
        });
        btnAll.classList.add('btn-active')
        btnSpecial.classList.remove('btn-active')
        btnMacchiato.classList.remove('btn-active')
    })
}

if (btnMacchiato) {
    btnMacchiato.addEventListener('click', () => {
        [...macchiato].forEach((item) => {
            item.classList.add('active-food')
        });
        [...special].forEach((item) => {
            item.classList.remove('active-food')
        });
        btnAll.classList.remove('btn-active')
        btnMacchiato.classList.add('btn-active')
        btnSpecial.classList.remove('btn-active')
    })
}

if (btnSpecial) {
    btnSpecial.addEventListener('click', () => {
        [...macchiato].forEach((item) => {
            item.classList.remove('active-food')
        });
        [...special].forEach((item) => {
            item.classList.add('active-food')
        });
        btnAll.classList.remove('btn-active')
        btnMacchiato.classList.remove('btn-active')
        btnSpecial.classList.add('btn-active')
    })
}


// Show menu
/*=========TOGGLE MENU=============*/
const toggleMenu = document.getElementById("toggle");
const headerMenu = document.getElementById("menu");
const closeMenu = document.getElementById('close');
const itemLink = document.querySelectorAll(".header__item");

if (toggleMenu) {
    toggleMenu.addEventListener('click', () => {
        headerMenu.classList.add('is-show');
        closeMenu.classList.add('is-show')
    })
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        headerMenu.classList.remove('is-show');
        closeMenu.classList.remove('is-show')
    })
}

[...itemLink].forEach((item) => {
    item.addEventListener('click', function(e) {
        headerMenu.classList.remove('is-show');
        closeMenu.classList.remove('is-show')
    })
})


/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop + 200;
        var sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)