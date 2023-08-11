const NFTs = []

function mintNFT (name, eyecolor, shirttype, bling) {
   const NFT = {
      "Name": name,
      "EyeColor": eyecolor,
      "ShirtType": shirttype,
      "Bling": bling
   }
   NFTs.push(NFT);
   console.log("Minted: "+ name);

}

function listNFTs () {
   for(let i = 0; i < NFTs.length; i++) {
      console.log("ID: " + (i + i));
      console.log("Name: " + NFTs[i].Name);
      console.log("Eye Color: " + NFTs[i].EyeColor);
      console.log("Shirt Type: " + NFTs[i].ShirtType);
      console.log("Bling: " + NFTs[i].Bling);
   }

}

function getTotalSupply() {
   console.log(NFTs.length);
}

mintNFT ("Cross", "Red", "LongSleeve", "Rings");
listNFTs();
getTotalSupply();
