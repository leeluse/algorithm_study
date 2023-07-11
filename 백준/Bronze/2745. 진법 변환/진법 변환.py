k   =  ''

N, B = input().split()


t = [i.upper() for i in N]
k =  str(k.join(t))

print(int(k, int(B)))