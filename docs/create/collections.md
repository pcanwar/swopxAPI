#### Owner's collection

__Create Collection__ 

* Submit Collection Request

The address of the contract you need to interect with is

```
0x
```


```API
POST listings/collections/create
```


https://external-dev.swopx.com/execute/swopx/listings/collections/create

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `borrowerClientID` | `string` | **Required**. the database _id of the user willing to borrow (a borrowerWalletID can be used instead with a wallet address of the user) |
| `borrowerAddress` | `string` | **Required**. borrower address |
| `chainID` | `string` | **Required**. chain id of the network |
| `collectionAddress` | `string` | **Required**. NFT collection address |
| `tokenID` | `string` | **Required**. NFT token ID |
| `data` | `string` |  Object value |





__To create a collection you need to provide:__

* The name and the symbol of tht collection.
* The owner's address of the collection 
* The max sypply of the collection 
* The private sale price in wei and start time stamp
* The public sale price in wei and start time stamp
* The owner's address of the collection 
* The max mint per address
* The base URI of the collection
* The root of the waiting list addresses of the private sale.


If there is a waiting list, the owner needs to submit a list of the addresses. 


```
    /*
    * @notice: this function runs for creating a collection
    * @param  name_symbol_ string is an array of name and symbol of the collection
    * @param  _admain address is the owner of the collection
    * @param  maxSypplyCollection_ uint256 is max sypply of the collection
    * @param  _privatePriceWei_startTime_ uint256 is an arry of the private price in Wei and private start time stamp 
    * @param  _publicPriceWei_publicstartTime_ uint256 is an arry of the public pricd in Wei and the public start time stamp 
    * @param maxMintPerAddress_ uint256 is how many a wallet address can mint 
    * @param baseURI string of the URI
    * @param merkleroot bytes32 is the root of the waiting list of the private sale.
    */
    function createCollection(string [2] calldata name_symbol_, address _admain, 
    uint256 maxSypplyCollection_, uint256 [2] calldata _privatePriceWei_startTime_, uint256 [2] calldata _publicPriceWei_publicstartTime_, 
    uint256 maxMintPerAddress_, string calldata baseURI, bytes32 merkleroot) external
```

__Manage Collection by the Owner__

```
    /*
    * @notice: addToken function for adding cryptocurancy contract address 
    * @param _contract address is a contract address  
    * @param _mode bool true/ false 
    */
    function addToken(address _contract, bool _mode) external 

   /*
    * @notice: to set ERC20 token receiver
    * @param _admain address is a wallet address  
    */
    function setCollector(address _admain) external 

    /*
    * @notice: update root function for replacing the old root 
    * @param _contract address is a contract address  
    * @param _mode bool true/ false 
    */
    function resetRoot(bytes32 merkleroot) external 

    /*
    * @notice: only the admin can withdraw.
    */
    function withdraw() external

    /*
    * @notice: only the collection admain can mint 
    * @param numTokens uint256 is the number of tokens to be minited.
    */
    function mint(uint256 numTokens) external

    /*
    * @notice: only the collection admain change the base uri 
    * @param baseURI string is the uri in sting
    */
    function setURI(string calldata baseURI)

    /*
    * @notice: to stop/run the sale 
    */
    function flipSaleState() external

    /*
    * @notice: this function runs if the owner would like to change the timestamp of the public sale timestamp
    * @param  publicstartTime_ uint256 is the public pricd in Wei and the public start time stamp 
    * @param maxMintPerAddress_ uint256 is how many a wallet address can mint 
    */
    function setPublicTimeSale(uint256 publicstartTime_, uint256 maxMintPerAddress_) external

```

__View Collections__

```
    /*
    * @notice: this function returns all nft collection address
    */
    function getAllCollection() view external returns(address [] memory list)

    /*
    * @notice: to get collection by Id returns collection address
    */
    function getCollection(uint256 _id) view external returns(address )

```

__Logs for interecting with contract__

```

    // StartCollectionLog event is called if there is a new collection
    event StartCollectionLog(address indexed collection, address owner, uint256 time, bool status);

    // SaleLog event is called if there is a sale
    event SaleLog(address indexed collection, uint256 tokens, uint256 fees);

    // CryptoLog  event is called in the add erc20 token 
    event CryptoLog(address contracts, bool isSupported);
    // CollectorLog event is the reciver address of the payment 

    event CollectorLog(address admain);

    // is sale active
    event ActiveLog(bool isActive);

    // if the root is updated
    event RootLog(bytes32 root);

    // MintLog event, the admin minting  
    event MintLog(address admain, uint256 tokenId);
    

```