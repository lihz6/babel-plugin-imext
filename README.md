- project/
  - getUserInfo.js
  - getUserInfo.test.js
  - index.js

index.js:
```js
import getUserInfo from './getUserInfo';
```
When environment variable `IMEXT` is set to `test`, `getUserInfo` is actually imported from `getUserInfo.test.js` instead of `getUserInfo.js`.