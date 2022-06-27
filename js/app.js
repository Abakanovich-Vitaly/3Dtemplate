(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const burger = document.querySelector(".burger");
    const box = document.querySelector(".box");
    const screens = document.querySelectorAll(".screen");
    burger.addEventListener("click", (() => {
        box.classList.toggle("active");
    }));
    function replaceBg(id) {
        const bg = document.getElementById(id);
        screens.forEach((screen => {
            screen.style.display = "none";
        }));
        bg.style.display = "block";
    }
    function changeBg() {
        const links = document.querySelectorAll(".link");
        links.forEach(((link, index) => {
            link.addEventListener("click", (e => {
                e.preventDefault();
                replaceBg(e.target.dataset.link);
            }));
            link.addEventListener("click", (e => {
                e.preventDefault();
                box.classList.toggle("active");
            }));
        }));
        screens.forEach((screen => {
            screen.style.display = "none";
            screens[0].style.display = "block";
        }));
    }
    changeBg();
    window["FLS"] = true;
    isWebp();
})();