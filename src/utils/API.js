const axios = require('axios');

function getEmployees() {
    return axios.get('https://randomuser.me/api/?results=30')
}

export default getEmployees