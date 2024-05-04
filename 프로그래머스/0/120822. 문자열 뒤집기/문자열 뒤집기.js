function solution(my_string) {
    const my_char = my_string.split('')
    
    
    return my_char.reverse().toString().replaceAll(',', '')
}