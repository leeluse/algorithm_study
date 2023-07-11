import sys
nums = [0, 0]


for _ in range(28):
    nums.append(int(sys.stdin.readline()))
    
    
for i in range(1, 31):
    if i in nums:
        continue
    else:
        print(i)