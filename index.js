const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    res.send(['Node', 'Express', 'MongoDB']);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id[0]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));