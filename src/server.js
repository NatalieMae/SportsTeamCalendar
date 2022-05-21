const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(_dirname, '..', 'public');
const port = proces.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(port, () => {
    console.log(`Server is up on port ${port} !`);
});