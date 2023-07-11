n = input().lower()
croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for cro in croatia:
    if cro in n:
        n = n.replace(cro, "!")
print(len(n))
