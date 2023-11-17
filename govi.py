# (´･_･`)
# ゴヴィッショヌ in python

import random

def govisshonu():
    log = ""
    dict = ["(", "´", "･", "_", "･", "`", ")"]
    while True:
        chosen = random.randint(0, len(dict) - 1)
        w = dict[chosen]
        log += w
        print(w, end = "")
        if ("(´･_･`)") in log:
            print(f"{len(log)}文字目でｺﾞｳﾞｨｯｼｮﾇが完成しました！")
            return

govisshonu() if __name__ == "__main__" else None
