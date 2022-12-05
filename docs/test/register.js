const fetch = require('node-fetch')

let account = {
    "email": "examplecom",
    "password": "example",
    "name": "example"
};

const reg = async() =>{
    const res = await fetch('https://external-dev.swopx.com/register',
    {
        method: 'POST',
        body: JSON.stringify(account),
        headers: { 'Content-Type': 'application/json' }
    }
    );
    const json = await res.json();
    console.log(json);
}

reg();

