1. Setup the project: Create `package.json` file
    
    > npm init
    or
    npm init -y
    > 
2. Install a package
    
    > npm i write
    or`
    npm install write
    > 
3. If node_modules don't exists but package.json does
    
    > npm i
    This will install the dependencies mentioned inside package.json on its own
    > 

### INSTALLING EXPRESS JS

1. npm init -y
2. npm i express
3. WRITE code in `app.js`

```jsx
const express = require('express');
const app = express();

app.listen(4444);
```

1. Run the code via terminal
    
    > node app.js
    > 
2. To not restart server everytime we make changes to the code
use nodemon instead of node
    
    > npm i -g nodemon
    // -g means globally install karlo
    > 
3. If nodemon doesn't work and gives you the error
SETEXECUTION POLICY ERROR:
REFER: https://stackoverflow.com/questions/4647429/powershell-on-windows-7-set-executionpolicy-for-regular-users
    
    > Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    Run the above command inside powershell by running the application as run administrator
    > 
    
    OR
    

**sudo npm install -g nodemon**