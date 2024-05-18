function solution(my_string) {
            return my_string.split(/[^0-9]/g).map(Number).reduce((acc, cur) => acc + cur)
    
}