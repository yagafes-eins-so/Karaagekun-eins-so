// ===============================
// やがあげクン 公式サイト
// script.js
// ===============================


// -------------------------------
// ページ読み込み時のフェードイン
// -------------------------------

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



// -------------------------------
// スムーズスクロール
// -------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




// -------------------------------
// スクロールアニメーション
// -------------------------------

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".event, .card, .access, .message").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});




// -------------------------------
// 商品カードを順番に表示
// -------------------------------

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.transitionDelay = `${index*0.15}s`;

});




// -------------------------------
// ボタンを少し大きくするアニメーション
// -------------------------------

const button = document.querySelector(".button");

if(button){

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.08)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

}




// -------------------------------
// 現在の年を自動表示
// -------------------------------

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} やがあげクン`;

}