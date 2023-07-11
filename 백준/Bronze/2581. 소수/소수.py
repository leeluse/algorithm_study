M = int(input())
N = int(input())
total = []

for i in range(M, N+1):
    cnt = 0
    if i > 1:
        for j in range(2, i):
            if i % j == 0:
                cnt += 1
        if cnt == 0 :
            total.append(i)


if len(total) > 0:
    print(sum(total))
    print(min(total))
else:
    print(-1)
                
            
            
