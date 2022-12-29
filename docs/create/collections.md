#### Owner's collection


The address of the contract you need to interect with is

```
0x
```

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