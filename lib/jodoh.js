const axios = require('axios')

const jodoh = (nama) => {
    return new Promise((resolve, reject) => {
        if (typeof nama === 'undefined') { reject('masukan parameter nama.') }
        var pasangan = nama.split(/\&/)
        var url = `https://arugaz.herokuapp.com/api/jodohku?nama=${pasangan[0]}&pasangan=${pasangan[1]} \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`
        axios.get(url)
            .then(res => {
                const { negatif, positif } = res.data
                resolve({ negatif, positif })
             })
    })
}

module.exports = jodoh
