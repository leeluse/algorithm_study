L, P = input().split()
sangNum = int(L) * int(P)
lst = []
newsNum = input().split()
for i in range(len(newsNum)):
   k = int(newsNum[i])-sangNum
   lst.append(str(k))
   num_lst = ' '.join(lst)

print(num_lst)