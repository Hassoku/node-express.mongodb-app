const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path')
const connectDB = require('./database/connection')


const app = express();


app.use(bodyParser.json())
app.use(cors())

dotenv.config({
    path: "config.env"
})
const PORT = process.env.PORT || 3000;

app.use(morgan("tiny"))

connectDB()

app.set('view engine', "ejs")
    // app.set('view', path.resolve(__dirname, "view/ejs"))
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))


app.use('/img', express.static(path.resolve(__dirname, "assets/img")))


app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.use('/', require('./routes/router'))
    // const posts = require('./routes/api/posts');
    // app.use('/api/posts', posts)




// Handle production
// if (process.env.NODE_ENV === 'production') {
//     // Static folder
//     app.use(express.static(__dirname + '/public/'));

//     // Handle SPA
//     app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));