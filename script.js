// =========================================
// Loading Screen
// =========================================

window.addEventListener("load", () => {
    setTimeout(() => {
        const loading = document.getElementById("loading");

        loading.style.opacity = "0";
        loading.style.visibility = "hidden";
    }, 2500);
});

// =========================================
// Typing Effect
// =========================================

const text = "Selamat Ulang Tahun Kiki ❤️";

const typing = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 120);

    }

}

setTimeout(typeWriter, 2700);

// =========================================
// Open Surprise
// =========================================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.querySelector(".gallery").classList.remove("hidden");
    document.querySelector(".gallery").classList.add("show");

    document.querySelector(".letter").classList.remove("hidden");
    document.querySelector(".letter").classList.add("show");

    document.querySelector(".cake-section").classList.remove("hidden");
    document.querySelector(".cake-section").classList.add("show");

    document.querySelector(".gift").classList.remove("hidden");
    document.querySelector(".gift").classList.add("show");

    document.querySelector(".ending").classList.remove("hidden");
    document.querySelector(".ending").classList.add("show");

    document.querySelector(".gallery").scrollIntoView({
        behavior: "smooth"
    });

});

// =========================================
// Music
// =========================================

const music = document.getElementById("music");

startBtn.addEventListener("click", () => {

    music.play().catch(() => { });

});

// =========================================
// Scroll Animation
// =========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".hidden").forEach(el => {

    observer.observe(el);

});

// =========================================
// Gallery Hover Animation
// =========================================

document.querySelectorAll(".slider img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08) rotate(-2deg)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "";

    });

});

// =========================================
// Blow Candle
// =========================================

const flame = document.querySelector(".flame");

const blow = document.getElementById("blow");

blow.addEventListener("click", () => {

    flame.style.transition = ".8s";

    flame.style.opacity = "0";

    setTimeout(() => {

        alert("🎉 Wish granted!\n\nSemoga semua impianmu menjadi kenyataan ❤️");

    }, 900);

});

// =========================================
// Gift
// =========================================

const giftBtn = document.getElementById("giftBtn");
const giftModal = document.getElementById("giftModal");
const closeBtn = document.querySelector(".close");

giftBtn.addEventListener("click", () => {

    giftModal.style.display = "flex";

});

closeBtn.addEventListener("click", () => {

    giftModal.style.display = "none";

});

giftModal.addEventListener("click", (e) => {

    if (e.target === giftModal) {

        giftModal.style.display = "none";

    }

});

// =========================================
// Replay
// =========================================

document.getElementById("replay").addEventListener("click", () => {

    location.reload();

});

// =========================================
// Floating Hearts
// =========================================

const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (15 + Math.random() * 30) + "px";

    heart.style.color = "rgba(255,105,180,.8)";

    heart.style.pointerEvents = "none";

    heart.style.animation = "heartFloat 8s linear forwards";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 500);

// =========================================
// Mouse Glow
// =========================================

document.addEventListener("mousemove", e => {

    document.body.style.backgroundPosition =
        `${e.clientX / 80}px ${e.clientY / 80}px`;

});

// ==========================================
// AUTO GALLERY SLIDER
// ==========================================

const slider = document.querySelector(".slider");

let currentSlide = 0;

function autoSlider() {

    const images = document.querySelectorAll(".slider img");

    if (images.length === 0) return;

    currentSlide++;

    if (currentSlide >= images.length) {

        currentSlide = 0;

    }

    slider.scrollTo({

        left: images[currentSlide].offsetLeft,

        behavior: "smooth"

    });

}

setInterval(autoSlider, 3000);


// ==========================================
// GIFT BOX ANIMATION
// ==========================================

const giftBox = document.querySelector(".gift-box");

giftBox.addEventListener("click", () => {

    giftBox.style.transform = "scale(1.2) rotate(15deg)";

    setTimeout(() => {

        giftBox.innerHTML = "❤️";

        giftBox.style.transform = "scale(1.6)";

    }, 500);

});


// ==========================================
// LETTER EFFECT
// ==========================================

const envelope = document.querySelector(".envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

    });

}


// ==========================================
// FLOATING BALLOON
// ==========================================

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random() * window.innerWidth + "px";

    balloon.style.fontSize = (40 + Math.random() * 30) + "px";

    document.body.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 10000);

}

setInterval(createBalloon, 2500);


// ==========================================
// SHOOTING STAR
// ==========================================

function shootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 200 + "px";

    star.style.left = "-100px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2500);

}

setInterval(shootingStar, 4000);


// ==========================================
// PARALLAX HERO
// ==========================================

window.addEventListener("mousemove", (e) => {

    const glass = document.querySelector(".glass");

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    glass.style.transform = `translate(${x}px,${y}px)`;

});


// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = 120;

        circle.style.width = size + "px";

        circle.style.height = size + "px";

        circle.style.left = e.offsetX - size / 2 + "px";

        circle.style.top = e.offsetY - size / 2 + "px";

        circle.className = "ripple";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 700);

    });

});