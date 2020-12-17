const needle = require('needle')

const igStalk = (user) => {
    return new Promise((resolve, reject) => {
        if (typeof user === 'undefined') { reject('masukan username') }
        var url = `https://alfians-api.herokuapp.com/api/stalk?username=${user} \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`
        needle(url, async (err, resp, body) => {
            try {
                if (body.status === false) { reject(`maaf username *${user}* tidak ditemukan. \n\n--oo0oo-- \n_M a d e   W i t h ❤️   *C h a n z ' B O T*_`) }
                    resolve(body)
            } catch (err) {
                reject('sepertinya error.')
            }
        })
    })
}

module.exports = igStalk
