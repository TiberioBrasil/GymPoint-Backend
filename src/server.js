import app from './app';

const port = parseInt(process.env.PORT || '3333', 10);
app.listen(port, () => console.log(`Started listening with port ${port}`));
