// filepath: /c:/Users/souna/OneDrive/Desktop/dev projects/portfolio/server/proxy.js
import express from 'express';
import cors from 'cors';
import LeetCode from 'leetcode-query';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));

app.get('/', (req, res) => {
    res.send('Welcome to the proxy server');
})

app.get('/leetcode/user/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const leetcode = new LeetCode();
    const response = await leetcode.user(username);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from LeetCode' });
  }
});

app.get('/leetcode/user/:username/contests', async (req, res) => {
    const { username } = req.params;
    try {
        const contests = new LeetCode();
        const response = await contests.user_contest_info(username);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from LeetCode' });
    }
    });

app.listen(process.env.PORT, () => {
  console.log(`Proxy server running at http://localhost:${process.env.PORT}`);
});