import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import preload from '../../data.json'
import Search from '../Search';
import ShowCard from '../ShowCard'

// test('Search renders correctly', ()=>{
//   const component = renderer.create(<Search/>)
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
console.log(process.env.NODE_ENV);

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', ()=>{
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
})

test('Search should render correct amount of shows based on search term', ()=>{
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', {target:{value:searchWord}})
  const showCount = preload.shows
    .filter(show =>
      `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase())>=0);

  expect(component.find(ShowCard).length).toEqual(showCount.length);
})