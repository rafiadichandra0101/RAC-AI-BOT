const axios = require('axios')

const bitly = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan link') }
        var url = `https://api.haipbis.xyz/bitly?url=${query} \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`
        axios.get(url)
            .then(res => {
                const { result} = res.data
                resolve({ hasil })
             })
    })
}

module.exports = bitly
