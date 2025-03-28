import express from 'express';
import cors from 'cors';

//import { CLIENT_URL } from './config/config.env.js';
import router from './routes/notes.routes.js';

const app = express();

/*const corsOptions = {
    origin: CLIENT_URL,
};

app.use(cors(corsOptions));*/
app.use(express.json());

app.use('/api/v1/notes', router);
app.get('/*', (req, res) => {
    res.status(404).json({ error: "Route not found" });
});

export default app;