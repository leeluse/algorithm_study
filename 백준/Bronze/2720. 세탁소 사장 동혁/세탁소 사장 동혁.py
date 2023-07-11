T = int(input())

for _ in range(T):
    l = []
    C = int(input()) 
    for j in [25, 10, 5, 1]:
        l.append(C//j)
        C %= j
    
    print(*l)