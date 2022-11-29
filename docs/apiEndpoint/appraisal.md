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
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isjFotcMs.PA/v1/1200x-1.jpg",
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
                    "lowerPrice": 0.012962057622973778,
                    "upperPrice": 0.5472672676411281,
                    "average": 0.16518642257344054
                },
                "similarImages": {
                    "images": [
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/1f14bfc52427c9f1c686bbbe33e90a2c681dd482365e66569e4d7708525b8324.png",
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/89908b3436a5e10ed4780ea690aa2c8e5d89738895ee403bded46f69748f4cc0.png",
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/84cae7e8f254f1752d642deb95bd988ae562e4a40f365ba68262a7ce57879127.png",
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/53d7e69c8408bdc7c9504e168f3c6948fbc65ccfff50e2f8caedba6d9dbbd0a0.png",
                        "https://swopx-price-suggestion-images.s3.amazonaws.com/1698acbf082e1c9293464cd7bd6cb5854228f11740cb5950b9c3d95b42767fbe.png"
                    ],
                    "similarity": [
                        0.5947557687759399,
                        0.5789073705673218,
                        0.5703521966934204,
                        0.5562775731086731,
                        0.5544467568397522
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

