### Lending API

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

#### **Javascript**

```javascript


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
                "6165db1045370b5dc120e4c6",
                "615dbfffcf042f7f8f8cac20",
                "615f0cf0149ada0a71f3de4a",
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

#### **Javascript**

```javascript

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
