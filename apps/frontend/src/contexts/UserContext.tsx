import React, { createContext, useState, useContext } from 'react';
import { UserType } from '../types/userTypes';

interface UserContextType {
  userList: UserType[];
  setUserList: React.Dispatch<React.SetStateAction<UserType[]>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userList, setUserList] = useState<UserType[]>([]);

  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
