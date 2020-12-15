import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'App';

it('can fetch a list of comments and display them', () => {
  // Render app (first 10)
  //find fetchComments button and click it
  //expect to find a list of comments
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});
