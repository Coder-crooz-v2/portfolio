// filepath: /c:/Users/souna/OneDrive/Desktop/dev projects/portfolio/client/src/pages/codingStats/data/data.ts
import axios from 'axios';

const fetchUserData = async (username: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/leetcode/user/${username}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};

const fetchUserContests = async (username: string) => {
    try {
        const response = await axios.get(`http://localhost:4000/leetcode/user/${username}/contests`);
        return response.data;
    }
    catch (error) {
        console.error('Failed to fetch user contests:', error);
        throw error;
    }
};

export const user = await fetchUserData('Coder-crooz-v2');
export const contests = await fetchUserContests('Coder-crooz-v2');