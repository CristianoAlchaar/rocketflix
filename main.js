const config = {
    api_key: '0e3950318bf412e11272f2f58c14e062',
    api_base_url: 'https://api.themoviedb.org/3/',
    image_base_url: 'https://image.tmdb.org/t/p/w500',
    language: 'language=pt-BR'
}

function getApi(url_themoviesdborg){
    let request = new XMLHttpRequest()

    request.open("GET", url_themoviesdborg, false)
    request.send() 

    return request.responseText
}

function createMov(movie){


    const div_cards = document.createElement('div')
    div_cards.setAttribute('class', 'div-details')

        const div_poster = document.createElement('div')
        div_poster.setAttribute('class', 'div-poster')
        const img_poster = document.createElement('img')
        img_poster.setAttribute('src', `https://image.tmdb.org/t/p/w500${movie.poster_path}`)

        div_poster.appendChild(img_poster)

        const div_box = document.createElement('div')
        div_box.setAttribute('class', 'div-box')      
    
            const div_title = document.createElement('div')
            div_title.setAttribute('class', 'div-title')
            div_title.innerText = movie.title

            const div_description = document.createElement('div')
            div_description.setAttribute('class', 'div-description')
            div_description.innerText = movie.overview

        div_box.appendChild(div_title)
        div_box.appendChild(div_description)

    div_cards.appendChild(div_poster)
    div_cards.appendChild(div_box)

    return div_cards

}

function myMain(){

    console.log("oi")

    const maxPage = 500
    const maxMovie = 19

    const page = Math.floor(Math.random() * maxPage)
    const itemMovie = Math.floor(Math.random() * maxMovie) 
    const BASE_URL = config.api_base_url
    const API_KEY = config.api_key

    let data = getApi(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
    let box = JSON.parse(data)
    let movies = box.results
    let div_box_movies = document.getElementById('movies')
 
    let mov = createMov(movies[itemMovie])
    div_box_movies.appendChild(mov)
    
}

myMain()

function myFunction()
{
    var x = document.getElementById("botao");
    
    x.onclick().myMain()

}
