getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if(e.target.readyState === 4) {
            callback('You have an error', undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

getPuzzleSync = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false)
    request.send()
    if(request.readyState === 4 && request.responseText === 200) {
        console.log('yese')
    } else if(request.readyState === 4) {
        console.log('nope')
    }
}

getCountry = (country2Code, callback) => {
    const countryRequest = new XMLHttpRequest()
    countryRequest.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
           const data = JSON.parse(e.target.responseText)
           const country = data.find((country) => country.alpha2Code === country2Code)
            callback(undefined, country)
        } else if (countryRequest.readyState === 4) {
            callback('unable to fetch data', undefined)
            console.log('Unable to fetch data')
        }
    })
    countryRequest.open('GET', `https://restcountries.eu/rest/v2/all`)
    countryRequest.send()
}



