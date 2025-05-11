const express = require('express');
const app = express();
const apiRoutes = require('./server/index');

app.use(express.json());
app.use('/', apiRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
