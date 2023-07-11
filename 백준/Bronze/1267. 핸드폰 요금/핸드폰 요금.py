N = int(input())
t = [int(N) for N in input().split()]
Y = 0
M = 0

for i in t:
    if i >= 60:
        M += (i // 60) * 15 + 15
        Y += (i // 30) * 10 + 10
    elif i >= 30:
        Y += (i // 30) * 10 + 10
        M += 15
    else:
        Y += 10
        M +=  15
        

if min(M, Y) == M and min(M, Y) == Y:
    print('Y M', Y )

elif min(M, Y) == Y:
    print('Y', Y)
    
else:
    print('M', M)
    