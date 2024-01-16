const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000; // run with "node server.js" in an extra terminal -> will be fixed later so the backend starts using npm start

app.use(cors());
app.use(express.json());

mongoose.connect("db string").then(() => console.log('Successfully connected to MongoDB')) // .env support still missing, will be added later -> for now add the string while developing
    .catch(error => console.error('Failed to connect to MongoDB', error));;


const stateRoutes = require('./routes/stateRoutes');
const ringColorRouter = require('./routes/ringColorRoutes');

app.use('/api/state', stateRoutes);
app.use('/api/color', ringColorRouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
