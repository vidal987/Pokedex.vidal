fetch("https://pokeapi.co/api/v2/pokemon")
.then((response) => {return response.json()})
.then((data) => {escreve(data)})

function escreve(dados) {
    let nomes = dados.results.map((poke) => {return poke.name})

    document.querySelector("body").innerHTML += "<ul>"
    nomes.forEach(element => {
        document.querySelector("body").innerHTML += `<li>${element}</li>`
    })
    document.querySelector("body").innerHTML += "</ul>"
}