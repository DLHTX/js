import type { Chain } from "../src/types";
export default {
  "name": "Avalanche Fuji Testnet",
  "chain": "AVAX",
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png",
    "height": 512,
    "width": 512,
    "format": "png"
  },
  "rpc": [
    "https://avalanche-fuji.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://avalanche-fuji.infura.io/v3/${INFURA_API_KEY}",
    "https://api.avax-test.network/ext/bc/C/rpc",
    "https://avalanche-fuji-c-chain.publicnode.com"
  ],
  "faucets": [
    "https://faucet.avax.network/",
    "https://faucet.avax-test.network/"
  ],
  "nativeCurrency": {
    "name": "Avalanche",
    "symbol": "AVAX",
    "decimals": 18
  },
  "infoURL": "https://cchain.explorer.avax-test.network",
  "shortName": "Fuji",
  "chainId": 43113,
  "networkId": 1,
  "explorers": [
    {
      "name": "snowtrace",
      "url": "https://testnet.snowtrace.io",
      "standard": "EIP3091"
    }
  ],
  "testnet": true,
  "slug": "avalanche-fuji"
} as const satisfies Chain;