### Lending API

Using the lending API and smart contract, you can build your project such as lending and borrowing against physical assets 


#### Prerequisites

Before you continue, please ensure that you have accomplished the following:

- Install ```Node.js```.
- Install a ```MetaMask``` browser wallet.
- Install an ```IDE``` (such as VS Code).


#### Lending Protocol: (in Ethereum and Avalanche)

The lending contract allows NFT owners to collateralize their NFT and access short or long-term liquidity from lenders. 

Borrowers can collateralize their NFT in exchange for a loan from a lender. Furthermore, when a loan starts, lenders and borrowers will receive NFT receipts that they can sell to new owners. Owners of the NFT receipts are responsible for the loan; the new owner who receives the borrower’s receipt will have to pay back the loan, and the new owner of the lender’s receipt will receive the payments or collect the NFT if it defaults. The payment can be scheduled as a monthly payment. If the borrower misses one payment, the NFT gets defaulted. Borrowers can collateralize their NFT in exchange for a loan from a lender. Lenders can create loans with desired APY, duration, and Collateral.

________


__Refresh Client By WalletID or ClientID__ 

```API
POST api/client/refresh
```

https://external-dev.swopx.com/execute/swopx/client/refresh


WalletID: 

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `walletID` | `string` | **Required**. wallet address |


ClientID:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `clientID` | `string` | **Required**. client ID |

<!-- tabs:start -->

#### **POST**

```
{
    "walletID": "0xcd126ac67d61d6b09cca66f7848651f84a699892"
}
```


#### **Response**
```JSON
{
    "success": true,
    "data": {
        "success": true,
        "data": {
            "fcmToken": {
                "fcmTokenKey": ":-KmoScx",
                "deviceID": "059771dcd7e826dc"
            },
            "totalRewards": 76887.58699996243,
            "phone": "",
            "stripeAccountId": "acct_1JKSmP2EETsDmapI",
            "items_posted": [
                "62e00b0821"
            ],
            "items_matched": [
                "615b0333f9a",
                "610a71f3e313"
            ],
            "items_swapped": [
                "6160b50a713e86a",
                "620d5214663e7c9"
            ],
            "pending_matches": [],
            "reported_items": [],
            "pending_reports": [],
            "blockedUsers": [],
            "claimRewardsSignatures": [
                {
                    "signature": "0x42982c11c",
                    "rewardTokens": 1000000,
                    "timestamp": 1642088814,
                    "recipient": "0xcD48651f84A699892"
                }
            ],
            "lendingSignatures": [
                {
                    "sig": "0x3e90f95214c525674349968bd101026180ea56a29caf2b3acc5b67080e1bbedf5cf0cb61bbcd9ae1c",
                    "data": {
                        "title": "NFT 123",
                        "image": "some Image here"
                    }
                }
            ],
            "rating": 0,
            "rating_votes": 0,
            "nonce": 30,
            "lenderNonce": 434,
            "favorites": [
                "61547c4de4e07643b12e69b2",
                "616838ab45370b5dc12100d5",
                "618d82bcd8229e58934d62b5"
            ],
            "followers": [],
            "followings": [
                "615c4cfea2b33409a"
            ],
            "sent_offers": [
                "6160b63b149ae9d",
                "628661f05e330d04"
            ],
            "isAllStar": false,
            "emailVerified": true,
            "isActive": true,
            "facebookVerified": false,
            "phoneVerified": false,
            "imageVerified": false,
            "firstTimeUser": false,
            "walletUser": false,
            "userType": "regular",
            "description": {},
            "acuantState": "Accepted",
            "referralcount": 0,
            "subStatus": "incomplete_expired",
            "promoTickets": 0,
            "_id": "6154454dba5",
            "name": "test user 1",
            "email": "example@example.com",
            "password": "9i",
            "promoCode": "",
            "createdAt": "916Z",
            "updatedAt": "916Z",
            "__v": 0,
            "acuantID": "76e92b0b9d0c8ca5",
            "walletAddress": "0x7848651f84a699892",
            "rewardsInfo": {
                "mintNewItem": 0.01,
                "RewardLog": 178.10000000000005,
                "BuyLog": 1890.7400000001137,
                "AssetsLog": 68862.5,
                "BidLog": 4303.5,
                "AcceptOfferLog": 1652.8000000001018
            },
            "subCustomerID": "UuZPVky",
            "subSubscriptionID": "shgy9xvlUw0hGF",
            "subExpiration": "1668549170",
            "subType": "stripe"
        }
    }
}

```

<!-- tabs:end -->


__Register Wallet__ 

At your local server, you should ```Sign``` a message.

The message that needs to be signed can be as following :

```message
Welcome to SwopX!

Please sign to let us verify that you are the owner of this address:
0xcD126aC67d61d6A699892.

This will not cost you any gas fees.

By signing you accept the SwopX Terms of Service: https://swopx.com/terms

Timestamp: 1655239676
```


```
POST api/auth/connect
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `web3-signature` | `string` | **Required**. signture  |
| `web3-timestamp` | `string` | **Required**. time stamp |
| `walletAddress` | `string` | **Required**. wallet address |


<!-- tabs:start -->

#### **POST**

```
{
    "web3-signature": "0x4394a90c1e3961b",
    "web3-timestamp": 1663163187,
    "walletAddress": "0x9857fec"
}
```


#### **Response**
```
{
    "success": true,
    "data": {
        "success": ture,
        "data": {
        }
    }
}

```

<!-- tabs:end -->



_________



### Get All Borrowing

```API
GET listings/borrowings?collection=0xtestborrow&borrowerID=jdsfjk&borrowerAddress=0xksfdjdfs&page=2
```

#### Available query params are:

| Query params | Description |
| :-------------- | :-------------- | 
| `borrowerID` | `borrower ID` | 
| `borrowerAddress` | `borrower wallet address` | 
| `page` | `1656719350` | 
| `chainID` | `network Id e.g ethereum 1` | 
| `lenderID` | `lender ID` | 
| `lenderAddress` | `lender wallet address ` | 
| `collection` | `collection address` | 

______________

#### Get all borrowing listings grouped


https://external-dev.swopx.com/execute/swopx/listings/borrowings


This returns an array of unique collection addresses, then you can use ```GET /listings/borrowings?collection=0xxxxxx``` to filter by a certain collection that user expands


```API
GET /listings/borrowings
```

__Get listing by unique collection addresses__

```
https://external-dev.swopx.com/execute/swopx/listings/borrowings??collection=0124xxxxx

```

__Get all listing by a unique chain id__

```
https://external-dev.swopx.com/execute/swopx/listings/borrowings?chainID=5

```

______________

#### Get all borrowing & lending receipts info associated with a certain wallet address

```API
GET listings/receipts?wallet=WalletAddress
```

https://external-dev.swopx.com/execute/swopx/listings/receipts?wallet=0x53689fc174b85b79a16737f218b64f5b66584093
