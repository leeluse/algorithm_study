T = int(input())



for _ in range(T):
    R, S = input().split() 
    t = []
    k = []
    k = list(S)
    for i in range(len(k)):
        t.append(int(R) * k[i])
    print(*t, sep="")
    
