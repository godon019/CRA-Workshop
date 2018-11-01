import { shallow } from 'enzyme';
import { default as React, } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//testing only App and not going deep
it('shallow test', () => {
  shallow(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
