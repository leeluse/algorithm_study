N = int(input())

for i in range(N):
    t = list(map(str, input()))
    a = len(t) - 1
    print(t[0], t[a], sep='')