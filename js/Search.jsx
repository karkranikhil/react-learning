import React, {Component} from 'react';
import preload from '../data.json'
import ShowCard from './ShowCard'

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

export default Search;