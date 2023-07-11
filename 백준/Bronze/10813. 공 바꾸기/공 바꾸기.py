import sys

N, M = map(int, input().split())
b = [int(n+1) for n in range(N)]


for _ in range(M):
    i, j = map(int, sys.stdin.readline().split())
    b[i-1], b[j-1] = b[j-1], b[i-1]


print(*b)
    
