a,b,c = input().split()

list_num = [int(a), int(b), int(c)]
list_num.sort()
print(*list_num)