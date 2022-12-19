__Borrower Request__ 

* Submit Borrower Request

```API
POST listings/borrow
```

https://external-dev.swopx.com/execute/swopx/listings/borrow

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `borrowerClientID` | `string` | **Required**. the database _id of the user willing to borrow (a borrowerWalletID can be used instead with a wallet address of the user) |
| `borrowerAddress` | `string` | **Required**. borrower address |
| `collectionAddress` | `string` | **Required**. NFT collection address |
| `tokenID` | `string` | **Required**. NFT token ID |
| `data` | `string` |  Object value |



| :memo:        | You will not be able to submit this request more than one time for the same borrower client, collection address and tokenID|
|---------------|:------------------------|


<!-- tabs:start -->

#### **POST**

```
Example of submitting a request 
{
    "borrowerClientID": "6b12e69a1",
    "borrowerAddress": "0xtestborrow",
    "collectionAddress": "0xa7d8dCF4Aebabd5bD270",
    "tokenID": "9000500",
    "data": {
        "randomField": "randomValue"
    }
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
        }
    }
}

```

<!-- tabs:end -->

* Generating Merkle Tree Root

```API
POST /listings/merkle
```

https://external-dev.swopx.com/.....

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `paymentSchedule` | `Object` | **Required**. an object of the payment schedule |

An example of the `payment schedule` terms (Amortization schedule example):

- The term 0 represents the per payment timestamp, after this timestamp borrower can not run the pre payment. 

- The other terms represent the monthly payment ....

| Term | Payment Date/Timestamp  | Payment Principal in Wei  | Interest in Wei | Pre Interet in Wei | All Pre Payment Principal in Wei |
| :-------- | :------- | :------------ |:-------- | :------- | :-------- |
| `0` | `1656719350` | `0` | `16666666666666667` | `2000000000000000000`| `10000000000000000000`|
| `1` | `1656719361` | `0` | `16666666666666667` | `2000000000000000000`| `10000000000000000000`|
| `3` | `1656719981` | `0` | `16666666666666667` | `2000000000000000000`| `10000000000000000000`|
| `4` | `1656729981` | `10000000000000000000`| `16666666666666667` | `0`| `0` |

<!-- tabs:start -->

#### **POST**

```
Example of submitting a payment schedule 
{
    "paymentSchedule": {   
        "0": ["1656719350", "0","16666666666666667", "2000000000000000000","10000000000000000000"],
        "1": ["1656719350", "0","16666666666666667", "2000000000000000000","10000000000000000000"],
        "2": ["1656719350", "0","16666666666666667", "1888888888888888883","10000000000000000000"],
        "3": ["1656719350", "0","16666666666666667", "1666666666666666663","10000000000000000000"],
        "4": ["1656719350", "10000000000000000000","1666666666666666667", "0","0"]
    }
}
```

#### **Javascript**

```javascript


```

#### **Response**
```JSON

{
    "merkleTreeRoot": "0x0d79a0c4c168a32ba4cb91cfa3122e5155e90553bb6844ebf846ecda3d39adda"
}

```

<!-- tabs:end -->


### Submit a loan 

First the borrower needs an offer, so this function can be ran by the borrower to start a loan when they agree on a deal.

```js

    /*
    * @notice: the submit function is called by the borrowers only when there is a agreement on the lending schedule loan 
    * @param _nonce uint256 ID comes from the backend and it can be used  once   .
    * @param _paymentAddress address is the crypto currncy address WETH, USDT, etc
    * @param _lender address is the lender wallet address 
    * @param _nftcontract address is smart contract address 
    * @param _nftTokenId uint256 is nft id
    * @param _loanAmounLoanCost uint256 is an arry of total loan amount, total loan interest and fee of the total loan amount.
    * @param _offeredTime uint256 needs to be a future timestamp   
    * @param _gist bytes32, the root value 
    * @param signature bytes value
    */
    const submitLanding = await swopXLanding.connect(borrower).submit(
      _nonce, _paymentContract, _lender, 
      _nftcontract, _nftTokenId, _loanAmounLoanCostFee,
      _offeredTime,root, signature);
    await submitLanding.wait();

```

____

### Rejecting Offer from Lender (Borrower can do that)

```API
POST /listings/lend/reject

```
https://external-dev.swopx.com/execute/swopx/listings/lend/reject


<!-- tabs:start -->

