nums = list(map(int, input().split()))
a = [1, 1, 2, 2, 2, 8]


for i in range(6):
    nums[i] = a[i] - nums[i]

print(*nums)