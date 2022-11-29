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
    "count": "5"
}
```

#### **Javascript**

```javascript
const res = await fetch('https://external-dev.swopx.com/execute/top');
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

