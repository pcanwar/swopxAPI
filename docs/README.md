# Introduction
---

Welcome to the SwopX APIs documentation.

SwopX is the leading blockchain with Artificial Intelligence and Machine Learning, search, API, and analytics platform for NFTs on Ethereum. We use AI and Machine Learning for millions of NFTs to give price forecasts for any NFT, even with no prior price or sales history.
 
To provide equitable access to AI data, we've developed the SwopX Developer APIs to empower developers and enterprises with direct access to data and services via GET/POST requests.

SwopX’s APIs are provided as a community service.

## Support & FAQ

Our curated list of support articles and common questions you may have on topics such as rate limit, common error messages, and API key usage across. [Contact](https://www.swopx.com/) us if your issue is unique.



# Creating an Account

Having a SwopX account allows you to use sign-in-only features and tools such as APIs.

```
💡 Note that creating a SwopX account is only linked to SwopX services
```


### Register an Account
Head over to ….. page and provide a username, email, and password for your account.


### Verify Your Email
A confirmation link 🔗 will be sent to your email address to verify your sign-up request.
Once you've clicked on the link, your account set-up process is complete, and you may sign in.



### Using Your Account
Upon signing in, you will have access to your account, where you can fully use SwopX’s features, such as generating API keys 🔑, and interact with Data Analytics, NFT Appraisals, and Fraud Protection.


## API Reference

#### Register

```API
  POST /api/register
```

 https://external-dev.swopx.com/register

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your API email |
| `password` | `string` | **Required**. Your API password |
| `name` | `string` | Your API name |

```Example of register 
{
    "email": "admin@example.com",
    "password": "xxx",
    "name: "admin"
} 
```


Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |

#### Login

```API
  POST /api/register
```


https://external-dev.swopx.com/login

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your API email |
| `password` | `string` | **Required**. Your API password |


```Example of login
{
    "email": "admin@example.com",
    "password": "xxx"
} 
```

#### Get api info

```http
  GET /api/items/${id}
```

