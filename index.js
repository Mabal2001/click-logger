const express = require('express');
const UAParser = require('ua-parser-js');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.get('/track', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const parser = new UAParser(userAgent);
  const ua = parser.getResult();

  const os = `${ua.os.name} ${ua.os.version}`;
  const browser = `${ua.browser.name} ${ua.browser.version}`;

  let location = {};
  try {
    const geo = await fetch(`https://ipapi.co/${ip}/json/`);
    location = await geo.json();
  } catch (err) {
    location = { error: 'Failed to get location' };
  }

  res.json({ ip, userAgent, os, browser, location });
});

app.listen(port, () => {
  console.log(https://click-logger-theta.vercel.app/);
});
