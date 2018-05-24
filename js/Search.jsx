import React from 'react';
import preload from '../data.json'
import ShowCard from './ShowCard'

const Search =()=>(
  <div className='search'>
    {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
    {preload.shows.map((show)=>(
      <ShowCard show = {show} key={show.title}/>
    ))}
  </div>
)


export default Search;