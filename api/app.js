const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// basic setup
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// handle cors
app.use(cors());

app.get('/', (req, res, next) => {
    res.status(200).json({name: "Infi Software Test api"})
});

// handle errors
app.use((req, res, next) => {
    next({message: 'Not Found', status: 404});
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        status: err.status || 500
    });
});

let PORT = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://test_db_user:bubscLNGpuRGVL69@cluster0.af1hq.mongodb.net/test_db?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        const server = app.listen(PORT, () => {
            console.log('Listening at http://localhost:' + PORT);
        });
        server.on('error', console.error);
    })
    .catch(err => {
        console.log(err);
    });
