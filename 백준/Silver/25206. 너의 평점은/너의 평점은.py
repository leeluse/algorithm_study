import sys
cnt = 0.0
total = 0.0

for i in range(20):
    n = list(sys.stdin.readline().split())
    if n[2] == 'P':
        continue
    if n[2] == 'F':
        n[2] = 0.0
    elif n[2] == 'A+':
        n[2] = 4.5
    elif n[2] == 'A0':
        n[2] = 4.0
    elif n[2] == 'B+':
        n[2] = 3.5
    elif n[2] == 'B0':
        n[2] = 3.0
    elif n[2] == 'C+':
        n[2] = 2.5
    elif n[2] == 'C0':
        n[2] = 2.0
    elif n[2] == 'D+':
        n[2] = 1.5
    elif n[2] == 'D0':
        n[2] = 1.0
    

    cnt += float(n[1])
    
    total += float(n[1]) * n[2]
try:
    print(round(total/cnt, 6))
except ZeroDivisionError:
    print("{:.6f}".format(0))


