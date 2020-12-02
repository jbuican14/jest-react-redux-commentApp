import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox.component';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  });

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment'); //value is the key from the form
});

it('clears the textarea after submiting the form', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment 2' },
  });
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment 2');
  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
