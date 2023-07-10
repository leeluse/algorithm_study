import sys

N, M = map(int, input().split())
b = [int(n+1) for n in range(N)]


for _ in range(M):
    i, j = map(int, sys.stdin.readline().split())
    b_r = b[i-1:j]
    b_r.reverse()
    
    b[i-1:j] = b_r
    
print(*b)
        
