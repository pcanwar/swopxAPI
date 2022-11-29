**Top Price Collections**


```API
  POST /api/top

```

POST https://external-dev.swopx.com/execute/top


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `count` | `string` | **Required**. top # of top price collections  |




<!-- tabs:start -->

#### **POST**

```Example of Top Price Collections 
{
    "count": "3"
}
```

#### **Javascript**

```javascript
const res = await fetch('https://external-dev.swopx.com/execute/top');
const json = await res.json();
console.log(json);
```

#### **Response**

```JSON
{
    "success": true,
    "data": {
        "success": true,
        "data": [
            {
                "c_addr": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                "price": 226642.0084593062,
                "collection_name": "BoredApeYachtClub",
                "collection_total_supply": "10000",
                "collection_image_name": "https://swopx-price-suggestion-images.s3.amazonaws.com/67bc1fff453d5552cd1ebe4364aa304699c5c5d5c9fcb3b93ab3951baa2c1576.png"
            },
            {
                "c_addr": "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
                "price": 218542.62361006325,
                "collection_name": "Art Blocks",
                "collection_total_supply": "153387",
                "collection_image_name": "https://swopx-price-suggestion-images.s3.amazonaws.com/967f15480bb89f9a52399ce1f85ec13960d68edd12fdd9457ffca81559fdca71.png"
            },
            {
                "c_addr": "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
                "price": 125115.2722786831,
                "collection_name": "MutantApeYachtClub",
                "collection_total_supply": "17962",
                "collection_image_name": "https://swopx-price-suggestion-images.s3.amazonaws.com/72d8f2e35e980c4015ecd88d49b2084c4782633392f10aa62d590038eb6e9d46.png"
            }
        ]
    }
}
```

<!-- tabs:end -->



Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |

