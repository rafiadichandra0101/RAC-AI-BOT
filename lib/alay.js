const axios = require('axios')

const alay = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('harap masukan teks.') }
        var url = `https://api.terhambar.com/bpk?kata=${teks} \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`
        axios.get(url)
            .then(res => {
                const { text: hasil } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = alay
