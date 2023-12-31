// create a variable to hold your NFT's
const NFTs = []
// variables that allows the user to input their names, shirt type, bling 

var userName = prompt("Enter your Name: "); 

var userShirtType = prompt("Pick a Shirt Type (T-Shirt, Long Sleeve, Hoodie): "); 

var userAccessory = prompt("Pick an Accessory(Gold Chains, Diamond Ear-Piercings, Silver Rings): "); 

// Divider between the input and output
console.log("--------------------------------") 

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, shirttype, accessory) {
   const NFT = {
      "Name": name,
      "ShirtType": shirttype,
      "Accessory": accessory
   }
   NFTs.push(NFT);
   console.log("Minted: "+ name); 

}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i < NFTs.length; i++) {
      console.log("ID: " + (i + i));
      console.log("Name: " + NFTs[i].Name);
      console.log("Shirt Type: " + NFTs[i].ShirtType);
      console.log("Accessory: " + NFTs[i].Accessory);
   } 

} 

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log(NFTs.length);
}


// call your functions below this line 

mintNFT (userName, userShirtType, userAccessory);
listNFTs();
getTotalSupply();
