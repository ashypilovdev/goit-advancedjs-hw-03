import{a as l,S as m,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="57991445-895cab795770f66fac901cc5c";l.defaults.baseURL="https://pixabay.com/api/";function p(s){return l.get("",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y({webformatURL:s,largeImageURL:r,tags:i,likes:o,views:e,comments:t,downloads:a}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${s}" alt="${i}" loading="lazy" />
      </a>
      <ul class="info">
        <li class="info-item"><b>Likes</b><span>${o}</span></li>
        <li class="info-item"><b>Views</b><span>${e}</span></li>
        <li class="info-item"><b>Comments</b><span>${t}</span></li>
        <li class="info-item"><b>Downloads</b><span>${a}</span></li>
      </ul>
    </li>`}function h(s){const r=s.map(y).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){c.innerHTML=""}function L(){u.classList.add("is-visible")}function S(){u.classList.remove("is-visible")}const f=document.querySelector(".form");n.settings({position:"topRight",timeout:4e3});f.addEventListener("submit",q);function q(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!"});return}b(),L(),p(r).then(i=>{if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(i.hits)}).catch(i=>{n.error({message:`Something went wrong: ${i.message}`})}).finally(()=>{S(),f.reset()})}
//# sourceMappingURL=index.js.map
