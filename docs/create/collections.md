#### Owner's collection

__Create Collection__ 

* Submit Collection Request

The address of the contract you need to interect with is

```
0x
```


```API
POST /listings/collections/create

```


https://external-dev.swopx.com/execute/swopx/listings/collections/create

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `clientID` | `string` | **Required**. The database _id of the collection owner) |
| `collectionName` | `string` | **Required**. The name of the collection |
| `collectionDescription` | `string` | The description of the collection |
| `collectionSymbol` | `string` |  **Required**. The symbol of the collection |
| `collectionAddress` | `string` | **Required**. NFT collection address |
| `chainID` | `string` | **Required**. Chain id of the network |

| `ownerAddress` | `string` | **Required**. The address of the owner collection |
| `publicSaleInfo` | `string` | **Required**. Can be an object with arbitrary data, that’s where you can store start time, duration |
| `totalSupply` | `string` |  Total supply of the collection |
| `maxTokensPerWallet` | `string` |  Max tokens for one address to buy |
| `collectionIconImage` | `string` |  An icon for the collection |
| `collectionCoverImage` | `string` |  A cover for the collection |
| `whitelistedWallets` | `string` |  A list of wallet addresses. This is if you want to have a private sale. As long as at least one whitelisted wallet is provided, a merkle tree root with proofs will be generated and stored in the whitelist |


<!-- tabs:start -->

#### **POST**

```
Example of submitting a request 
{
    "clientID": "61547e1de4e07643b12e6a15",
    "collectionName": "Coll Name",
    "collectionDescription": "Test Description 1",
    "collectionSymbol": "FFF",
    "collectionAddress": "0xfff",
    "chainID": "1",
    "ownerAddress": "0xABCD",
    "publicSaleInfo": {},
    "totalSupply": 777,
    "maxTokensPerWallet": 10000,
    "collectionIconImage": "ggg",
    "collectionCoverImage": "tttt",
    "whitelistedWallets": ["0x4b43246728B64a75A4c85A290cd32fE1F2aAef3c","0x36C6A0793F10FaC5D98d851E8bEc40Aa7BB98FB3"]
}
```


#### **Response**

```
markle tree and root
```

<!-- tabs:end -->


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

#### Manage Collection by the Owne

__Updating NFT Collection__

```API
POST /listings/collections/update/whitelist
```

```
    /*
    * @notice: update root function for replacing the old root 
    * @param _contract address is a contract address  
    * @param _mode bool true/ false 
    */
    function resetRoot(bytes32 merkleroot) external 
```

* Generating Merkle Tree Root
Replaces previously stored whitelisted wallets with new ones, regenerates markle tree and root

<!-- tabs:start -->

#### **POST**

```
Example of submitting a request 
{
    "collectionID": "630788d039bc8726aa119427",
    "clientID": "61547e1de4e07643b12e6a15",
    "whitelistedWallets": ["0x4b43246728B64a75A4c85A290cd32fE1F2aAef3c"]
}
```


#### **Response**

```
markle tree and root
```

<!-- tabs:end -->



Adding a cryptocurancy contract address  

```
    /*
    * @notice: addToken function for adding cryptocurancy contract address 
    * @param _contract address is a contract address  
    * @param _mode bool true/ false 
    */
    function addToken(address _contract, bool _mode) external 
```

```
   /*
    * @notice: to set ERC20 token receiver
    * @param _admain address is a wallet address  
    */
    function setCollector(address _admain) external 
```

Withdraw ETH from the contract

```
    /*
    * @notice: only the admin can withdraw.
    */
    function withdraw() external
```

The collection creator can mint new NFTs from the collections

```
    /*
    * @notice: only the collection admain can mint 
    * @param numTokens uint256 is the number of tokens to be minited.
    */
    function mint(uint256 numTokens) external
```

The collection creator can set the base uri of the collections

```
    /*
    * @notice: only the collection admain change the base uri 
    * @param baseURI string is the uri in sting
    */
    function setURI(string calldata baseURI)
```

The collection creator can flip sale state (run/ stop)

```
    /*
    * @notice: to stop/run the sale 
    */
    function flipSaleState() external


```

Change the timestamp of the public sale timestamp

```
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