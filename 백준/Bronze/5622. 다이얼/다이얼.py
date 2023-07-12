dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
n = input()
c = 0

for j in range(len(n)):
    for i in dial:
        if n[j] in i:
            c += 3 + dial.index(i)
print(c)