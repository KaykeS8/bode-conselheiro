const text = document.querySelector('.text')

async function fraseBode() {
    try  {
        const url = 'https://api.adviceslip.com/advice'
        const response = await fetch(url)
        const fraseJson = await response.json()
        const paragrafo = document.createElement('p')
        const frase = fraseJson.slip.advice

        text.innerHTML += `<p class="paragraph-conselho">"${frase}"</p><br>
                           <p class="Goat">-Goat<p>
        `

    } catch(erro) {
        console.log(erro)
    }
}

fraseBode()
