const fetch = require('node-fetch')

const key = 'a6609ca7-a2f2-4ef0-80ff-e86f47372364'

let header = {
    "swopx-api": key,
    'Content-Type': 'application/json'
}

let req = {
    "addresses": [
        "0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42"
    ]
};

const analytics = async() =>{
    const res = await fetch('https://external-dev.swopx.com/execute/analytics',
    {
        method: 'POST',
        headers: header,
        body: JSON.stringify(req)
    });
    const json = await res.json();
    console.log(json.data);

}

analytics();