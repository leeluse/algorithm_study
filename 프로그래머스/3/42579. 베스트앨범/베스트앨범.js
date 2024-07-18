function solution(genres, plays) {
    const genreObj = {}
    const playObj = {}
    const answer = []
    
    for (let i = 0; i < genres.length; i++) {
       genre = genres[i]
       play = plays[i]
        
        if(!(genre in genreObj)) {
            genreObj[genre] = []
            playObj[genre] = 0
        }
        genreObj[genre].push([i, play])
        playObj[genre] += play
    }
    
    sortedGenre = Object.keys(playObj).sort((a, b) => playObj[b] - playObj[a])
    
    for (s of sortedGenre) {
        sortedSongs = genreObj[s].sort((a,b) => {
            return b[1] === a[1] ? a[0] - b[0] : b[1] - a[1] }
         )
        
        answer.push(...sortedSongs.slice(0, 2).map((v) => v[0]))
    }
    
    return answer
    
//     var playObj = {}
    
//     for (let i = 0; i < genres.length; i++) {
//         if(maxGenre == genres[i]) {
//             playObj[i] = plays[i]
//         }
//     }
    
//     console.log(playObj)
    
    
}