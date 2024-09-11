'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types/User';

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

// Define the unique prefix for localStorage keys
const STORAGE_PREFIX = 'leoTechChallenge_';

// Create the UserContext with default values
export const UserContext = createContext<UserContextType>({
  user: { username: '', jobTitle: '' },
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ username: '', jobTitle: '' });

  // Load stored data from localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem(`${STORAGE_PREFIX}username`);
    const storedJobTitle = localStorage.getItem(`${STORAGE_PREFIX}jobTitle`);
    if (storedUsername && storedJobTitle) {
      setUser({ username: storedUsername, jobTitle: storedJobTitle });
    }
  }, []);

  // Save the username and job title to localStorage whenever they change
  useEffect(() => {
    if (user.username && user.jobTitle) {
      localStorage.setItem(`${STORAGE_PREFIX}username`, user.username);
      localStorage.setItem(`${STORAGE_PREFIX}jobTitle`, user.jobTitle);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};