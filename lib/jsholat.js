const axios = require('axios')

const jsholat = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nama daerah.') }
        var url = `https://api.haipbis.xyz/jadwalsholat?daerah=${query} \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`
        axios.get(url)
            .then(res => {
                const { Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha } = res.data
                resolve({ Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha })
             })
    })
}

module.exports = jsholat
