/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/金盏花2.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};
*/

const select = document.querySelector("select");
const para = document.querySelector(".weather")

select.addEventListener("change",setWeather);

function setWeather() {
    const choice = select.value;
    switch (choice) {
        case "sunny":
            para.textContent="阳光明媚。穿上短裤吧！去海滩，或公园，吃个冰淇淋。";
            break;
        case "rainy":
            para.textContent="外面下着雨；带上雨衣和雨伞，不要在外面呆太久。";
            break;
        case "snowing":
            para.textContent="大雪纷飞，天寒地冻！最好呆在家里喝杯热巧克力，或者去堆个雪人。";
            break;
        case "overcast":
            para.textContent="虽然没有下雨，但天空灰蒙蒙的，随时都可能变天，所以要带一件雨衣以防万一。";
            break;
        default:
            para.textContent="";
    }
}

document.querySelector("img").addEventListener("click", function () {
    alert("别戳我，我怕疼，嘶，啊嘶~。");
  });

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "奥里给！！！" + myName;
}


myButton.onclick = function () {
    setUserName();
}
