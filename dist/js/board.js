"use strict";function extendBoardPage(){function a(a,b){titles.forEach(c=>{if(a)c.innerText=c.getAttribute("data-original-id");else{const a=c.getAttribute("data-original-title");c.innerText=a.length>b?a.substr(0,b-3)+"\u2026":a}})}const b=window.location.pathname;if(b.startsWith("/board/list/")||b.startsWith("/board/search/")){const b=document.querySelectorAll("a[href].problem_title");b.forEach(a=>{a.getAttribute("data-original-id")==null&&a.setAttribute("data-original-id",a.innerText)});const c=document.querySelectorAll("table.table tr th");c[1].style.width="auto",c[2].style.width="auto",Config.load("show-status-pid",b=>{setTimeout(()=>a(!!b,10),10)})}}