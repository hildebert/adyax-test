import path from 'path';
import express from 'express';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/node_modules', express.static(path.join(__dirname, '/../node_modules')));

export default app;
