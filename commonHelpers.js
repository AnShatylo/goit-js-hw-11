import{S as n,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();function c(s){const t={url:"https://pixabay.com/api/",key:"44811580-9eab9f49684dd01a2a36a0ef4",imageType:"photo",orient:"horizontal",safeSearch:!0},a=`${t.url}?key=${t.key}&q=${s}&image_type=${t.imageType}&orientation=${t.orient}&safesearch=${t.safeSearch}`;return fetch(a).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(s){const t=document.querySelector(".gallery"),a=s.map(r=>`<li class="img-wrap">
        <a href="${r.largeImageURL}">
          <img
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="gallery-info-wrapper">
          <div class="info-likes">
            <p class="title">Likes</p>
            <p class="subtitle">${r.likes}</p>
          </div>
          <div class="info-views">
            <p class="title">Views</p>
            <p class="subtitle">${r.views}</p>
          </div>
          <div class="info-comments">
            <p class="title">Comments</p>
            <p class="subtitle">${r.comments}</p>
          </div>
          <div class="info-downloads">
            <p class="title">Downloads</p>
            <p class="subtitle">${r.downloads}</p>
          </div>
        </div>
      </li>
          `).join("");t.insertAdjacentHTML("afterbegin",a),new n(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}).refresh()}function d(){const s=document.querySelector(".gallery");s.innerHTML=""}function u(){document.querySelector(".loader-wrapp").classList.remove("hide")}function p(){document.querySelector(".loader-wrapp").classList.add("hide")}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".form").addEventListener("submit",t);function t(a){d(),a.preventDefault();const r=a.target,e=r.elements.query.value.trim();if(e===""){i.error({backgroundColor:"#EF4040",message:"Please fill the form",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B"});return}u(),c(e).then(o=>{if(o.hits.length===0){i.error({backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B"});return}f(o.hits)}).catch(o=>{console.log(o),i.error({backgroundColor:"#EF4040",message:"Sorry, something goes wrong. Please, try again later!",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B"})}).finally(()=>{p()}),r.reset()}});
//# sourceMappingURL=commonHelpers.js.map
