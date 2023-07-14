A_1, B_1 = list(map(int, input().split()))
A_2, B_2 = list(map(int, input().split()))
A_3, B_3 = list(map(int, input().split()))

total = []

A_list = [A_1, A_2, A_3]
B_list = [B_1, B_2, B_3]

A_l = set(A_list)
B_l = set(B_list)

for i in A_l:
    c = A_list.count(i)
    if c == 1:
        total.append(i)

for i in B_l:
    c = B_list.count(i)
    if c == 1:
        total.append(i)
        
print(*total)