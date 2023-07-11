nums = [list(map(int, input().split())) for i in range(9)]
m = []

for i in range(9):
    m.append(max(nums[i]))
    Max = max(m)
    
print(Max)

for i in range(9):
    for j in range(9):
        if nums[i][j] == Max:
            print(i+1, j+1)
    
    
