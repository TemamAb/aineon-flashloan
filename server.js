const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.json({"message":"AINEON Flashloan Working","status":"ok"});
});
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
