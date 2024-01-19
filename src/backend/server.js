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

mongoose.connect("")
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(error => console.error('Failed to connect to MongoDB', error));

const currentPageRoute = require('./routes/currentPageRoute');
const musicModeRoutes = require('./routes/musicModeRoutes');
const ringColorRouter = require('./routes/ringColorRoutes');
const stateRoutes = require('./routes/stateRoutes');

app.get('/', (req, res) => { // serves the react app via the proxy which ignores CORS
})
app.use('/api/state', stateRoutes);
app.use('/api/color', ringColorRouter);
app.use('/api/musicMode', musicModeRoutes);
app.use('/api/currentPage', currentPageRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));