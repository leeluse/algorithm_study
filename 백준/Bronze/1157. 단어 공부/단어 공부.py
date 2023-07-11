n = list(input().upper())
n_set = list(set(n))
n_list =[]

for i in n_set:
   count =  n.count(i)
   n_list.append(count)

if n_list.count(max(n_list)) >= 2:
    print("?")
    
else:
    print(n_set[n_list.index(max(n_list))])
