import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList.component';
import Root from 'Root';

// Test case - Show one li element per comment - Text from each comment is visible
let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one <li> per comment', () => {
  // console.log(wrapped.find('li').length);
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  // console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
