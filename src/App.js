import React, { useState } from 'react';
import './App.css';

function RoadmapItem({ quarter, milestone }) {
  return (
    <li>
      {quarter}: {milestone}
    </li>
  );
}

function BuyStep({ step, instruction }) {
  return (
    <li>
      <strong>Step {step}:</strong> {instruction}
    </li>
  );
}

function UniswapBuyButton({ contractAddress }) {
  const uniswapBuyLink = `https://app.uniswap.org/#/swap?outputCurrency=${contractAddress}`;

  return (
    <a
      href={uniswapBuyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="uniswap-buy-button"
    >
      Buy on Uniswap
    </a>
  );
}

function App() {
  const [roadmap] = useState([
    {
      quarter: 'Q1 2023',
      milestone: 'Stealth Launch - DogeMoon silently takes over the crypto world!'
    },
    {
      quarter: 'Q2 2023',
      milestone: 'DogeMoon NFT Marketplace - Trade memes for DogeMoon and become a meme lord!'
    },
    {
      quarter: 'Q3 2023',
      milestone: 'DogeMoon Mobile App - Manage your DogeMoon empire from the palm of your hand!'
    },
    {
      quarter: 'Q4 2023',
      milestone: 'DogeMoon Theme Park - Where Memes Come to Life and dreams come true!'
    },
  ]);

  const [buySteps] = useState([
    {
      step: 1,
      instruction: 'Install MetaMask or another Ethereum wallet (trust us, it\'s worth it!)'
    },
    {
      step: 2,
      instruction: 'Fund your wallet with Ethereum (ETH) - fuel for your rocket to the moon!'
    },
    {
      step: 3,
      instruction: 'Visit the Uniswap exchange website - it\'s like eBay, but for tokens!'
    },
    {
      step: 4,
      instruction: 'Connect your wallet to Uniswap - don\'t worry, they\'re good friends!'
    },
    {
      step: 5,
      instruction: 'Enter the DogeMoon smart contract address - the secret code for moon access!'
    },
    {
      step: 6,
      instruction: 'Set your slippage tolerance and swap ETH for DogeMoon - time to blast off!'
    },
  ]);

  const contractAddress = '0x1234567890abcdef1234567890abcdef12345678';

  return (
    <div className="container">
      <h1>Welcome to DogeMoon - Where Memes Meet Money! 🐶🚀</h1>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngimages.in%2Fwelcome%2Fquery%2FMeme&psig=AOvVaw3mOZbAXCCoEiEDBE3SIBEa&ust=1683542487973000&source=images&cd=vfe&ved=https://www.pngimages.in/uploads/png-webp/2023/February-2023/laugh_meme_face_Transparent_Background.webp" alt="DogeMoon Logo" />
      <p>
        Did you know that laughter can send you to the moon? DogeMoon is here to prove it! We're on a mission to make crypto fun, and we're taking you along for the ride! 🚀
      </p>

      <h2>Tokenomics - Moon Fuel for HODLers! 🌕</h2>
      <p>
        Total Supply: 1,000,000,000,000,000 DogeMoon<br />
       
        Redistribution: 5% to all HODLers per transaction (Sharing is caring, after all!)<br />
Liquidity: 3% locked forever (We're in this for the long haul!)<br />
Marketing: 2% for promoting DogeMoon (Let's spread the laughter! 😄)<br />
</p>
<h3>Roadmap - A Journey Filled with Laughter! 🐾</h3>
  <ul className="roadmap">
    {roadmap.map((item, index) => (
      <RoadmapItem key={index} {...item} />
    ))}
  </ul>

  <h2>How to Join the DogeMoon Party! 🚀💰</h2>
  <ul className="buy-steps">
    {buySteps.map((step, index) => (
      <BuyStep key={index} {...step} />
    ))}
  </ul>
  <p>
    <strong>Smart Contract Address:</strong><br />
    {contractAddress}
  </p>
  <p>
    <UniswapBuyButton contractAddress={contractAddress} />
  </p>

  <h2>Why Choose DogeMoon? 🤔</h2>
  <p>
    DogeMoon is more than just a memecoin. It's a celebration of the fun, light-hearted side of crypto that brings people together. We're building a community that laughs together, grows together, and flies to the moon together! 🚀
  </p>

  <h3>Join the DogeMoon Community Today! 🌎</h3>
  <p>
    Twitter: <a href="https://twitter.com/DogeMoonToken">@DogeMoonToken</a><br />
    Telegram: <a href="https://t.me/DogeMoonCommunity">DogeMoon Community</a><br />
    Discord: <a href="https://discord.gg/DogeMoon">DogeMoon Server</a>
  </p>
</div>
);
}

export default App;