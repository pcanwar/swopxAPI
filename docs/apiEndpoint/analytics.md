__Analytics__

```API
  POST /api/analytics
```

https://external-dev.swopx.com/execute/analytics

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `addresses` | `list` | **Required**. Smart contract addresses |


<!-- tabs:start -->

#### **POST**

```Example of Analytics 
{
    "addresses": [
        "0x000A682fEEEFFC5e56A58a3b015fB07665d8a979",
        "0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42"
    ]
} 
```

#### **Javascript**

```javascript

```

#### **Response**

```JSON
{
    "success": true,
    "data": {
        "success": true,
        "data": [
            {
                "price": {
                    "2022-11-23 00:00:00": 102.12653621011069
                  
                },
                "price_min": 43.651788444444,
                "price_max": 103.56103621011067,
                "price_last": 102.12653621011069,
                "unique_holders": 313,
                "volume_7d": 0.0198,
                "volume_30d": 0.0198,
                "sales_7d": 1,
                "sales_30d": 2,
                "price_change": 0.00019391472820418088,
                "unique_holders_change": 0.0032051282051281937,
                "volume_7d_change": null,
                "sales_change": null,
                "collection_name": "Baliverse",
                "collection_total_supply": "8000",
                "collection_image_name": "https://swopx-price-suggestion-images.s3.amazonaws.com/442d8fddb0324217026ce16f40cd0ebcffa5c35dc32254e88416260d7ee54cdb.png",
                "wallet_most_tokens": {
                    "num_of_token": {
                        "0x59b6e12df0aeb2022ae1f993c1dc4bc9a77bf98c": 39
                    }
                },
                "wallet_most_values": {
                    "total_value": {
                        "0x99e8420d53cdc2bef8f72ca1aead5e2b34a0cdad": 8
                    }
                },
                "is_fraud": false,
                "rat_fraud": 0.5917355371900826,
                "borrow": {
                    "48": {
                        "avg_historical_price": 0.07,
                        "diff": 0.05500000000000001,
                        "count": 2,
                        "adj_rate": 0.5,
                        "bpower": 0.02931432109392731,
                        "brate_1y": 20.18284770828605,
                        "brate_6m": 19.18284770828605,
                        "brate_3m": 18.18284770828605,
                        "brate_1m": 17.18284770828605,
                        "brate_1y_earn": 0.005916464783105321,
                        "brate_6m_earn": 0.0026883862193416,
                        "brate_3m_earn": 0.0012502603722607353,
                        "brate_1m_earn": 0.0003899234232691679
                    },
                    "6909": {
                        "avg_historical_price": 0.05766666666666667,
                        "diff": 0.04266666666666667,
                        "count": 3,
                        "adj_rate": 0.5979674649614837,
                        "bpower": 0.029014362058269638,
                        "brate_1y": 20.26283678446143,
                        "brate_6m": 19.26283678446143,
                        "brate_3m": 18.26283678446143,
                        "brate_1m": 17.26283678446143,
                        "brate_1y_earn": 0.005879132827919882,
                        "brate_6m_earn": 0.0026715048550688615,
                        "brate_3m_earn": 0.0012425845705248332,
                        "brate_1m_earn": 0.00038760539374688315
                    }
                },
                "floor": 0.015000000000000001,
                "mean": 0.10453074330615215,
                "tokens_last": {
                    "46": 0.327,
                    "48": 0.05,
                    "52": 0.39
                },
                "floor_change": 0,
                "mean_change": -0.0008298252049875332,
                "image_names": {
                    "46": "b3b55abbb59a75e03e521f11496cefa62996913c6b3a81feb2b3d65bbc8af512",
                    "48": "3b5a8f384347b23aa01b412185ce087a81def515bde21302e96833a28a5ba56c",
                    "52": "5dcbade3b510539ab5eb6bec242153c6a3323e704d043d938992e7ae0509d254"   
                },
                "price_drop_alert": [],
                "whale_alert": [],
                "pump_alert": []
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

