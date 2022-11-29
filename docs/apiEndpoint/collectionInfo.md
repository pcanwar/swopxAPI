
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
        "0x000A682fEEEFFC5e56A58a3b015fB07665d8a979",
        "0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42"
    ],
    "days": [
        "5",
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

<!-- tabs:end -->


Possible errors

| Error Code | Description                |
| :--------  | :------------------------- |
| `400 Bad Request`  | Required fields were invalid, not specified |
| `401 Unauthorized`  | The access token is invalid or has revoked |

