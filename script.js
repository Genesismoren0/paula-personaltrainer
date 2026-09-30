const header =
    document.getElementById("header");

const nav =
    document.getElementById("nav");

const menuToggle =
    document.getElementById("menuToggle");

const scrollTopButton =
    document.getElementById("scrollTop");

const revealElements =
    document.querySelectorAll(".reveal");


/* HEADER */

window.addEventListener(
    "scroll",
    () => {

        if (!header) return;


        if (window.scrollY > 35) {

            header.classList.add(
                "scrolled"
            );

        } else {

            if (
                !header.classList.contains(
                    "about-header"
                )
            ) {

                header.classList.remove(
                    "scrolled"
                );

            }

        }

    }
);


/* MENU */

if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "open"
            );

        }
    );

}


document
    .querySelectorAll(".nav-link")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (nav) {

                    nav.classList.remove(
                        "open"
                    );

                }

            }
        );

    });


/* REVEAL */

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: .08
        }

    );


revealElements.forEach(
    (element) => {

        observer.observe(
            element
        );

    }
);


/* INICIO */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(
                ".hero .reveal, .about-intro .reveal"
            )
            .forEach(
                (element, index) => {

                    setTimeout(
                        () => {

                            element
                                .classList
                                .add("visible");

                        },

                        100 + index * 100
                    );

                }
            );

    }
);


/* SCROLL TOP */

window.addEventListener(
    "scroll",
    () => {

        if (!scrollTopButton) return;


        if (window.scrollY > 550) {

            scrollTopButton
                .classList
                .add("show");

        } else {

            scrollTopButton
                .classList
                .remove("show");

        }

    }
);


if (scrollTopButton) {

    scrollTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}