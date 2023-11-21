// (´･_･`)
// ゴヴィッショヌ in C#

using System;

class Program
{
    static void Main()
    {
        govisshonu();
    }

    static void govisshonu()
    {
        Random rand = new Random();
        char[] dict = { '(', '´', '･', '_', '･', '`', ')' };
        char[] logArray = new char[0];

        while (true)
        {
            char w = dict[rand.Next(0, dict.Length)];
            Array.Resize(ref logArray, logArray.Length + 1);
            logArray[^1] = w;

            Console.Write(w);

            if (w == ')')
            {   
                if (logArray.Length < 7) continue;
                string lastSevenChars = new string(logArray.AsSpan(logArray.Length - 7).ToArray());
                if (lastSevenChars == "(´･_･`)")
                {
                    Console.WriteLine($"\n{logArray.Length}文字目でｺﾞｳﾞｨｯｼｮﾇが完成しました！");
                    return;
                }
            }
        }
    }
}
