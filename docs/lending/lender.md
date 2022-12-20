


__Lender Request__


Allows members to collateralize their NFT and access short and long term liquidity from Lenders via the SwopX Lending Smart Contract.


| :exclamation:  Lender can cancel their sig and root at any time before the borrower start the loan. Once the loan starts, the lender can not cancel the deal.|
|-----------------------------------------|


#### Submitting an offer from the lender with payment schedule

```API
POST /listings/lend/schedule
```

https://external-dev.swopx.com/execute/swopx/listings/lend/schedule

<!-- tabs:start -->

#### **POST**

```
Example of submitting a schedule offer
{
    "borrowingID": "626073cb317d794a76ce4f2d",
    "paymentSchedule": {   
        "0": ["1656719350", "0","16666666666666667", "2000000000000000000","10000000000000000000"],
        "1": ["1656719350", "0","16666666666666667", "2000000000000000000","10000000000000000000"],
        "2": ["1656719350", "0","16666666666666667", "1888888888888888883","10000000000000000000"],
        "3": ["1656719350", "0","16666666666666667", "1666666666666666663","10000000000000000000"],
        "4": ["1656719350", "10000000000000000000","1666666666666666667", "0","0"]
    },
    "lenderWalletID": "0xcd126ac67d61d6b09cca66f7848651f84a699892",
    "lenderAddress": "0xlender",
    "signature": "sig2444",
    "data": {
        "randomFieldLender": "randomValueLender"
    }
}
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


#### Generating Merkle Tree Root

It generates the merkle tree root and stores it in the lender’s offer object in the paymentInfo field

```API
POST /listings/merkle
```
https://external-dev.swopx.com/execute/swopx/listings/merkle


<!-- tabs:start -->

#### **POST**

```
Example of submitting a payment offer
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


#### **Response**
```JSON
{
    "success": true,
    "data": {
        "success": true,
        "data": {
            "merkleTree": {
                "root": "0x0d79a0c4c168a32ba4cb91cfa3122e5155e90553bb6844ebf846ecda3d39adda",
                "proofs": [
                    [
                        "0x9216d636ef03b1ccc7f95e7788aaa0255733d8e2cea1fb7a927ffca12fae5cab",
                        "0x79085ef4def6e3af8225afd6574ce42996c03b30711d1722bd929f2823301019",
                        "0x76be02b3b1381d803af80f30bc8fba119916f37594b220fa89bf4cbac543221c"
                    ],
                    [
                        "0x65f2e7ca301f3547338f0a664476e54ead80be9fd3947e121c5142cb70f7e5b7",
                        "0x79085ef4def6e3af8225afd6574ce42996c03b30711d1722bd929f2823301019",
                        "0x76be02b3b1381d803af80f30bc8fba119916f37594b220fa89bf4cbac543221c"
                    ],
                    [
                        "0x7c0bd9c53414bafd99fbbeda7b77c95c2feae35f84bc19f1d66bd8e469572284",
                        "0xeb7a4cc399c7510a9fe6becf8e43d3081c62c56dfd793f43b0a529b373fa6592",
                        "0x76be02b3b1381d803af80f30bc8fba119916f37594b220fa89bf4cbac543221c"
                    ],
                    [
                        "0xa877715eaa827a908422dcf43db1dd3d71b14c172106d8005f851369c31c2241",
                        "0xeb7a4cc399c7510a9fe6becf8e43d3081c62c56dfd793f43b0a529b373fa6592",
                        "0x76be02b3b1381d803af80f30bc8fba119916f37594b220fa89bf4cbac543221c"
                    ],
                    [
                        "0x760963223a33c5f73abc2a3418a464e06b595259bf4390e8f85ee476dad03312"
                    ]
                ]
            }
        }
    }
}

```

<!-- tabs:end -->





```js
/*
* @notice: only lender can cancel their offer usin their nonces that they use to sign the loan deal
* @param nonce uint256 ID comes from the backend and it can be used  once   
* @param _lender wallet address 
*/

await swopXLanding.connect(lender).cancel(nonce, _lender);

```

#### Calculated fee:

A calculated fee for a payment is a fee that is calculated based on the amount of the payment.

For example, a payment service might charge a fee of 3% + $0.30 for each payment made. 

```js 

/*
* @notice: this function only runs before the submit function and to calcalte the fees. It runs by the borrower.

* @param lendingAmount uint256 is total lending amount without the interest 
*/
let amountfee;
await swopXLanding.connect(borrower).calculatedFee(lendingAmount).then( res => {
    amountfee = res;
});



/*
* @notice: this function runs before 
    - make payment, make pre payment, and default functions
to get calculate interest fee before make a payment
* On the backend  there is two events needs to be ran
* @param termInterest uint256 is a the interest value from a json file 
*/
let feeInterest ;
await swopXLanding.calculatedInterestFee(termInterest).then(res=>{
    feeInterest = res;
});

```

