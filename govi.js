// (´･_･`)
// ゴヴィッショヌ in JavaScript

var textfield;

document.addEventListener("DOMContentLoaded", function () {
    $('body, html').animate({ scrollTop: 0 }, 600);
    textfield = document.getElementById("textfield");
    govisshonu();
});

function govisshonu() {
    var logArray = [];
    const dict = ["(", "´", "･", "_", "･", "`", ")"];

    while (true) {
        let w = dict[Math.floor(Math.random() * dict.length)];
        logArray.push(w);

        if (w === ")") {
            if (logArray.slice(-7).join("") === "(´･_･`)") {
                textfield.innerHTML = `${logArray.join("")}<br>${logArray.length}文字目でｺﾞｳﾞｨｯｼｮﾇが完成しました！`;
                makeresult(logArray.length);
                $('body, html').animate({ scrollTop: $(document).height() }, 600);
                return;
            }
        }
    }
}

function makeresult(length) {
    const thisurl = "https://akaakuhub.github.io/govisshonu/";
    let msg1 = `<br>共有：<a target="_blank" href='https://twitter.com/intent/tweet?text=${length}+%E6%96%87%E5%AD%97%E7%9B%AE%E3%81%A7%EF%BD%BA%EF%BE%9E%EF%BD%B3%EF%BE%9E%EF%BD%A8%EF%BD%AF%EF%BD%BC%EF%BD%AE%EF%BE%87%E3%81%8C%E5%AE%8C%E6%88%90%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%28%C2%B4%EF%BD%A5_%EF%BD%A5%60%29&url=${thisurl}'>Twitter</a>`;
    textfield.innerHTML += msg1;
}