#### **POST**

```
Example of rejecting Offer from a lender  
{
    "borrowingID": "626073cb317d794a76ce4f2d",
    "borrowerClientID": "61547bf0e4e07643b12e69a1",
    "signature": "sig2444"
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
            "status": "okay"
        }
    }
}

```

<!-- tabs:end -->


_____





### Make payment 

```js 


/*
* @notice: make payment is a way to pay a loan by a borrower, and 
* the payment has to follow the term's array in the json file.
* at the end of the payment term both nft receipt tokens will get  burned.
* On the backend needs to listen to two events 
* @param nftreceipt/_counterId uint256 is the main id of the lending and each counter contains two nft receites 
* @param term_ uint256 needs to match the the counter terms in the contract, and it gets increaded each time the borrower made a payment.
* @param loanTimestampPaymentInterest the arry of the current term starting from 1.
* @param feeInterest uint256 is a fee that based on the interest of current term.
* @param proof leaf of Merkle tree   
*/

const makePayment = await swopXLanding.connect(borrower).makePayment(_counterId, term_, 
loanTimestampPaymentInterest, feeInterest, proof);
await makePayment.wait();


```


### Make Per Payment

```js

/*
* @notice: needs to get calculate interest fee before make a payment
* On the backend  there is two events needs to be ran
* @param termInterest uint256 is a the interest value from a json file 
*/
let feeInterest ;
await swopXLanding.calculatedInterestFee(termInterest).then(res=>{
    feeInterest = res;
});

/*
    * @notice: make pre payment is an early repayment of all amount loan and interest loan by a borrower, NFT receipt can identify the addresses of the lender and borrower. 
    
    * verifiying tow proofs, the per Proof which needs to be beofre the per timestamp and proof which is the current term.
    
    * Both NFT receipts get burn:
    For backend, there is two events needs to be ran.. 
    
    * @param nftreceipt/_counterId uint256 is the main id of the lending receipt. 
    * @param _counterId/nftreceipt uint256 is the main id of the lending 
    * @param term_ uint256 each term to pay the pre payment 
    * @param loanTimesPaymentInterest uint256 is an arry of the current term timestamp , payment loan, and interest.
    * @param preLoanTimes uint256 is an arry of the timestamp of the 0 index term
    * @param fee_ of the interest
    * @param proof of the _term 
    * @param preProof of the 0 term's interest
*/
const makePerPayment = await swopXLanding.connect(borrower).makePrePayment(nftreceipt, term_,
    loanTimesPaymentInterest,preloanTimes,feePerinterest,firstproof,preProof);
await makePerPayment.wait();



```

### Extend Time

In order to extend the time lender has to agree with borrower and this will renew the root


```js

/*
* @notice:  borrower needs to submit the lender new proof to extend the time with a new timestamps and payment intereset 
            the offeredTime value has to be not expired with a current time.
* @param nonces uint256 is an arry of borrower's nonce and lender's nonce.
* @param _counterId uint256 Id of the receipt NFT
* @param loanInterest uint256 new total insterst 
* @param currentTerm_ uint256 the cuurent term that already paid 
* @param _offeredTime uint256  it has to be greater then current timestamp otherwise it will be expired offer
* @param gist bytes32 new root
* @param signatures bytes32 aare an arry of borrower's sig and the lender's sig
*/
const extendTheTime = await swopXLanding.connect(borrower).extendTheTime(nonces [2], _counterId,  loanInterest,  currentTerm_,  _offeredTime,  gist ,
signatures [2]) 

```

### Rejecting Time Extension (Borrower can do that)

```API
POST /listings/extend/reject
```
https://external-dev.swopx.com/execute/swopx/listings/extend/reject

<!-- tabs:start -->

#### **POST**

```
Example of submitting a rejection from the borrower 
{
    "borrowingID": "626073ca76ce4f2d",
    "borrowerClientID": "6107643b12e69a1",
    "nonce": "1"
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
        }
    }
}

```

<!-- tabs:end -->


_____



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


#### Get all borrowing listings grouped by unique collection addresses

This returns an array of unique collection addresses, then you can use ```GET /listings/borrowings?collection=0xxxxxx``` to filter by a certain collection that user expands


```API
GET /listings/borrowings/collections
```

#### Get all borrowing & lending receipts info associated with a certain wallet address

```API
GET listings/receipts?wallet=WalletAddress
```








