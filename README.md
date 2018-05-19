# React learning

## Yarn
1)Yarn is a Dependency manager and its really fast because yarn do package installation tasks in parallel.<br/>
2)Every time a module is added, Yarn creates (or updates) a yarn.lock file. This way you can guarantee another machine installs the exact same package, while still having a range of allowed versions defined in package.json.<br/>
3)Yarn does some better caching<br/>

## If you haven't installed yarn, install it via

  npm install --global yarn


# chapter 1
  1)index.html setup<br/>
  2)basic component creation<br/>
  3)props and attributes<br/>

#chapter 2
### Tooling
##### 1) Prettier
<p>install it via </p>
     
    "yarn global add prettier"
<p>Below command help you to do the prettify the code</p>

    prettier --single-quote  --print-width=120 --write ClientApp.jsx 
    
             or
    
    prettier --write --single-quote  --print-width=120 --parse=flow --tab-width=2 "js/**/*.{js,jsx}"     
        
<p>we have configured it in package.json so run below command will perform the same</p>        
    
     "yarn format"
         
##### 2) Eslisnt
<p>we are using airbnb linting rules.we have configured it in package.json so run below command will perform the same </p>
     
    "yarn lint"

##### 3) Webpack & Babel
<p>transformation from jsx to js done by babel</p>
<p>below command generates the bundle.js in public folder manually</p>
     
    "./node_modules/.bin/webpack js/ClientApp.jsx public/bundle.js"
<p>if we configure webpack.config.js it will automatically bundle the code we don't need to specify the file name</p>

    ./node_modules/.bin/webpack 
        
<p>we have configured it in package.json so run below command will perform the webpack and continously watch the changes</p>        
    
     "yarn watch"    

     
     
     
     
     
     
     
     
    
    
     
     
     
    