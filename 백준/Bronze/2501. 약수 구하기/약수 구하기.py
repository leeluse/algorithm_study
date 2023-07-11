a=[]
N, K  = map(int, input().split())
  
  
for i in range(1, N+1):
    if N % i == 0:
        a.append(N // i)
    
a.reverse()

if len(a) < K:
    print(0)
else:
    print(a[K-1])

