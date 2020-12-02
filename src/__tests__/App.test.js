import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow, mount } from 'enzyme';

import App from 'App';
import CommentBox from 'components/CommentBox.component';
import CommentList from 'components/CommentList.component';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Box of comment/i);
//   expect(linkElement).toBeInTheDocument();
// });

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// PREVIOUS VERSION
// it('shows a comment box', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   expect(div.innerHTML).toContain('Comment Box');
//   ReactDOM.unmountComponentAtNode(div);
// });
