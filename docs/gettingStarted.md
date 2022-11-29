# Create Your Account

Having a SwopX account allows you to use sign-in-only features and tools such as APIs. Upon signing in, you will have access to your account, where you can fully use SwopX’s features, such as generating API keys 🔑, and interact with Data Analytics, NFT Appraisals, and Fraud Protection.

```💡 📙
 Note that creating a SwopX account is only linked to SwopX services
```


<!-- <dl>
  <dt>Register</dt>
  <dd>Verify Email</dd>
  <dt>Login</dt>
  <dt>Generate Key</dt>
</dl> -->


<!-- ## API Reference -->

## Register
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
const res = await fetch('https://external-dev.swopx.com/register');
const json = await res.json();
console.log(json);

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


## Verify Your Email
A confirmation link 🔗 will be sent to your email address to verify your sign-up request.
Once you've clicked on the link, your account set-up process is complete, and you may sign in.

____

## Login

```API
  POST /api/login
```

https://external-dev.swopx.com/login

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your API email |
| `password` | `string` | **Required**. Your API password |


<!-- tabs:start -->

#### **POST**

```Example of login
{
    "email": "admin@example.com",
    "password": "xxx"
} 
```

#### **Javascript**
```javascript
const res = await fetch('https://external-dev.swopx.com/login');
const json = await res.json();
console.log(json);
```

#### **Response**
```json
{
    "success": true, // false
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "info": {
        "name": "admin",
        "regTime": 1669045871,
        "requests": {  
            "analytics": 497,
            "appraisal": 498
        },
        "stripe": {
            "cardBrand": null,
            "customerID": null,
            "cardMask": null
        },
        "subscriptions": {
            "package_analytics": {
                "subscriptionID": null,
                "active": false,
                "expiration": null
            },
            "package_all": {
                "subscriptionID": null,
                "active": false,
                "expiration": null
            },
            "free_trial": {
                "subscriptionID": null,
                "active": false,
                "expiration": null
            },
            "package_appraisal": {
                "subscriptionID": null,
                "active": false,
                "expiration": null
            },
            "custom": {
                "subscriptionID": null,
                "active": false,
                "expiration": null
            }
        }
    },
    "key": "a6609ca7-a2f2-4ef0-80ff-e86f47372364"
}
```

<!-- tabs:end -->


!> 📖 Tip: the success field retrun **false** for failed login and **true** for successful login.


## Generate key

You can get the key by using The returns a jwt token that can later be used to interact with the API key generation logic.

```API
  Get /api/generate
```

https://external-dev.swopx.com/generate


```Example of getting the gernerating key
{
    "success": true,
    "key": "d8a471810919cd2effc275d2-"
}
```

## Get API Info

```http
  GET /api/items/${id}
```