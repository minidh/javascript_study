const reviewList = [
    {
        id: 1,
        name: "정은원",
        type: "LF",
        img: "./img/jo.jpg",
        text: "43 / 2000.01.17"
    },
    {
        id: 2,
        name: "조병헌",
        type: "PITCHER",
        img: "./img/jjj.png",
        text: "19 / 2002.05.08"
    },
    {
        id: 3,
        name: "김현준",
        type: "CF",
        img: "./img/kk.jpg",
        text: "41 / 2002.10.11"
    }
]
const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
})

function showReview(index) {
    const item = reviewList[index];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}

preBtn.addEventListener("click", function() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = reviewList.length -1
    }
    showReview(currentIndex);
})

nextBtn.addEventListener("click", function() {
    currentIndex++;
    if(currentIndex >= reviewList.length) {
        currentIndex = 0
    }
    showReview(currentIndex);
})