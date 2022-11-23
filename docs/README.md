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


Register an Account
Head over to ….. page and provide a username, email, and password for your account.


2. Verify Your Email
A confirmation link 🔗 will be sent to your email address to verify your sign-up request.
Once you've clicked on the link, your account set-up process is complete, and you may sign in.



3. Using Your Account
Upon signing in, you will have access to your account, where you can fully use SwopX’s features, such as generating API keys 🔑, and interact with Data Analytics, NFT Appraisals, and Fraud Protection.


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

