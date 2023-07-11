import sys

N = int(input())

for i in range(N):
    a = list(map(int, sys.stdin.readline().split()))
    case=i+1
    print(f'Case #{case}:', int(a[0]+a[1]))
