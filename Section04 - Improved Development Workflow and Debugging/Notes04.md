# 43 - Understanding NPM Scripts

How to generate `package.json` file - use `npm init` for this

Adding own scripts ( such as ***start*** , ***start-server***)

# 44 - Installing 3rd party Packages  

packages can be install as *production* and *development* packages

`npm install packagename --save-dev`

# 45 - Global Features vs Core Modules vs Third-Party Modules

The last lectures contained important concepts about available Node.js features and how to unlock them.

You can basically differentiate between:

 - Global features: Keywords like const or function but also some global objects like process

 - Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

- Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

Global features are always available, you don't need to import them into the files where you want to use them.

Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

Example:

```Javascript
const fs = require('fs');
```

You can now use the fs object exported by the "fs" module.

Third-party Modules need to be installed (via npm install in the project folder) AND imported.

Example (which you don't need to understand yet - we'll cover this later in the course):

```Javascript
// In terminal/ command prompt
npm install --save express-session
// In code file (e.g. app.js)
const sessions = require('express-session');`
```

# 46 - Using Nodemon for Autorestarts

add `nodemon app.js` to start script

# 47 - Global and Local npm Packages

In the last lecture, we added `nodemon` as a local dependency to our project.

The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run `npm install` in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.

The attached course code snippets also are shared in that way, hence you need to run `npm install` in the extracted packages to be able to run my code!

I showed that `nodemon app.js` would not work in the terminal or command line because we don't use local dependencies there but global packages.

You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): `npm install -g nodemon` would do the trick. Specifically the `-g` flag ensures that the package gets added as a global package which you now can use anywhere on your machine, directly from inside the terminal or command prompt.

# 48 - Understanding different Error Types

- syntax errors
- Runtime errors
- Logical errors

# 49 - Finding and Fixing syntax errors

App will show some clue(In PROBLEMS tab), we have to do this manually

# 50 - Dealing with Runtime Errors

App will show some clue after run (In TERMINAL tab), we have to do this manually

# 51/52 - Business Errors / Using Debuggers
  
App will run correctly. But not behave as we need.

Can use `Debug -> Start Debugging -> Node Js` in Tabs. Then add Break points

can view more details in `Run and Debug` option in SideBar

# 53 - Restarting the Debugger Automatically After Editing our App

We can execute lines of our in DEBUG CONSOLE too

add `restart` and `runtimeExecutable` to launch.json to reatsrt the application automatically after debug

# 55 - Changing Variables in the Debug Console

Can change the values of variables while debugging

# 56 - Wrap up

More on debugging Node.js: https://nodejs.org/en/docs/guides/debugging-getting-started/

Debugging Node in Visual Studio Code: https://code.visualstudio.com/docs/nodejs/nodejs-debugging

![alt text](<SS/image 10.png>)