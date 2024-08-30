import React, { useState } from 'react';
import TermsAndConditions from './TermsAndConditions';
import ArticleList from './ArticleList';

const ParentComponent = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsAccepted = () => {
    setTermsAccepted(true);
  };

  return (
    <div>
      {!termsAccepted && <TermsAndConditions onTermsAccepted={handleTermsAccepted} />}
      {termsAccepted && <ArticleList />}
      <footer>
        <p>Footer Content Here</p>
      </footer>
    </div>
  );
};

export default ParentComponent;
