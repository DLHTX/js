# @thirdweb-dev/storage

## 1.1.9

### Patch Changes

- [#1338](https://github.com/thirdweb-dev/js/pull/1338) [`8dd7540c`](https://github.com/thirdweb-dev/js/commit/8dd7540c455aa70534f6d29986537592fd12169b) Thanks [@jnsdls](https://github.com/jnsdls)! - no longer check if file exists on gateway before uploading, always upload

## 1.1.8

### Patch Changes

- [#1314](https://github.com/thirdweb-dev/js/pull/1314) [`db68bd04`](https://github.com/thirdweb-dev/js/commit/db68bd04cd8bb3ee6bff051d1d5b5a872353fde0) Thanks [@iketw](https://github.com/iketw)! - Passes API key to thirdweb storage ipfs uploader

  If you want to use thirdweb's storage upload services you need to pass an API key.
  You can grab one from: https://thirdweb.com/dashboard/settings

  If using ThirdwebStorage directly:

  ```javascript
  new ThirdwebStorage({
      apiKey: <yourApiKey>,
  });
  ```

## 1.1.7

### Patch Changes

- [#1309](https://github.com/thirdweb-dev/js/pull/1309) [`4961b597`](https://github.com/thirdweb-dev/js/commit/4961b597a098dae0a4eff01a9ef268a65fe1a352) Thanks [@jnsdls](https://github.com/jnsdls)! - unblock storage domains

## 1.1.6

### Patch Changes

- [#1286](https://github.com/thirdweb-dev/js/pull/1286) [`2d088d36`](https://github.com/thirdweb-dev/js/commit/2d088d367ca54233836dc69712fd411ab7924205) Thanks [@jnsdls](https://github.com/jnsdls)! - fix double `//` case

- [#1278](https://github.com/thirdweb-dev/js/pull/1278) [`8a389f12`](https://github.com/thirdweb-dev/js/commit/8a389f1295d2bf726059997ea0ca10cf0424f2a2) Thanks [@jnsdls](https://github.com/jnsdls)! - updated various dependencies

- [#1232](https://github.com/thirdweb-dev/js/pull/1232) [`9daf0449`](https://github.com/thirdweb-dev/js/commit/9daf044926bf995ac8998929dbeca548c5eb8561) Thanks [@nessup](https://github.com/nessup)! - Switch over to the new `ipfs.thirdweb-storage.com` public gateway.
  Better fallback logic for if a gateway is down.
  Faster loading of files from the default gateway by skipping a roundtrip to redirect.

- [#1285](https://github.com/thirdweb-dev/js/pull/1285) [`546353a4`](https://github.com/thirdweb-dev/js/commit/546353a479c11533818ef917c0f6b4d6f8f69872) Thanks [@jnsdls](https://github.com/jnsdls)! - add additional fallback gateways

- [#1287](https://github.com/thirdweb-dev/js/pull/1287) [`0135a779`](https://github.com/thirdweb-dev/js/commit/0135a7790cf2acde6b701cb41ea10dd311da5ec3) Thanks [@jnsdls](https://github.com/jnsdls)! - fix uploaded-check

## 1.1.5

### Patch Changes

- [#1246](https://github.com/thirdweb-dev/js/pull/1246) [`0c5b03b8`](https://github.com/thirdweb-dev/js/commit/0c5b03b8d6cc6a4e69bb2a4647d3626e69f1283c) Thanks [@nessup](https://github.com/nessup)! - Remove the ipfs-2 gateway due to connectivity errors that seem to happen with certain ISPs

## 1.1.4

### Patch Changes

- [#1098](https://github.com/thirdweb-dev/js/pull/1098) [`67450789`](https://github.com/thirdweb-dev/js/commit/67450789473b6008b86453ee4f4c7b99461223a6) Thanks [@MananTank](https://github.com/MananTank)! - add sideEffects: false in package.json

## 1.1.3

### Patch Changes

- [#1037](https://github.com/thirdweb-dev/js/pull/1037) [`d5123044`](https://github.com/thirdweb-dev/js/commit/d51230441a097734be092c42b45dea07629e65fa) Thanks [@jnsdls](https://github.com/jnsdls)! - update ipfs gateways - add more fallbacks

## 1.1.2

### Patch Changes

- [#843](https://github.com/thirdweb-dev/js/pull/843) [`839fce1f`](https://github.com/thirdweb-dev/js/commit/839fce1f6f2747d6102033b26c292294e908f75d) Thanks [@jnsdls](https://github.com/jnsdls)! - uploads to IPFS should start significantly faster due to a change in the re-upload detection

## 1.1.1

### Patch Changes

- [#757](https://github.com/thirdweb-dev/js/pull/757) [`9ea43969`](https://github.com/thirdweb-dev/js/commit/9ea439692da94f84297bf6a9d04487a1cb74796d) Thanks [@iketw](https://github.com/iketw)! - switch to `thirdwebcdn.com` for default IPFS gateway

- [#702](https://github.com/thirdweb-dev/js/pull/702) [`33d1cc7f`](https://github.com/thirdweb-dev/js/commit/33d1cc7f92cd982e9e55130472c0006bb999f682) Thanks [@jnsdls](https://github.com/jnsdls)! - enable `browser` export

## 1.1.0

### Minor Changes

- [#637](https://github.com/thirdweb-dev/js/pull/637) [`8a8a37f6`](https://github.com/thirdweb-dev/js/commit/8a8a37f6d3468b2a9c9736834bc39a3eee4754f4) Thanks [@adam-maj](https://github.com/adam-maj)! - Pre-compute IPFS hashes before uploading

### Patch Changes

- [#644](https://github.com/thirdweb-dev/js/pull/644) [`63f552d7`](https://github.com/thirdweb-dev/js/commit/63f552d736a549532eb4d6a05cfe66a771b190b9) Thanks [@adam-maj](https://github.com/adam-maj)! - Update storage config to accept gatewayUrls

- [#648](https://github.com/thirdweb-dev/js/pull/648) [`fb346ffd`](https://github.com/thirdweb-dev/js/commit/fb346ffd45edf9f50cc8c68a0c318eee39a6d9c6) Thanks [@adam-maj](https://github.com/adam-maj)! - Send on progress event if already uploaded

- [#665](https://github.com/thirdweb-dev/js/pull/665) [`6ef52dc9`](https://github.com/thirdweb-dev/js/commit/6ef52dc916251d72416ba5a8b63b428770f54e75) Thanks [@shift4id](https://github.com/shift4id)! - Fix spelling throughout all packages

- [#646](https://github.com/thirdweb-dev/js/pull/646) [`cc7ce8b1`](https://github.com/thirdweb-dev/js/commit/cc7ce8b1e8f73288b5c00a29e0000bea9867e8c1) Thanks [@adam-maj](https://github.com/adam-maj)! - Enable CID prediction for File type

- [#645](https://github.com/thirdweb-dev/js/pull/645) [`29c1cf7e`](https://github.com/thirdweb-dev/js/commit/29c1cf7eff60221d05e87060f3c96a83343218e6) Thanks [@adam-maj](https://github.com/adam-maj)! - Make cid checking non-blocking

## 1.0.10

### Patch Changes

- [#601](https://github.com/thirdweb-dev/js/pull/601) [`66cf1fb`](https://github.com/thirdweb-dev/js/commit/66cf1fb5c2e8deb486543ee028d786bb8eef6c19) Thanks [@jnsdls](https://github.com/jnsdls)! - upgrade dependencies

## 1.0.9

### Patch Changes

- [#597](https://github.com/thirdweb-dev/js/pull/597) [`300fe4a`](https://github.com/thirdweb-dev/js/commit/300fe4a933f83ac59f89ff019f173cdfc6a2cdff) Thanks [@adam-maj](https://github.com/adam-maj)! - Update storage to take metadata

## 1.0.8

### Patch Changes

- [#553](https://github.com/thirdweb-dev/js/pull/553) [`76d219e`](https://github.com/thirdweb-dev/js/commit/76d219e6bea1496b45623b3081152854ce1eaa6e) Thanks [@jnsdls](https://github.com/jnsdls)! - force release

## 1.0.7

### Patch Changes

- [#474](https://github.com/thirdweb-dev/js/pull/474) [`1686fb4`](https://github.com/thirdweb-dev/js/commit/1686fb4b2c0d93004623bc02fcb0e32233fe582c) Thanks [@kumaryash90](https://github.com/kumaryash90)! - Edit mock uploader, downloader

## 1.0.6

### Patch Changes

- [#327](https://github.com/thirdweb-dev/js/pull/327) [`ef27aad`](https://github.com/thirdweb-dev/js/commit/ef27aad0aafc4577e85f44dc77dfbe880bd239b5) Thanks [@jnsdls](https://github.com/jnsdls)! - enable e2e testing

## 1.0.5

### Patch Changes

- [#324](https://github.com/thirdweb-dev/js/pull/324) [`87fd6ab`](https://github.com/thirdweb-dev/js/commit/87fd6ab14e1a67a1b12e72bd397fb21769537307) Thanks [@adam-maj](https://github.com/adam-maj)! - Update storage download

## 1.0.4

### Patch Changes

- [#226](https://github.com/thirdweb-dev/js/pull/226) [`f2a6211`](https://github.com/thirdweb-dev/js/commit/f2a62110c43e7b8f35c86a197730e732f8fcc786) Thanks [@jnsdls](https://github.com/jnsdls)! - add exports field

## 1.0.3

### Patch Changes

- [#192](https://github.com/thirdweb-dev/js/pull/192) [`24f66e3`](https://github.com/thirdweb-dev/js/commit/24f66e38c256f7bd69341b92ba30bd35d14b1caa) Thanks [@adam-maj](https://github.com/adam-maj)! - Use XHR for upload

## 1.0.2

### Patch Changes

- [#190](https://github.com/thirdweb-dev/js/pull/190) [`493ebf0`](https://github.com/thirdweb-dev/js/commit/493ebf032e82a66006b3d5b68f8eeff1973fc97a) Thanks [@adam-maj](https://github.com/adam-maj)! - Return URIs with gateway URLs

- [#163](https://github.com/thirdweb-dev/js/pull/163) [`b54f95d`](https://github.com/thirdweb-dev/js/commit/b54f95dc906928ff2f9251748f254a16fe1f2cee) Thanks [@adam-maj](https://github.com/adam-maj)! - Use independent JSON types by package

- [#156](https://github.com/thirdweb-dev/js/pull/156) [`cfe8bba`](https://github.com/thirdweb-dev/js/commit/cfe8bbafa464a9e768e6d31fbd9dd9760fdced16) Thanks [@adam-maj](https://github.com/adam-maj)! - Add resolveScheme method to storage

- [#180](https://github.com/thirdweb-dev/js/pull/180) [`f4074dd`](https://github.com/thirdweb-dev/js/commit/f4074ddadc9fb6e18dcc9251a936376c3f4a9144) Thanks [@adam-maj](https://github.com/adam-maj)! - Replace schemes after files are uploaded

- [#189](https://github.com/thirdweb-dev/js/pull/189) [`d608cea`](https://github.com/thirdweb-dev/js/commit/d608cea1977dd418b6892c1c9368b06b17a9748b) Thanks [@adam-maj](https://github.com/adam-maj)! - Pass through options

- [#183](https://github.com/thirdweb-dev/js/pull/183) [`3580182`](https://github.com/thirdweb-dev/js/commit/3580182fa903ed7a661444f0daa160c330e62ec5) Thanks [@jnsdls](https://github.com/jnsdls)! - allow uploading of the same file with the same file name

- [#185](https://github.com/thirdweb-dev/js/pull/185) [`0ccbca7`](https://github.com/thirdweb-dev/js/commit/0ccbca78dce38926ccfd5c902c06adff2f440f42) Thanks [@jnsdls](https://github.com/jnsdls)! - url encode filenames

- [#178](https://github.com/thirdweb-dev/js/pull/178) [`45a400f`](https://github.com/thirdweb-dev/js/commit/45a400fd9287582bfb5f21ab2cb2d7a4332434c5) Thanks [@adam-maj](https://github.com/adam-maj)! - Update API for instantiating storage

## 1.0.1

### Patch Changes

- [#148](https://github.com/thirdweb-dev/js/pull/148) [`964add6`](https://github.com/thirdweb-dev/js/commit/964add6f205577298b8f4b9ce7298e5bf09e88e7) Thanks [@joaquim-verges](https://github.com/joaquim-verges)! - Fix deploy/release CLI uploads

## 1.0.0

### Major Changes

- [#139](https://github.com/thirdweb-dev/js/pull/139) [`57432d2`](https://github.com/thirdweb-dev/js/commit/57432d21c4c9e880a36c61f4988c60af61ac9d44) Thanks [@adam-maj](https://github.com/adam-maj)! - Upgrade to initial storage SDK with IPFS support

## 0.2.8

### Patch Changes

- [#63](https://github.com/thirdweb-dev/js/pull/63) [`f2bdf47`](https://github.com/thirdweb-dev/js/commit/f2bdf47b4fd06433be367c9aac6d11a8dbbf1a1a) Thanks [@joaquim-verges](https://github.com/joaquim-verges)! - Add storage option to include gateway url in uploaded metadata

## 0.2.7

### Patch Changes

- [#61](https://github.com/thirdweb-dev/js/pull/61) [`3287c2b`](https://github.com/thirdweb-dev/js/commit/3287c2b0f233332fe4a095f973deed8efab91db6) Thanks [@jnsdls](https://github.com/jnsdls)! - fix versions in dependencies before releasing stable

## 0.2.6

### Patch Changes

- [`5644ccd`](https://github.com/thirdweb-dev/js/commit/5644ccd3ee2ff330e4e5840d3266033376750117) Thanks [@jnsdls](https://github.com/jnsdls)! - bump versions again

## 0.2.5

### Patch Changes

- [`091f175`](https://github.com/thirdweb-dev/js/commit/091f1758604d40e825ea28a13c2699d67bc75d8c) Thanks [@jnsdls](https://github.com/jnsdls)! - release-all-packages

## 0.2.4

### Patch Changes

- [#53](https://github.com/thirdweb-dev/js/pull/53) [`924247a`](https://github.com/thirdweb-dev/js/commit/924247a8ed5ef1867dccfad9479b00f71795ebf6) Thanks [@jnsdls](https://github.com/jnsdls)! - bump version

## 0.2.3

### Patch Changes

- [#45](https://github.com/thirdweb-dev/js/pull/45) [`ed639d6`](https://github.com/thirdweb-dev/js/commit/ed639d659d9d746321fb8858212d22cc16d9cd19) Thanks [@jnsdls](https://github.com/jnsdls)! - switch back to preconstruct for building

- [#46](https://github.com/thirdweb-dev/js/pull/46) [`349b5c1`](https://github.com/thirdweb-dev/js/commit/349b5c1e028a06616d40de84257fd8d1cf05df83) Thanks [@jnsdls](https://github.com/jnsdls)! - imrprove babel & tsconfig settings

- [#42](https://github.com/thirdweb-dev/js/pull/42) [`46ad691`](https://github.com/thirdweb-dev/js/commit/46ad691a1636dbc7915ade22067ccfa1d39f7851) Thanks [@jnsdls](https://github.com/jnsdls)! - switch build to tsup

## 0.2.2

### Patch Changes

- 02c2b52: force version

## 0.2.1

### Patch Changes

- b58361e: explicitly use cross-fetch for fetch calls

## 0.2.0

### Minor Changes

- 3abe26c: initialze monorepo packages

## 0.1.1

### Patch Changes

- 86e3b58: include additional file and buffer related helpers in storage package
