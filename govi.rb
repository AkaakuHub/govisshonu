# (´･_･`)
# ゴヴィッショヌ in ruby

def govisshonu
    srand
    logarray = []
    dict = ["(", "´", "･", "_", "･", "`", ")"]
    while true do
        w = dict[rand(0...dict.length)]
        logarray << w
        print w
        if w == ")"
            if logarray.length > 6 && logarray[-7..-1].join == "(´･_･`)"
                puts "\n#{logarray.length}文字目でｺﾞｳﾞｨｯｼｮﾇが完成しました！"
                return
            end
        end
    end
end

govisshonu if __FILE__ == $0
