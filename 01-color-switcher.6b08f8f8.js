!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-stop]"),o=document.querySelector("button[data-start]");e.setAttribute("disabled",!0),console.log(5);var r=null;o.addEventListener("click",(function(){r=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),750),o.setAttribute("disabled",!0),e.removeAttribute("disabled")}));e.addEventListener("click",(function(){clearInterval(r),o.removeAttribute("disabled"),e.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.6b08f8f8.js.map