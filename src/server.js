const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(_dirname, '..', 'public');
const port = process.env.PORT || 3000;
const { Sequelize } = require('sequelize');


// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}







app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is up on port ${port} !`);
});