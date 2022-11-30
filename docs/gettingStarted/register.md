
__Register__

Head over to create your account and provide a username, email, and password for your account.

```API
  POST /api/register
```

 https://external-dev.swopx.com/register

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`       | `string`      | **Required**. Your API email |
| `password`    | `string`      | **Required**. Your API password |
| `name`        | `string`      | Your API name |


<!-- tabs:start -->

#### **POST**

```
Example of register 
{
    "email": "admin@example.com",
    "password": "xxx",
    "name: "admin"
} 
```

#### **Javascript**

```javascript
const fetch = require('node-fetch')

let account = {
    "email": "example@gmail.com",
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

```

#### **Response**
```JSON
{
    "success": true,
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2RAZ21haWwuY29tIiwiaWF0IjoxNjY5NjY1MDAxLCJleHAiOjE2NzAyNjk4MDF9.Ffa4I6yHdn1OJ71qPZogr0XD4Ch5CifLJootOQvivE4",
    "info": {
        "regTime": 1669665000,
        "name": "abcd",
        "requests": {
            "analytics": 0,
            "appraisal": 0
        },
        "subscriptions": {
            "package_appraisal": {
                "active": false,
                "expiration": null,
                "subscriptionID": null
            },
            "package_analytics": {
                "active": false,
                "expiration": null,
                "subscriptionID": null
            },
            "package_all": {
                "active": false,
                "expiration": null,
                "subscriptionID": null
            },
            "free_trial": {
                "active": false,
                "expiration": null,
                "subscriptionID": null
            },
            "custom": {
                "active": false,
                "expiration": null,
                "subscriptionID": null
            }
        },
        "stripe": {
            "cardMask": null,
            "cardBrand": null,
            "customerID": null
        }
    }
}

```


<!-- tabs:end -->


Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |
|`Unexpected token in JSON at position #` | Check the JSON formatting |

