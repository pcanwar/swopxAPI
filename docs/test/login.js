const fetch = require('node-fetch')

let account = {
    "email": "examplecom",
    "password": "example"
};


const login = async() =>{
    const res = await fetch('https://external-dev.swopx.com/login',
    {
        method: 'POST',
        body: JSON.stringify(account),
        headers: { 'Content-Type': 'application/json' }
    }
    );
    const json = await res.json();
    console.log(json);

    const get_key = await('https://external-dev.swopx.com/generate');
    console.log(get_key);
}

login();