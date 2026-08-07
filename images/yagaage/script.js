/* =========================================
   やがあげクン公式サイト
   script.js
========================================= */


/* ---------- ページ読み込み ---------- */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ---------- スムーズスクロール ---------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ---------- スクロールフェードイン ---------- */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(

".event, .menu-card, .access, .message"

).forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* ---------- 商品カードを順番に表示 ---------- */

document.querySelectorAll(".menu-card").forEach((card,index)=>{

    card.style.transitionDelay = `${index * 0.15}s`;

});


/* ---------- ボタンホバー ---------- */

document.querySelectorAll(".hero-button, .map-button a")

.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.06)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});


/* ---------- 商品カードクリック ---------- */

document.querySelectorAll(".menu-card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(0.97)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:180

        });

    });

});


/* ---------- Hero画像ゆらゆら ---------- */

const logo = document.querySelector(".hero-logo");

if(logo){

    let angle = 0;

    setInterval(()=>{

        angle += 0.03;

        logo.style.transform =

        `translateY(${Math.sin(angle)*6}px)`;

    },30);

}


/* ---------- タイトルを順番に表示 ---------- */

const title = document.querySelector(".hero h1");

if(title){

    const text = title.textContent;

    title.textContent = "";

    let i = 0;

    const timer = setInterval(()=>{

        title.textContent += text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

        }

    },90);

}


/* ---------- フッターの年 ---------- */

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =

    `© ${new Date().getFullYear()} やがあげクン`;

}


/* ---------- ページトップへ戻る ---------- */

const topButton = document.createElement("button");

topButton.innerHTML="▲";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="20px";
topButton.style.bottom="20px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#ff9800";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 5px 15px rgba(0,0,0,.2)";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ---------- コンソールメッセージ ---------- */

console.log("🍗 やがあげクン公式サイトへようこそ！");