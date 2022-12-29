

### Client:

An client 

```
/*
    * @notice: waiting list addresses can mint nft if theose addresses are belong to the root and the proof.
    * @param  account address is the wallet address in the array of the root.
    * @param _numTokens uint256 is the number of tokens to be minited.
    * @param proof bytes32 is proof of this account.
    */
    function whitelistSaleMint(address account, uint _numTokens, bytes32 [] calldata proof) 
```


```
    /*
    * @notice: public sale. ETH
    * @param _numTokens uint256 is the number of tokens to be minited.
    */
    function publicSaleMint(uint256 numTokens) payable
```

```

    /*
    * @notice: public sale. ERC20 token
    * @param _numTokens uint256 is the number of tokens to be minited.
    */
    function publicSaleMintCurrency(address paymentContract, uint256 numTokens) 

```