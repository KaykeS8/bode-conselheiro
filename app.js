

async function fraseBode() {
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url)
    const fraseJson = await response.json()

    console.log(fraseJson)
    console.log(fraseJson.slip.advice)
}

fraseBode()