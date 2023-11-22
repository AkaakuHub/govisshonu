# (´･_･`)
# ゴヴィッショヌ in python

import random

def govisshonu():
    logarray = []
    dict = ["(", "´", "･", "_", "･", "`", ")"]
    while True:
        w = dict[random.randint(0, 6)]
        logarray.append(w)
        print(w, end = "")
        if w == ")":
            if "".join(logarray[-7:]) == "(´･_･`)":
                print(f"\n{len(logarray)}文字目でｺﾞｳﾞｨｯｼｮﾇが完成しました！")
                return

govisshonu() if __name__ == "__main__" else None
