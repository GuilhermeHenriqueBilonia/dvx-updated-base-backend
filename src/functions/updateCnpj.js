const axios = require('axios')

module.exports = {
    udapteCnpj: async(item, params) => {
        const cnpj = item.cnpj
        const sintegraData = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
        return sintegraData
    }
}