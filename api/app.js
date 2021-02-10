const express = require('express');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
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

const productRoutes = require("./routes/product.route");

// handle errors
// app.use((req, res, next) => {
//     next({message: 'Not Found', status: 404});
// });

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

    app.use("/products", cors(corsOptions), productRoutes);
