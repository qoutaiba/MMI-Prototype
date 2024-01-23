const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

/*let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
*/

app.use(express.json());

mongoose.connect("mongodb+srv://PhGe:Cf5sjjGPLrxxg4TP@mmi.1ztgebz.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(error => console.error('Failed to connect to MongoDB', error));

const currentPageRoute = require('./routes/currentPageRoute');
const musicModeRoutes = require('./routes/musicModeRoutes');
const ringColorRouter = require('./routes/ringColorRoutes');
const stateRoutes = require('./routes/stateRoutes');
const mysteryModeRoutes = require('./routes/mysteryModeRoutes');
const privacyModeRoutes = require('./routes/privacyModeRoutes');

app.get('/', (req, res) => { // serves the react app via the proxy which ignores CORS
})
app.use('/api/state', stateRoutes);
app.use('/api/color', ringColorRouter);
app.use('/api/musicMode', musicModeRoutes);
app.use('/api/currentPage', currentPageRoute);
app.use('/api/mysteryMode', mysteryModeRoutes);
app.use('/api/privacyMode', privacyModeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));