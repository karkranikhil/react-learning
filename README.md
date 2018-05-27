# React learning

## Yarn
1)Yarn is a Dependency manager and its really fast because yarn do package installation tasks in parallel.<br/>
2)Every time a module is added, Yarn creates (or updates) a yarn.lock file. This way you can guarantee another machine installs the exact same package, while still having a range of allowed versions defined in package.json.<br/>
3)Yarn does some better caching<br/>

## If you haven't installed yarn, install it via

  npm install --global yarn


# Basic Setup
  1)index.html setup<br/>
  2)basic component creation<br/>
  3)props and attributes<br/>

# Tooling
##### 1) Prettier
<p>install it via </p>
     
    yarn global add prettier
<p>Below command help you to do the prettify the code</p>

    prettier --single-quote  --print-width=120 --write ClientApp.jsx 
    
             or
    
    prettier --write --single-quote  --print-width=120 --parse=flow --tab-width=2 "js/**/*.{js,jsx}"     
        
<p>we have configured it in package.json so run below command will perform the same</p>        
    
     yarn format
         
##### 2) Eslisnt
<p>we are using airbnb linting rules.we have configured it in package.json so run below command will perform the same </p>
     
    yarn lint

##### 3) Webpack & Babel
<p>transformation from jsx to js done by babel</p>
<p>below command generates the bundle.js in public folder manually</p>
     
    ./node_modules/.bin/webpack js/ClientApp.jsx public/bundle.js
<p>if we configure webpack.config.js it will automatically bundle the code we don't need to specify the file name</p>

    ./node_modules/.bin/webpack 
        
<p>we have configured it in package.json so run below command will perform the webpack and continously watch the changes</p>        
    
     yarn watch
<p>We have configured the webpack dev server</p>
    
    ./node_modules/.bin/webpack-dev-server"   
    
# Routing

##### 1)HashRouter
<p>A Router that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.</p>
<p>Hash history does not support location.key or location.state. </p>

    <HashRouter>
        <div className = 'app'>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/search" component={Search}/>
        </div>
      </HashRouter>

##### 1)BrowserRouter      
<p>A Router that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.</p>
        
    <BrowserRouter>
        <div className = 'app'>
          <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/search" component={Search}/>
          <Route component={FourOhFour}/>
          </Switch>
        </div>
      </BrowserRouter>
     
     
### Map()
<p>The map() method is used to apply a function on every element in an array. A new array is then returned.</p>     
<p>We used map to itrate over the JSON(preload.shows) and takeout each show name and display it inside h1 tag</p>     
     
     {preload.shows.map((show)=>(
           <h3>{show.title}</h3>
         ))}
     
     
     
 ### PropType
 
PropTypes exports a range of validators that can be used to make sure the data you receive is valid. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.
Below is the command to install the propTypes package.
        
    npm install --save prop-types
       
       
### ... Spread operator
It is used to split an array into a list of comma-separated values which can be used in various places such as function arguments or array matching.

        function addThreeNumbers(a, b, c) {
          return a + b + c;
        }
        
        let sampleArr = [1, 2, 3];
        console.log(addThreeNumbers(...sampleArr)); //6 
        
The spread operator can also be used with objects, though it is not a part of the ES6 spec, so you might need to use an extra plugin in your transpiler for it, or be careful with its browser support.
    
        let obj1 = {a: 1, b: 2, c: 3};
        
        let obj2 = {p: 4,q: 5,r: 6};
        
        let obj3 = {...obj1, ...obj2 };
        /* 
          obj3 = {a: 1,b: 2, c: 3,p: 4, q: 5, r: 6 }
        */

### Styled components
styled-components, the Modern Way to Handle CSS in React.
styled-components utilises tagged template literals to style your components.
It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.
Below is the example of styled component

        const Image = styled.img`
          width:46%;
          float:left;
          margin-right:10px;
        `
    
     
 ## Managing state    
 State is the local storage of the components and can be used only inside state full components. so we will now convert search component into stateful component to use states inside it.
 Below is the example of stateful component
        
        class Search extends Component {
          constructor(props){
            super(props)
            this.state ={
              searchTerm : 'hello'
            }
            this.handlerSearchTermChange = this.handlerSearchTermChange.bind(this)
          }
          handlerSearchTermChange(event){
            this.setState({searchTerm:event.target.value})
          }
          render (){
            return (
              <div className='search container'>
                <header>
                  <h1>video</h1>
                  <input
                    onChange={this.handlerSearchTermChange}
                    value={this.state.searchTerm}
                    type="text"
                    placeholder="Search"/>
                </header>
                {preload.shows.map((show)=>(
                  <ShowCard show = {show} key={show.imdbID}/>
                ))}
              </div>
            )
          }
        }
 
  instead of bind the method in constructor you can method as below
     
     handlerSearchTermChange = (event) => {
         this.setState({searchTerm:event.target.value})
       }
    
### filtering
We use the filter method to filter the data based on the search text
    
    {preload.shows
              .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase())>=0)
              .map((show)=>(
              <ShowCard show = {show} key={show.imdbID}/>
            ))}
            
## Testing    
We are using jest as a testing framework and using the snapshot testing to test our component.
        
        import React from 'react';
        import renderer from 'react-test-renderer'
        import Search from '../Search'
        
        test('Search renders correctly', ()=>{
          const component = renderer.create(<Search/>)
          const tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        });
 The problem with renderer is that if we do any change in another file that is depend on search file . that time also the search unit test cases will fail. to solve this issue we started using enzyme.
  for enzyme testing add below code to the package.json . it tell jest when ever you encounter enzyme serialize it
        
        "jest":{
            "snapshotSerializer":["jest-serializer-enzyme"]
          },
          
  Run the below command for the testcases
  
    yarn test
    
    
 ### istanbul   
  Istanbul instruments your code to see what code gets run and then lets you when your tests are covering and/or not covering other parts. Run npm test -- --coverage.
  
  To run istanbul to see the coverage report 
  
        yarn test:coverage
        
 ### Hot Module reload
 webpack has a nifty ability to do what's called hot module reload (HMR.)
 HMR will take your code, compile it on the fly, and then inject it into your live-running code. Pretty cool tech.