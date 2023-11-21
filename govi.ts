// (´･_･`)
// ゴヴィッショヌ in TypeScript

function govisshonu() {
    var logArray: string[] = [];
    const dict: string[] = ["(", "´", "･", "_", "･", "`", ")"];

    while (true) {
        let w: string = dict[Math.floor(Math.random() * dict.length)];
        logArray.push(w);

        if (w === ")") {
            if (logArray.slice(-7).join("") === "(´･_･`)") {
                console.log(`${logArray.join("")}\n${logArray.length}文字目でｺﾞｳﾞｨｯｼｮﾇが完成しました！`);
                return;
            }
        }
    }
}
