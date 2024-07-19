
function multiply(num1, num2) {
    let result = num1 * num2;
    alert(result);
    return result;
}

//点击图片切换资源
let myImg = document.querySelector("img");
myImg.onclick = function () {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === "images/ew2001.png") {
        myImg.setAttribute('src', 'images/skillAll.png');
    }
    else {
        myImg.setAttribute('src', 'images/ew2001.png');
    }
}

//用户名
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字");
    if (!myName)
        setUserName();
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "欢迎你！" + myName;
    }
    if (!localStorage.getItem("name")) {
        setUserName();
    }
    else {
        myName = localStorage.getItem("name");
        localStorage.setItem("name", myName);
        myHeading.textContent = "欢迎你！" + myName;
    }
}

myButton.onclick = () => {
    setUserName();
}