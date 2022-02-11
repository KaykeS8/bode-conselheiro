const msg = document.querySelector(".msg")

console.log(msg)

async function fraseBode() {
    try  {
        const url = 'https://api.adviceslip.com/advice'
        const response = await fetch(url)
        const fraseJson = await response.json()
    
        console.log(fraseJson)
        console.log(fraseJson.slip.advice)
    } catch(erro) {
        console.log(erro)
    }
}

fraseBode()
