
__Collection Transactions Info__

```API
  POST /api/transactions

```

POST https://external-dev.swopx.com/execute/transactions

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `addresses` | `list` | **Required**. list of smart contracts  |
| `days` | `string` | **Required**. number of days  |



<!-- tabs:start -->

#### **POST**

```Example of Collection Transactions Info 
{
    "addresses": [
        "0x000A682fEEEFFC5e56A58a3b015fB07665d8a979"
    ],
    "days": [
        "7"
    ]
}
```

#### **Javascript**

```javascript
const res = await fetch('https://external-dev.swopx.com/execute/transactions');
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
                "floor_forecast": 0.01049214208492257,
                "hist": {
                    "0": 0.877875,
                    "1": 0.09675,
                    "2": 0.021875,
                    "3": 0.00325,
                    "4": 0.00025,
                    "5+": 0
                },
                "transactions": [
                    {
                        "trans_hash": "0x19241bb1def0c9f5dfa41729b948f56e18583974d8513b79eb73434da18f9043",
                        "from": "0xF916719c7251e109Cf3D1a977B6CAD198b630C32",
                        "to": "0x4f522946e7fa4f13ea4DA3Fd0B96d10C033B2382",
                        "price": 0.0198,
                        "token_721": "7427",
                        "timestamp": 1669187255
                    }
                ],
                "wallet_most_value": {
                    "1669247999": {
                        "wallet": "0x99e8420D53CDC2bef8F72CA1aEad5e2B34a0CDad",
                        "value": 8
                    }
                }
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
|       `false`       | Number of days supplied must equal to the number of collections addresses|

