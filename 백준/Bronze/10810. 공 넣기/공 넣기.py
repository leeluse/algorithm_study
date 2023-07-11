N, M = map(int, input().split())
a = []


for _ in range(N):
    a.append(0)
  
  
    
for _ in range(M):
    i, j, k = map(int, input().split())
    
    for t in range(i-1, j):
        a[t] = k
        
        
    
print(*a)