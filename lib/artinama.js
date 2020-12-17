const axios = require('axios')

const artinama = (nama) => {
    return new Promise((resolve, reject) => {
        if (typeof nama === 'undefined') { reject('masukan parameter nama.') }
        var url = `https://arugaz.herokuapp.com/api/artinama?nama=${nama} \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
    })
}

module.exports = artinama
