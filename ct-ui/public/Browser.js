import React from 'react';

const Browser = ({ url }) => {
  return (
    <iframe src={url} width="100%" height="500px" title="Course Details"></iframe>
  );
};

export default Browser;