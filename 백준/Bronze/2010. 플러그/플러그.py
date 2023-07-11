import sys

N = int(input())
count = 0
for _ in range(N):
    count += int(sys.stdin.readline())



print(count-(N-1))