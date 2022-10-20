import React, { createContext } from 'react';

export const AuthContext = createContext();

const Authprovider = ({children}) => {
   const user = {displayName: 'Batas ALi'}

   const authInfo = {user}

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default Authprovider;