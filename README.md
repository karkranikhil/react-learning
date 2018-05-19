# React learning

## Yarn
1)Yarn is a Dependency manager and its really fast because yarn do package installation tasks in parallel.<br/>
2)Every time a module is added, Yarn creates (or updates) a yarn.lock file. This way you can guarantee another machine installs the exact same package, while still having a range of allowed versions defined in package.json.<br/>
3)Yarn does some better caching<br/>

## If you haven't installed yarn, install it via

  npm intall --global yarn


# chapter 1
  1)index.html setup<br/>
  2)basic component creation<br/>
  3)props and attributes<br/>

#chapter 2
    1)Tooling
        # a)prettier 
        install it via "yarn global add prettier"

         Below command help you to do the prettify the code
         
         prettier --single-quote  --print-width=120 --write ClientApp.jsx 

         or

         prettier --write --single-quote  --print-width=120 --parse=flow --tab-width=2 "js/**/*.{js,jsx}" 
        
         we have configured it in package.json so run below command will perform the same
         
          "yarn format"
          
    2)Eslisnt
    
    we are using airbnb linting rules.we have configured it in package.json so run below command will perform the same    
    
    "yarn lint"
    
    3)Webpack & Babel
     
     transformation from jsx to js done by babel
     below command generates the bundle.js in public folder manually
     
     ./node_modules/.bin/webpack js/ClientApp.jsx public/bundle.js
     
     if we configure webpack.config.js it will automatically bundle the code we don't need to specify the file name
     
    ./node_modules/.bin/webpack
    
     we have configured it in package.json so run below command will perform the webpack and continously watch the changes
     
     yarn watch
    