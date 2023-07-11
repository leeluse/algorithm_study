
while(True):
    n = int(input())
    t = []

    if n == -1:
        break
    else:
        for i in range(1, n):
            if n % i == 0:
                t.append(i)
    
        if n == sum(t):
            print(n, end= " = ")
            print(*t, sep=" + ")
        else:
            print(n, "is NOT perfect.")

