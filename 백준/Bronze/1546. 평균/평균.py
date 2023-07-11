N = int(input())
c_t = list(map(int, input().split()))
k = 0
M = max(c_t)

for i in c_t:
    k += i/M*100
    
print(round(k/N, 6))