/* ==================================================
   LOCK SCREEN
================================================== */

document.body.classList.add("locked");


/* ==================================================
   OPEN INVITATION
================================================== */

const openButton =
    document.getElementById("openInvitation");

const opening =
    document.getElementById("opening");

const website =
    document.getElementById("website");


openButton.addEventListener("click", () => {

    /*
        Start moon transition
    */

    opening.classList.add("transition");


    /*
        Reveal main website
    */

    setTimeout(() => {

        website.classList.add("show");

    }, 500);


    /*
        Remove opening screen
    */

    setTimeout(() => {

        opening.classList.add("hide");

        document.body.classList.remove("locked");

    }, 1500);

});


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ==================================================
   COUNTDOWN
================================================== */

const walimaDate =
    new Date(
        "2026-11-06T19:00:00+05:30"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        walimaDate - now;


    if (difference <= 0) {

        document.getElementById("days")
            .textContent = "00";

        document.getElementById("hours")
            .textContent = "00";

        document.getElementById("minutes")
            .textContent = "00";

        document.getElementById("seconds")
            .textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);