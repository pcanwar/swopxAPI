__Appraisal__ 

```API
  POST /api/appraisal

```

https://external-dev.swopx.com/execute/appraisal

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `imageLinks` | `list` | **Required**. image links of the NFTs |


<!-- tabs:start -->

#### **POST**
```JSON
{
    "imageLinks": [
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isjFotcMs.PA/v1/1200x-1.jpg"
    ]
} 
```

#### **Javascript**

```javascript
const res = await fetch('https://external-dev.swopx.com/execute/appraisal');
const json = await res.json();
console.log(json);

```

#### **Response**
```JSON

{
    "success": true,
    "data": [
        {
            "success": true,
            "data": {
                "suggestedPrice": {
                    "lowerPrice": 0.001532295609874095,
                    "upperPrice": 5.321510201677219,
                    "average": 0.9676826588056716
                },
                "similarImages": {
                    "images": [
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/5c5bfcbc239ff28679350c10c2665dd818468d9ce6296e335f79c340c540079e.png",
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/38fa97e1adc69585fc0b600c821f87d40031f1d1503ae5abd377bb3253627d2c.png",
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/264d1a7b84a24ea1d2edecf7e99614353fbe96990dce615c477d3a753890efe8.png",
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/323605945edb2334021d28db49524812879d7dcc8c0a3edf850c993809f2189e.png",
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/bbe7e2602148f5a7754e68cff102fcc216f2e0b25f5217af388943b4e98fd14b.png"
                    ],
                    "similarity": [
                        0.4198486804962158,
                        0.40537407994270325,
                        0.3671647906303406,
                        0.3643375635147095,
                        0.3626147508621216
                    ]
                },
                "identity": false
            }
        }
    ]
}

```

<!-- tabs:end -->


Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |

