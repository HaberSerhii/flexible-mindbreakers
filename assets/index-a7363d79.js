(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();new Swiper(".swiper",{breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},loop:!0,loopedSlides:4,loopFillGroupWithBlank:!0,autoplay:{delay:2e3,pauseOnMouseEnter:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{invert:!0}});(()=>{const e={openModalBtn:document.querySelector("[data-new-chocolate-modal-open]"),closeModalBtn:document.querySelector("[data-new-chocolate-modal-close]"),modal:document.querySelector("[data-new-chocolate-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();const c=document.querySelectorAll('a[href*="#"]');for(let e of c)e.addEventListener("click",function(o){o.preventDefault();const l=e.getAttribute("href").substr(1);document.getElementById(l).scrollIntoView({behavior:"smooth",block:"start"})});new Swiper(".reviews-swiper",{direction:"horizontal",loop:!0,pagination:{el:".reviews-swiper-pagination",clickable:!0},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:30}}});(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o);function o(){e.menu.classList.toggle("is-open")}})();