// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

test('checking Header Tag', ()=>{
  const wrapper = shallow(<App/>)
  expect(wrapper.find('h1').text()).toContain('Hello World!')
})

test('checking p Tag ', ()=>{
  const wrapper = shallow(<App/>)
  expect(wrapper.find('p').text()).toContain('Komaraju Bablu')
})

test('checking props ', ()=>{
  const wrapper = shallow(<App name="Komaraju Bablu"/>)
  expect(wrapper.find('#welcome').text()).toContain('Welcome To Learn Unit Testing Komaraju Bablu')
})

test('checking state Intial Value ', ()=>{
  const wrapper = shallow(<App name="Komaraju Bablu"/>)
  expect(wrapper.find('#intialCounter').text()).toContain("0")
})