import React from 'react';

import CommentBox from 'components/CommentBox.component';
import CommentList from 'components/CommentList.component';
import './styles.scss';

const App = () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default App;
