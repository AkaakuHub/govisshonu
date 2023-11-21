// (´･_･`)
// ゴヴィッショヌ in JavaScript

document.addEventListener("DOMContentLoaded", function () {
    $('body, html').animate({ scrollTop: 0 }, 600);
    const textfield = document.getElementById("textfield");
    govisshonu(textfield);
});

function govisshonu(textfield) {
    const dict = ["(", "´", "･", "_", "･", "`", ")"];
    let log = "";

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function checkCompletion(log) {
        if (log.endsWith("(´･_･`)")) {
            textfield.innerHTML = `${log}<br>${log.length}文字目でｺﾞｳﾞｨｯｼｮﾇが完成しました！`;
            makeresult(log.length);
            $('body, html').animate({ scrollTop: 0 }, 600);
            return true;
        }
        return false;
    }

    (function generateLog() {
        const w = getRandomElement(dict);
        log += w;
        if (w === ")" && checkCompletion(log)) {
            return;
        }
        setTimeout(generateLog, 0); // ノンブロッキングな処理に変更
    })();
}

function makeresult(length) {
    const thisurl = "https://akaakuhub.github.io/govisshonu/";
    const msg1 = `<br>共有：<a target="_blank" href='https://twitter.com/intent/tweet?text=${length}+%E6%96%87%E5%AD%97%E7%9B%AE%E3%81%A7%EF%BD%BA%EF%BE%9E%EF%BD%B3%EF%BE%9E%EF%BD%A8%EF%BD%AF%EF%BD%BC%EF%BD%AE%EF%BE%87%E3%81%8C%E5%AE%8C%E6%88%90%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%28%C2%B4%EF%BD%A5_%EF%BD%A5%60%29&url=${thisurl}'>Twitter</a>`;
    document.getElementById("textfield").innerHTML += msg1;
}