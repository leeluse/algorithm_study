n = int(input())
S = [[0]*100 for _ in range(100)]
count = 0

for _ in range(n):
    a, b = map(int, input().split())
    
    for i in range(a, a+10):
        for j in range(b, b+10):
            S[i][j] = 1

for i in S:
    count += i.count(1)
print(count)
