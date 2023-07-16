N = [int(input()) for _ in range(3)]
N_set = set(N)

if sum(N) == 180:
    if len(N_set) == 1:
        print("Equilateral")
    elif len(N_set) == 2:
        print("Isosceles")
    elif len(N_set) == 3:
        print("Scalene")

else:
    print("Error")