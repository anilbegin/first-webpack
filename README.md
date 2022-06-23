# trial-webpack
 a short initial introduction to webpack

// webpack - is a module bundler, its main purpose is to bundle Javascript files 
for usage in a browser

npm install webpack

'src' is default folder for webpack to look for the source code thats to be bundled
'index.js' is the default file that webpack looks out for,

'dist' is the default bundle folder generated on cmd.. 

'npx webpack'

'main.js' is the resultant bundled file thats generated inside 'dist' folder

ECMAscript latest version  is supported by webpack by default, so 'import' can be used instead of const.
eg: import tripleMe from './tripleMe' 
// instead of.. const tripleMe = require('./tripleMe')
also for exporting modules
eg: export default tripleMe
// instead of.. module.exports = tripleMe

dist/index.html is created by me just to check the OP we get from main.js
