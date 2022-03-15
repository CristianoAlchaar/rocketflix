const config = {
    api_key: '0e3950318bf412e11272f2f58c14e062',
    api_base_url: 'https://api.themoviedb.org/3/',
    image_base_url: 'https://image.tmdb.org/t/p/w500',
    language: 'language=pt-BR'
}

/**
    Chave da API (v3 auth)
    0e3950318bf412e11272f2f58c14e062

    Exemplo de Requisição de API
    https://api.themoviedb.org/3/movie/550?api_key=0e3950318bf412e11272f2f58c14e062

    Token de Leitura da API (v4 auth)
    eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTM5NTAzMThiZjQxMmUxMTI3MmYyZjU4YzE0ZTA2MiIsInN1YiI6IjYyMDI3MTI4ZTI0ZTNhMDAyMDQxZGY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f9GBTuzeyehxbSk5QJluMqpr69F3HFsZmgQRXmzMMdI

    https://api.themoviedb.org/3/movie/550?api_key=0e3950318bf412e11272f2f58c14e062
*/

function getApi(url_themoviesdborg){
    let request = new XMLHttpRequest()

    request.open("GET", url_themoviesdborg, false)
    request.send() 

    return request.responseText
}

function createMov(movie){

    const div_project_cards = document.createElement('div')
    console.log(movie)

    return div_project_cards

}

function main(){
    const page = 1
    const BASE_URL = config.api_base_url
    const API_KEY = config.api_key

    let data = getApi(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
    let box = JSON.parse(data)
    let movies = box.results
    let div_box_movies = document.getElementById('movies')
    
    movies.forEach(movie => {
        let mov = createMov(movie)
        div_box_movies.appendChild(mov)
    })
}

main()
