const t=document.querySelector("body"),e=document.querySelector("button[data-stop]"),r=document.querySelector("button[data-start]");let o=null;r.addEventListener("click",(()=>{o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),3e3),r.setAttribute("disabled",!0)}));e.addEventListener("click",(()=>{clearInterval(o),r.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.0ce1d350.js.map