#### calculate interest fee


Interest is a fee that is charged by a lender to a borrower for the use of money. It is usually expressed as a percentage of the principal amount borrowed and is typically paid periodically, such as monthly or annually. Interest is typically charged on loans, such as mortgages, car loans, and credit card balances, and is used by lenders to compensate them for the risk and cost of lending money. The rate of interest can vary widely depending on a variety of factors, including the creditworthiness of the borrower, the terms of the loan, and market conditions.



The formula for calculating the interest on a loan is:

![formula](./BP.png)


Where:

* n is the number of period time, Time is the length of time over which the interest is being calculated, usually expressed in years.
* m is a factory of the time; for example 1 year is 12 months, monthly is 1 month.
* bp is the buy power


For example, if you borrow $10,000 at an interest rate of 5% per year for a period of 3 years, the interest would be calculated as follows:


It's important to note that this is just a basic formula for calculating simple interest. There are many other factors that can affect the interest calculation, such as compounding frequency, fees, and different types of loan structures, such as adjustable-rate mortgages.


```js
  useEffect(() => {
    if ((bp, apy, numPay)) {
      var arr = [];
      let sum = 0;
      let incrementDate =
        loanType === 12 ? "months" : loanType === 4 ? "quarters" : "months";
      for (let i = 0; i < numPay; i++) {
        let interest =
          ((Math.pow(1 + parseFloat(apy) / 100, numPay / loanType) - 1) /
            parseFloat(numPay)) *
          parseFloat(bp);
        let total = interest * parseInt(numPay);
        console.log(total.toFixed(18));
        setTotalInterest(parseFloat(total)?.toFixed(18));
        // * parseFloat(bp)
        if (i === numPay - 1) {
          arr.push([
            moment(startDate.getTime())
              .add(loanType === 2 ? (i + 1) * 6 : i + 1, incrementDate)
              .unix(),
            interest,
            parseFloat(bp),
            interest + parseFloat(bp),
          ]);
        } else {
          arr.push([
            moment(startDate.getTime())
              .add(loanType === 2 ? (i + 1) * 6 : i + 1, incrementDate)
              .unix(),
            interest,
            0,
            interest,
          ]);
        }
        sum += arr[i][3];
      }
      setSum(sum);
      setPaymentValues(arr);
    }
  }, [bp, apy, numPay, startDate, loanType]);


```


### Submit Lender Request

https://external-dev.swopx.com/execute/swopx/listings/lend


<!-- tabs:start -->

#### **POST**

```
{
    "borrowingID": "62",
    "lenderClientID": "6154",
    "lenderAddress": "0xlender",
    "signature": "sig2",
    "data": {
        "randomFieldLender": "randomValueLender"
    }
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

### Default

If the borrower does not pay the payment, the lender can claim or redeem the NFT.

```js
/*
* @notice: lender can run the defaultAsset func if the borrower didn't make pay of current term, the lender needs to pay the interest fee in order to receive the NFT. 
* @param nftreceipt/_counterId uint256 is the main id of the lending receipt. 
* @param _counterId/ uint256 each term to pay the pre payment 
* @param loanTimestampLoanPayment uint256 is an array of the current term timestamp , and payment loan
* @param preLoanTimes uint256 is an array of the timestamp of the 0 index term
* @param fee_ uint256 is the interest fees that need to be paid by the lender
* @param proof bytes of the current _term 
*/
const defaultAsset = await swopXLanding.connect(lender).
defaultAsset(_counterId, loanTimestampLoanPayment, fee_,proof);
await defaultAsset.wait();

```


### Extend Time

In order to extend the time lender has to agree with borrower and this will renew the root


https://external-dev.swopx.com/execute/swopx/listings/extend


<!-- tabs:start -->

#### **POST**

```
{
    "borrowingID": "625d7",
    "clientID": "61547b",
    "signature": "sig009000",
    "nonce": "1",
    "data": {
        "rrnr": "dfsdsf",
        "loanAPY": "52%",
        "loanType": "type"
    }
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


```js

/*
* @notice:  borrower needs to submit the lender new proof to extend the time with a new timestamps and payment intereset 
            the offeredTime value has to be not expired with a current time.
* @param nonces uint256 is an array of borrower's nonce and lender's nonce.
* @param _counterId uint256 Id of the receipt NFT
* @param loanInterest uint256 new total insterst 
* @param currentTerm_ uint256 the cuurent term that already paid 
* @param _offeredTime uint256  it has to be greater then current timestamp otherwise it will be expired offer
* @param gist bytes32 new root
* @param signatures bytes32 aare an array of borrower's sig and the lender's sig
*/
const extendTheTime = await swopXLanding.connect(borrower).extendTheTime(nonces [2], _counterId,  loanInterest,  currentTerm_,  _offeredTime,  gist ,
signatures [2]) 

```