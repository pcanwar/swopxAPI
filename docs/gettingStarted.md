# Create Your Account

Having a SwopX account allows you to use sign-in-only features and tools such as APIs. Upon signing in, you will have access to your account, where you can fully use SwopX’s features, such as generating API keys 🔑, and interact with Data Analytics, NFT Appraisals, and Fraud Protection.

```💡 📙
 Note that creating a SwopX account is only linked to SwopX services
```


**Get API Info**

<!-- tabs:start -->

#### **GET**

```
 "Authorization": bearer
```

#### **Javascript**

```javascript

const fetch = require('node-fetch')

const bearer = 'YOUR TOKEN'

let header = {
    "Authorization": bearer
}

const info = async() =>{
    const res = await fetch('https://external-dev.swopx.com/info',
    {
        method: 'GET',
        headers: header
    });
    const json = await res.json();
    console.log(json);
}

info();

```

#### **Response**

```json
{
    "success": true,
    "info": {
        "name": "name",
        "stripe": {
            "cardBrand": null,
            "customerID": null,
            "cardMask": null
        },
        "regTime": 1669823206,
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
            "package_appraisal": {
                "subscriptionID": null,
                "active": false,
                "expiration": null
            },
            "free_trial": {
                "subscriptionID": null,
                "active": false,
                "expiration": null
            },
            "custom": {
                "subscriptionID": null,
                "active": false,
                "expiration": null
            }
        },
        "requests": {
            "analytics": 0,
            "appraisal": 0
        }
    },
    "key": "Your Key"
}
```



<!-- tabs:end -->
