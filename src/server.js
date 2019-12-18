import app from './app';

const port = parseInt(process.env.PORT || '3333', 10);
app.listen(port);
