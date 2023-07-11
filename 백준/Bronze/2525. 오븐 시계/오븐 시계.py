A, B = map(int, input().split())
N = int(input())



while N + B >= 60:
    B = (N + B) - 60
    N = 0
    A += 1

if N + B < 60:
    B += N


if A >= 24:
    A -= 24
    

print(A, B)