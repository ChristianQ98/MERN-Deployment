const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/Pirate.routes')(app);
app.listen(port, () => console.log(`Server is fired up and ready to go on port ${port}`));