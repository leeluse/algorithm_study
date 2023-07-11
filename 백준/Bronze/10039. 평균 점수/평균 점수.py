total = 0

for i in range(5):
  num = int(input())
  if( num >= 0 and num <= 100 and (num % 5) == 0 ):
    if(num < 40):
      total += 40
    else:
       total += num
  else:
    break
print(int(total / 5))