S = [list(input()) for _ in range(5)]
a = []



for i in range(max(len(x) for x in S)):
    for j in range(5):
        if i < len(S[j]):
            print(S[j][i], end='')

        
