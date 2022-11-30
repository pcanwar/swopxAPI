__Login__

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
let account = {
    "email": "example@gmail.com",
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
}
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

