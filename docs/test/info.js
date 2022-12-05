const fetch = require('node-fetch')

const bearer = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVjb20iLCJpYXQiOjE2Njk4MjQ3MzEsImV4cCI6MTY3MDQyOTUzMX0.Px6jL2_mo0_pPIwV0KDTI1zyetZEDSbvG8PATVJI4wQ'

let header = {
    "Authorization": bearer
}

const info = async() =>{
    const res = await fetch('https://external-dev.swopx.com/info',
    {
        method: 'GET',
        headers: header
    });
    const json = await res.json();
    console.log(json);
}

info();