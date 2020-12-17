const axios = require('axios')

const chord = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nama lagu.') }
        var url = `https://alfians-api.herokuapp.com/api/chord?q=${query} \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = chord
