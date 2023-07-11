
coll = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

while True:
    total = 0
    str = input()

    if str == '#':
      break

    for i in(str):
      if i in coll:
        total += 1

    print(total)
