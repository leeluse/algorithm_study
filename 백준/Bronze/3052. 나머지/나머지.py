a = []

for _  in range(10):
    A = int(input())
    B = A % 42
    a.append(B)
print(len(set(a)))