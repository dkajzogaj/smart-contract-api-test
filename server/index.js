const express = require('express');
const { ethers } = require('ethers');
const router = express.Router();

router.get('/DavidApiTest', async (req, res) => {
  try {
    
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth/33985f09ea7ea61d7e8aae4da2f5ebce63b3495eee9c8528980edcd162b46708');
    
    const erc20Abi = [
      "function name() view returns (string)",
      "function symbol() view returns (string)",
      "function totalSupply() view returns (uint256)"
    ];

    const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
    const daiContract = new ethers.Contract(daiAddress, erc20Abi, provider);

    const name = await daiContract.name();
    const symbol = await daiContract.symbol();
    const totalSupply = await daiContract.totalSupply();

    console.log(`Token name: ${name}`);
    console.log(`Token symbol: ${symbol}`);
    console.log(`Total supply: ${ethers.utils.formatUnits(totalSupply, 18)} ${symbol}`);

    res.send('Smart contract data fetched. Check console for output.');

  } catch (error) {

    console.error('Error fetching contract data:', error);
    res.status(500).send('Failed to fetch smart contract data.');

  }
});

module.exports = router;
