import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    <GithubContext.Provider value={(githubUser, repos, followers)}>
      {children}
    </GithubContext.Provider>
  );
};

const rootUrl = 'https://api.github.com';

export { GithubContext, GithubProvider };
