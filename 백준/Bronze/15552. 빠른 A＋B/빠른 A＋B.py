import sys

N = int(input())

for i in range(N):
    a = list(map(int, sys.stdin.readline().split()))
    print(int(a[0]+a[1]))
