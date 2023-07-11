cha = input()
k = [chr(i) for i in range(97, 123)]
t = []
for i in k:
    t.append(cha.find(i))
print(*t)