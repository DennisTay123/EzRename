const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/rename', (req, res) => {
  const { oldPath, newPath } = req.body;

  fs.rename(oldPath, newPath, (err) => {
    if (err) return res.status(500).send('Error renaming file');
    res.send('File renamed successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
