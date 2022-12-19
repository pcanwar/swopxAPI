__root__ 

Allows members to collateralize their NFT and access short and long term liquidity from Lenders via the SwopX Lending Smart Contract.


An example of the loan terms (Amortization schedule example):

- The term 0 represents the per payment timestamp, after this timestamp borrower can not run the pre payment. 

- The other terms represent the monthly payment ....

| Term | Payment Date/Timestamp  | Payment Principal in Wei  | Interest in Wei | Pre Interet in Wei | All Pre Payment Principal in Wei |
| :-------- | :------- | :------------ |:-------- | :------- | :-------- |
| `0` | `1656719350` | `0` | `16666666666666667` | `2000000000000000000`| `10000000000000000000`|
| `1` | `1656719361` | `0` | `16666666666666667` | `2000000000000000000`| `10000000000000000000`|
| `3` | `1656719981` | `0` | `16666666666666667` | `2000000000000000000`| `10000000000000000000`|
| `4` | `1656729981` | `10000000000000000000`| `16666666666666667` | `0`| `0` |






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
        "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg"
    ]
} 
```

#### **Javascript**

```javascript
const fetch = require('node-fetch')

const key = 'a6609ca7-a2f2-4ef0-80ff-e86f47372364'

let header = {
    "swopx-api": key,
    'Content-Type': 'application/json'
}

let req = {
    "imageLinks": [
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isjFotcMs.PA/v1/1200x-1.jpg"
    ]
} ;

const appraisal = async() =>{
    const res = await fetch('https://external-dev.swopx.com/execute/appraisal',
    {
        method: 'POST',
        headers: header,
        body: JSON.stringify(req)
    });
    const json = await res.json();
    console.log(json.data[0].data);
    // console.log(json.data[0].data.similarImages['similarity']);

}

appraisal();

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

