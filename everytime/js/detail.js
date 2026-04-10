const tta_btn = document.querySelector(".ttabong_button");
const scrap_btn = document.querySelector(".scrap_button");

const scrap_btn_text = scrap_btn.querySelector("div");

const tta_display_num = document.querySelector(".ttabong_count");
const scrap_display_num = document.querySelector(".scrap_count");

const rethatguel_btn = document.getElementById("reReply");
const rethatguel_popup = document.querySelector(".boxForHide");

const thatguel = document.querySelector(".thatguelChang");
const rethatguel = document.querySelector(".reThatguelChang");
const thatguel_submit = document.querySelector(".submit_comment_tg");
const rethatguel_submit = document.querySelector(".submit_comment_rtg")

let tta_count = 0;
let scr_count = 0;
let isScrapped = false;

let thatguelContent;
let reThatguelContent;


tta_btn.addEventListener("click", function () {
    tta_count++;
    tta_display_num.textContent = tta_count;
    
    tta_btn.disabled = true;
    tta_btn.style.opacity = "0.5";
    tta_btn.style.cursor = "default";
});


scrap_btn.addEventListener("click", function() {
    if (!isScrapped) {
        scr_count++;
        scrap_btn_text.textContent = "스크랩 취소";
        isScrapped = true;
    } else {
        scr_count--;
        scrap_btn_text.textContent = "스크랩";
        isScrapped = false;
    }
    scrap_display_num.textContent = scr_count;
});

rethatguel_btn.addEventListener("click", function() {
    if (rethatguel_popup.style.display === "flex") {
        rethatguel_popup.style.display = "none";
    } else {
        rethatguel_popup.style.display = "flex";
    }
})

rethatguel_submit.addEventListener("click", function() {
    rethatguel.value = reThatguelContent;
    alert(reThatguelContent);
})