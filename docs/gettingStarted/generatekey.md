__Generate key__

You can get the key by using The returns a jwt token that can later be used to interact with the API key generation logic.

```API
  Get /api/generate
```

https://external-dev.swopx.com/generate


<!-- tabs:start -->

#### **GET**

```
 "Authorization": bearer
```

#### **Javascript**

```javascript

const fetch = require('node-fetch')

const bearer = 'your token'

let header = {
    "Authorization": bearer
}

const generate = async() =>{
    const res = await fetch('https://external-dev.swopx.com/generate',
    {
        method: 'GET',
        headers: header
    });
    const json = await res.json();
    console.log(json);
}

generate();

```

#### **Response**
```JSON
{
    "success": true,
    "key": "d8a47181091"
}
```


<!-- tabs:end -->


Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |
| `403 Forbidden`  | Need a permission to access |
| `404 Not found`  | The requested resource does not exist |
| `503 Unhandled`  | Not ready to handle a request |
|`Unexpected token in JSON at position #` | Check the JSON formatting |

