import sys

for _ in range(3):
    nums = [int(sys.stdin.readline()) for _ in range(int(sys.stdin.readline()))]
    
    if sum(nums) == 0 :
        print("0")
    elif sum(nums) > 0:
        print("+")
    else:
        print("-")