N = int(input())
list_x_y = [list(map(int, input().split())) for _ in range(N)]
x = []
y = []

for i in list_x_y:
    x.append(i[0])
    y.append(i[1])
    

print((max(y)-min(y)) * (max(x)-min(x)))