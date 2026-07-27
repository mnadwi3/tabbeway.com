// ================= HEADER SCROLL =================

const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 40);
    }
});


// ================= MOBILE MENU =================

const hamBtn = document.getElementById("hamBtn");
const mobileNav = document.getElementById("mobileNav");
const mobileClose = document.getElementById("mobileClose");

if (hamBtn && mobileNav && mobileClose) {

    hamBtn.addEventListener("click", () => {
        mobileNav.classList.add("open");
    });

    mobileClose.addEventListener("click", () => {
        mobileNav.classList.remove("open");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
        });
    });

}


// ================= SCROLL REVEAL =================

const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

revealEls.forEach(el => revealObserver.observe(el));


// ================= PLANE ANIMATION =================

const plane = document.getElementById("planeIcon");
const track = document.querySelector(".journey-track");

if (plane && track) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                plane.style.left = "calc(100% - 26px)";
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(track);

}


// ================= FAQ =================

document.querySelectorAll(".faq-q").forEach(btn => {

    btn.addEventListener("click", () => {

        const item = btn.parentElement;
        const answer = item.querySelector(".faq-a");
        const isOpen = item.classList.contains("open");

        document.querySelectorAll(".faq-item").forEach(i => {

            i.classList.remove("open");
            i.querySelector(".faq-a").style.maxHeight = null;

        });

        if (!isOpen) {

            item.classList.add("open");
            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});


// ================= GOOGLE SHEET FORM =================

const scriptURL = "https://script.google.com/macros/s/AKfycbxIIW0vjxfuFn6pdkkzGDi35Pbx_xjFfFwYlQdf77EuTzPqsnNrj0rxVKdO5F4lgOqJ/exec";

const form = document.getElementById("appointmentForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();
        e.stopPropagation();

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        })

            .then(() => {

                form.reset();

                document
                    .getElementById("successPopup")
                    .classList.add("show");

            })

            .catch(error => {

                console.error(error);

                alert("Something went wrong. Please try again.");

            });

        return false;

    });

}
// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(contactForm)
        })

            .then(() => {

                contactForm.reset();

                document
                    .getElementById("successPopup")
                    .classList.add("show");

            })

            .catch(error => {

                console.error(error);

                alert("Something went wrong. Please try again.");

            });

    });

}

// ================= POPUP =================

const closePopup = document.getElementById("closePopup");

if (closePopup) {

    closePopup.addEventListener("click", () => {

        document
            .getElementById("successPopup")
            .classList.remove("show");

    });

}