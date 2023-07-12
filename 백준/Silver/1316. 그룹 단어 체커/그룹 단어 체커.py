N = int(input())
total = N

for _ in range(N):
    li = input()
    
    for i in range(len(li)-1):
        if li[i] == li[i+1]:
            continue
        elif li[i] in li[i+1:]:
            total -= 1
            break

print(total)
        