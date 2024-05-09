function solution(my_string) {
    const char = ['a', 'e', 'i', 'o', 'u'];
    
    console.log(my_string)
    for(let i = 0; i < char.length; i++) {
      my_string = my_string.replaceAll(char[i],"")

    }
    return my_string
}