const axios = require('axios')

const cektanggal = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan namamu') }
        var url = `https://api.haipbis.xyz/harinasional?tanggal=${query} \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`
        axios.get(url)
            .then(res => {
                const { tanggal, keterangan } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = cektanggal
