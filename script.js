/* ================================
   THE LAST ARCHIVE
   LANDING PAGE
================================ */

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;1,400&display=swap');


/* ================================
   RESET
================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #0b090b;
    color: #eee8dc;
    font-family: "Cormorant Garamond", serif;
    overflow: hidden;
}


/* ================================
   LANDING
================================ */

.landing {
    position: relative;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background:
        radial-gradient(
            circle at center,
            rgba(65, 38, 72, 0.18),
            transparent 55%
        ),
        #0b090b;
}


/* ================================
   GRAIN
================================ */

.grain {
    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: 0.08;

    background-image:
        url("https://grainy-gradients.vercel.app/noise.svg");

    z-index: 5;
}


/* ================================
   MAIN CONTENT
================================ */

.archive-content {
    position: relative;

    text-align: center;

    z-index: 10;

    transform: translateY(-40px);
}


/* ================================
   STATUS
================================ */

.status {
    font-family: "Cinzel", serif;

    font-size: 10px;

    letter-spacing: 4px;

    color: #a99b83;

    margin-bottom: 25px;
}


/* ================================
   TITLE
================================ */

h1 {
    font-family: "Cinzel", serif;

    font-size: clamp(42px, 6vw, 86px);

    font-weight: 500;

    letter-spacing: 12px;

    color: #eee8dc;

    text-shadow:
        0 0 25px rgba(183, 145, 90, 0.15);

    margin-left: 12px;
}


/* ================================
   SUBTITLE
================================ */

.subtitle {
    margin-top: 20px;

    font-size: 19px;

    font-style: italic;

    letter-spacing: 2px;

    color: #bdb3a5;
}


/* ================================
   ENTER BUTTON
================================ */

.enter-btn {
    margin-top: 45px;

    padding: 14px 32px;

    background: transparent;

    border: 1px solid #8e7755;

    color: #d8cbb7;

    font-family: "Cinzel", serif;

    font-size: 11px;

    letter-spacing: 3px;

    cursor: pointer;

    transition:
        0.4s ease,
        box-shadow 0.4s ease;
}

.enter-btn:hover {
    background: rgba(142, 119, 85, 0.08);

    border-color: #c4a878;

    color: #fff3dc;

    box-shadow:
        0 0 20px rgba(170, 130, 75, 0.18);

    transform: translateY(-2px);
}


/* ================================
   QUOTE
================================ */

.quote {
    margin-top: 55px;

    font-size: 16px;

    font-style: italic;

    color: #81786d;

    letter-spacing: 1px;
}


/* ================================
   EST
================================ */

.est {
    position: fixed;

    bottom: 25px;

    left: 50%;

    transform: translateX(-50%);

    font-family: "Cinzel", serif;

    font-size: 9px;

    letter-spacing: 4px;

    color: #655d55;
}


/* ================================
   ARCHIVE BOX
================================ */

.archive-box {
    position: absolute;

    right: 8%;

    bottom: 10%;

    width: 150px;
    height: 110px;

    cursor: pointer;

    z-index: 8;

    filter:
        drop-shadow(
            0 15px 25px rgba(0, 0, 0, 0.8)
        );

    transition: 0.5s ease;
}

.archive-box:hover {
    transform: translateY(-8px);

    filter:
        drop-shadow(
            0 15px 35px rgba(121, 82, 145, 0.25)
        );
}


/* ================================
   BOX BODY
================================ */

.box-body {
    position: absolute;

    bottom: 0;

    width: 150px;
    height: 75px;

    background:
        linear-gradient(
            145deg,
            #3a2920,
            #1c1411
        );

    border: 1px solid #705536;

    border-radius: 4px 4px 8px 8px;

    box-shadow:
        inset 0 0 25px rgba(0,0,0,0.8);
}


/* ================================
   BOX LID
================================ */

.box-lid {
    position: absolute;

    top: 10px;

    left: -5px;

    width: 160px;
    height: 30px;

    background:
        linear-gradient(
            145deg,
            #4a3527,
            #241914
        );

    border: 1px solid #806341;

    border-radius: 5px;

    transform:
        perspective(300px)
        rotateX(5deg);

    box-shadow:
        inset 0 0 15px rgba(0,0,0,0.7);
}


/* ================================
   LOCK
================================ */

.lock {
    position: absolute;

    left: 50%;

    top: 50%;

    transform: translate(-50%, -30%);

    width: 18px;
    height: 22px;

    border: 2px solid #a7895d;

    border-radius: 3px;
}

.lock::before {
    content: "";

    position: absolute;

    width: 10px;
    height: 10px;

    left: 2px;
    top: -10px;

    border: 2px solid #a7895d;

    border-bottom: none;

    border-radius: 8px 8px 0 0;
}


/* ================================
   MOBILE
================================ */

@media (max-width: 768px) {

    .archive-content {
        transform: translateY(-30px);

        padding: 20px;
    }

    h1 {
        font-size: 38px;

        letter-spacing: 6px;
    }

    .subtitle {
        font-size: 16px;

        line-height: 1.5;
    }

    .archive-box {
        right: 50%;

        transform:
            translateX(50%)
            scale(0.7);

        bottom: 3%;
    }

    .archive-box:hover {
        transform:
            translateX(50%)
            translateY(-5px)
            scale(0.7);
    }

    .quote {
        margin-top: 35px;
    }
}
