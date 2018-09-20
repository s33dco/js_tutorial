$ npm install --global s33dco-palindrome
$ vim test.js
let Phrase = require("s33dco-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true