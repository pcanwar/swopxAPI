const fetch = require('node-fetch')

const key = 'a6609ca7-a2f2-4ef0-80ff-e86f47372364'

let header = {
    "swopx-api": key,
    'Content-Type': 'application/json'
}

let req = {
    "count": "3"
}

const appraisal = async() =>{
    const res = await fetch('https://external-dev.swopx.com/execute/top',
    {
        method: 'POST',
        headers: header,
        body: JSON.stringify(req)
    });
    const json = await res.json();
    console.log(json.data);

}

appraisal();