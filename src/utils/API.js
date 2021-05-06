const axios = require('axios');

function getEmployees() {
    return axios.get('https://randomuser.me/api/?nat=CA&results=30')
}

export default getEmployees