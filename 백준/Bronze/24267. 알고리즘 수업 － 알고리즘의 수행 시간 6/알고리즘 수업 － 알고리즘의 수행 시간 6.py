n = int(input())
t = n-2
sum = 0

for i in range(1, n-1):
    sum += i * t
    t -= 1
    
print(sum)
print(3)

