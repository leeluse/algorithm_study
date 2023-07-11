N = list(input())
count = 0

for i in range(len(N)//2):
    if N[i] == N[(len(N) - 1)-i]:
        count += 1

if count == len(N)//2:
    print(1)
else:
    print(0)