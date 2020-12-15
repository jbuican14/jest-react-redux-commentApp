import React from 'react';
import { Route } from 'react-router-dom';

import CommentBox from 'components/CommentBox.component';
import CommentList from 'components/CommentList.component';
import './styles.scss';

const App = () => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

export default App;
