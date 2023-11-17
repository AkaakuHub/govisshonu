# (´･_･`)
# ゴヴィッショヌ in ruby

def govisshonu
    srand
    log = ""
    dict = ["(", "´", "･", "_", "･", "`", ")"]
    while true do
        chosen = rand(0...dict.length)
        w = dict[chosen]
        log += w
        print w
        if log.include?("(´･_･`)")
            puts "#{log.length}文字目でｺﾞｳﾞｨｯｼｮﾇが完成しました！"
            return
        end
    end
end

govisshonu if __FILE__ == $0
