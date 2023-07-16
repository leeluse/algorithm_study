li = sorted(list(map(int, input().split())))

if li[0] + li[1] > li[2]:
    print(sum(li))
else:
    print(2*(li[0] + li[1])-1)