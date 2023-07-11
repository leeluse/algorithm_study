N = int(input())
nums = [int(N) for N in input().split()]
v = int(input())

count = 0

for i in nums:
    if v == i:
     count += 1
print(count)