
# API Endpoints

## Analytics

```API
  POST /api/analytics
```

https://external-dev.swopx.com/execute/analytics

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `addresses` | `list` | **Required**. Smart contract addresses |

```Example of Analytics 
{
    "addresses": [
        "0x000A682fEEEFFC5e56A58a3b015fB07665d8a979",
        "0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42"
    ]
} 
```

Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |


## Appraisal 

```API
  POST /api/appraisal

```

https://external-dev.swopx.com/execute/appraisal

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `imageLinks` | `list` | **Required**. image links of the NFTs |

```Example of Appraisal
{
    "imageLinks": [
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isjFotcMs.PA/v1/1200x-1.jpg",
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isjFotcMs.PA/v1/1200x-1.jpg"
    ]
} 
```

Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |


#### Top Price Collections 

```API
  POST /api/top

```

POST https://external-dev.swopx.com/execute/top


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `count` | `string` | **Required**. top # of top price collections  |

```Example of Top Price Collections 
{
    "count": "5"
}
```

Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |


## Collection Transactions Info 

```API
  POST /api/transactions

```

POST https://external-dev.swopx.com/execute/transactions

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `addresses` | `list` | **Required**. list of smart contracts  |
| `days` | `string` | **Required**. number of days  |

```Example of Collection Transactions Info 
{
    "addresses": [
        "0x000A682fEEEFFC5e56A58a3b015fB07665d8a979",
        "0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42"
    ],
    "days": [
        "5",
        "7"
    ]
}
```

Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |



#### Get api info

```http
  GET /api/items/${id}
```