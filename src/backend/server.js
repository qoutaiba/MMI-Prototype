const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000; // run with "node server.js" in an extra terminal -> will be fixed later so the backend starts using npm start

app.use(cors());
app.use(express.json());

mongoose.connect("add your DB connection string here :)").then(() => console.log('Successfully connected to MongoDB')) // .env support still missing, will be added later -> for now add the string while developing
    .catch(error => console.error('Failed to connect to MongoDB', error));;

//const musicRoutes = require('./routes/musicRoutes');
//const styleRoutes = require('./routes/styleRoutes');
//const privacyRoutes = require('./routes/privacyRoutes');
const stateRoutes = require('./routes/stateRoutes');
//const mysteryRoutes = require('./routes/mysteryRoutes');

//app.use('/api/music', musicRoutes);
//app.use('/api/style', styleRoutes);
//app.use('/api/privacy', privacyRoutes);
app.use('/api/state', stateRoutes);
//app.use('/api/mystery', mysteryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
