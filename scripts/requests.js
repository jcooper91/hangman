const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Error retrieving puzzle')
    }
}  

const getCountry = async (country2Code) => {
    const response = await fetch(`//restcountries.eu/rest/v2/all`)
    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === country2Code)
    } else {
        throw new Error('Error retrieving country data')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=5f400b9049d10e')
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('nope')
    }
}

const getCurrentLocation = async () => {
    const location  = await getLocation()
    const country   = await getCountry(location.country)
    return country
}

getPuzzleOld = (wordCount) => {
    return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to retrive puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

getPuzzleSync = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '//puzzle.mead.io/slow-puzzle?wordCount=3', false)
    request.send()
    if(request.readyState === 4 && request.responseText === 200) {
        console.log('yese')
    } else if(request.readyState === 4) {
        console.log('nope')
    }
}

getCountryOld = (country2Code) => {
    return fetch(`//restcountries.eu/rest/v2/alpha/${country2Code}`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Could not retrieve country')
        }
    }).then((country) => {
        return country.name
    })
}

getLocationOld = () => {
    return fetch('//ipinfo.io/json?token=5f400b9049d10e').then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Error retrieving location info')
        }
    }).then((location) => {
        return location
    })
}

