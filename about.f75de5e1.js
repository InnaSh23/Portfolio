"use strict";
let menuBtn = document.querySelector(".burger");
let menuPhoto = document.querySelector(".menu__photo");
let menuList = document.querySelector(".menu__list");
let contentAbout = document.querySelector(".content");
let bodyscroll = document.querySelector(".page");
menuBtn.addEventListener("click", function() {
    menuBtn.classList.toggle("cross");
    menuBtn.classList.toggle("show");
    menuPhoto.classList.toggle("show");
    menuList.classList.toggle("show");
    contentAbout.classList.toggle("slide");
    bodyscroll.classList.toggle("scroll");
});

//# sourceMappingURL=about.f75de5e1.js.map
