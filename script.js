/* ==========================================
        BUJJI TUNES
          SCRIPT.JS
          PART 1
========================================== */

/* ===========================
      SELECT ELEMENTS
=========================== */

const loginCard = document.querySelector(".login-card");
const signupCard = document.getElementById("signupCard");

const createBtn = document.getElementById("createBtn");
const backLogin = document.getElementById("backLogin");

const loginBtn = document.getElementById("loginBtn");

const butterflyContainer =
document.getElementById("butterfly-container");

const screenFade =
document.getElementById("screenFade");

/* Hide Signup Initially */

signupCard.style.display = "none";

/* ===========================
        HEART RAIN
=========================== */

const heartContainer =
document.getElementById("heart-container");

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className="heart";

    const hearts=["💕","💖","🤍"];

    heart.innerHTML=
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left=
    Math.random()*100+"vw";

    heart.style.fontSize=
    (16+Math.random()*18)+"px";

    heart.style.animationDuration=
    (5+Math.random()*4)+"s";

    heart.style.opacity=
    Math.random();

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,120);

/* ===========================
      MUSIC NOTES
=========================== */

const musicContainer=
document.getElementById("music-container");

const notes=[
"🎵",
"🎶",
"♪",
"♫"
];

function createMusic(){

    const note=
    document.createElement("div");

    note.className="music-note";

    note.innerHTML=
    notes[Math.floor(Math.random()*notes.length)];

    note.style.left=
    Math.random()*100+"vw";

    note.style.fontSize=
    (18+Math.random()*18)+"px";

    note.style.animationDuration=
    (8+Math.random()*4)+"s";

    musicContainer.appendChild(note);

    setTimeout(()=>{

        note.remove();

    },12000);

}

setInterval(createMusic,800);

/* ===========================
        SPARKLES
=========================== */

const sparkleContainer=
document.getElementById("sparkle-container");

function createSparkle(){

    const sparkle=
    document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=
    Math.random()*100+"vw";

    sparkle.style.top=
    Math.random()*100+"vh";

    sparkleContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,150);
/* ==========================================
        PASSWORD SHOW / HIDE
========================================== */

/* Login Password */

const loginPassword =
document.getElementById("loginPassword");

const loginShowPass =
document.getElementById("loginShowPass");

loginShowPass.addEventListener("click",()=>{

    if(loginPassword.type==="password"){

        loginPassword.type="text";

        loginShowPass.classList.replace(
            "fa-eye",
            "fa-eye-slash"
        );

    }

    else{

        loginPassword.type="password";

        loginShowPass.classList.replace(
            "fa-eye-slash",
            "fa-eye"
        );

    }

});


/* Signup Password */

const signupPassword =
document.getElementById("signupPassword");

const signupShowPass =
document.getElementById("signupShowPass");

signupShowPass.addEventListener("click",()=>{

    if(signupPassword.type==="password"){

        signupPassword.type="text";

        signupShowPass.classList.replace(
            "fa-eye",
            "fa-eye-slash"
        );

    }

    else{

        signupPassword.type="password";

        signupShowPass.classList.replace(
            "fa-eye-slash",
            "fa-eye"
        );

    }

});


/* ==========================================
      CREATE ACCOUNT TRANSITION
========================================== */

createBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    loginCard.classList.remove("zoomIn");

    loginCard.classList.add("zoomOut");

    createButterflies();

    screenFade.style.opacity="1";

    setTimeout(()=>{

        loginCard.style.display="none";

        signupCard.style.display="flex";

        signupCard.classList.remove("zoomOut");

        signupCard.classList.add("zoomIn");

        screenFade.style.opacity="0";

    },900);

});


/* ==========================================
      BACK TO LOGIN
========================================== */

backLogin.addEventListener("click",(e)=>{

    e.preventDefault();

    signupCard.classList.remove("zoomIn");

    signupCard.classList.add("zoomOut");

    createButterflies();

    screenFade.style.opacity="1";

    setTimeout(()=>{

        signupCard.style.display="none";

        loginCard.style.display="flex";

        loginCard.classList.remove("zoomOut");

        loginCard.classList.add("zoomIn");

        screenFade.style.opacity="0";

    },900);

});


/* ==========================================
        BUTTERFLY EFFECT
========================================== */

function createButterflies(){

    butterflyContainer.innerHTML="";

    for(let i=0;i<50;i++){

        const butterfly=document.createElement("div");

        butterfly.className="butterfly";

        butterfly.innerHTML=`

            <div class="left-wing"></div>

            <div class="right-wing"></div>

            <div class="body"></div>

        `;

        butterfly.style.left=
        window.innerWidth/2+"px";

        butterfly.style.top=
        window.innerHeight/2+"px";

        butterfly.style.setProperty(
        "--x",
        (Math.random()*900-450)+"px");

        butterfly.style.setProperty(
        "--y",
        (Math.random()*700-350)+"px");

        butterflyContainer.appendChild(butterfly);

    }

    setTimeout(()=>{

        butterflyContainer.innerHTML="";

    },2200);

}
/* ==========================================
            LOGIN TO HOME
========================================== */

loginBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    loginBtn.classList.add("clicked");

    loginCard.classList.add("zoomOut");

    screenFade.style.opacity="1";

    createButterflies();

    setTimeout(()=>{

        window.location.href="home.html";

    },1700);

});


/* ==========================================
      BUTTON HOVER EFFECT
========================================== */

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-2px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});


/* ==========================================
         CARD GLOW EFFECT
========================================== */

function glowCard(card){

    card.animate([

        {

            boxShadow:"0 0 10px rgba(255,255,255,.2)"

        },

        {

            boxShadow:"0 0 40px rgba(255,255,255,.8)"

        },

        {

            boxShadow:"0 0 10px rgba(255,255,255,.2)"

        }

    ],{

        duration:800,

        iterations:1

    });

}


/* ==========================================
        OPTIONAL CARD GLOW
========================================== */

createBtn.addEventListener("click",()=>{

    glowCard(loginCard);

});

backLogin.addEventListener("click",()=>{

    glowCard(signupCard);

});


/* ==========================================
        GOOGLE LOGIN
========================================== */

document.querySelector(".google")
.addEventListener("click",()=>{

    window.open(
        "https://accounts.google.com/",
        "_blank"
    );

});


/* ==========================================
        APPLE LOGIN
========================================== */

document.querySelector(".apple")
.addEventListener("click",()=>{

    window.open(
        "https://appleid.apple.com/",
        "_blank"
    );

});
