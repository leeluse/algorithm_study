N, X = map(int, input().split())
A = [int(N) for N in input().split()]
a =[]

for i in A:
    if i < X:
        a.append(i)
        
print(*a)