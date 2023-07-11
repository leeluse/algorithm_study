X = int(input())
N = int(input())
L = [list(map(int, input().split())) for N in range(N)]
count = 0

for i in range(N):
     count  +=  L[i][0] * L[i][1]
     
if count == X:
    print("Yes")
else:   
    print("No")   