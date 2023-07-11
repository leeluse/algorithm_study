A = int(input())
B = [int(N) for N in input()]
t=[]
count = 0
for i in reversed (B):
    t.append(A * i)
    print(A * i)
    
print(t[0] + t[1] * 10 + t[2] * 100)

