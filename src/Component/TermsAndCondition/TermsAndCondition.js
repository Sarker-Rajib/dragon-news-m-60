import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
   return (
      <div>
         <h3>Terms and Conditions</h3>
         <p><Link to='/register'>Back to Register</Link></p>
      </div>
   );
};

export default TermsAndCondition;