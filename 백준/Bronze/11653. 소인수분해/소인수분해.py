N = int(input())
cnt = 0
total = []
total_1= []

if N > 1:
    for j in range(2, N):
        if N % j == 0:
            total.append(j)
            cnt += 1
    if cnt == 0 :
        print(N)


for i in total:
    cnt = 0
    for j in range(2, i):
        if i % j == 0:
            cnt += 1
    if cnt < 1:
        total_1.append(i)
    
for j in total_1:
    while N % j == 0:
        N =  N // j
        print(j)
        