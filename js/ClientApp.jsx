import React from 'react'
import {render} from 'react-dom'

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};
const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'mycomponenet' },
    ce(MyTitle, { title: 'Breathe', color: 'YelloGreen' }),
    ce(MyTitle, { title: 'Shaktiman', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Tom & jerry', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'speed', color: 'peru' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
