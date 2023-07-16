import sys

while(True):
    a, b, c = map(int, sys.stdin.readline().split())
    list_num = [a, b ,c]
    set_list = set(list_num)
    
    if a == 0 and b == 0 and c ==0:
        break
    else: 
        if max(list_num) < sum(list_num) - max(list_num):
            if len(set_list) == 1:
                print("Equilateral")
            elif len(set_list) == 2:
                print("Isosceles")
            else:
                print("Scalene")
                
        else:
            print("Invalid")