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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiaWF0IjoxNjY5ODIzMjA2LCJleHAiOjE2NzA0MjgwMDZ9.LuLLCEIvurDaFUJ2czeas0rV9-ahNU-Qmar91MJ4VuM