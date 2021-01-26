import express, {Response, Request, NextFunction} from 'express';
import mongoose from 'mongoose';
import {environment} from "./environments/environment";
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// basic setup
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req: Request<any>, res: Response<any>, next: NextFunction) => {
    res.json({companyName: 'InfiSoftware'})
})

let PORT = process.env.PORT || `${environment.PORT}`;
mongoose.connect(`${environment.MONGO_URL}`, {
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