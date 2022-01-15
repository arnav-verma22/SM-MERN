require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./DBConnection');
const port = process.env.PORT
const cookieParser = require('cookie-parser');

const appRoutes = require('./routes/appRoutes')

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

app.use(appRoutes);
app.use(express.json())
connectDB();

app.get('/', (req, res) => {
    return res.status(200).json({
        'message' : "Welcome to Arnav's Homepage ehbfehbh" 
    });
});

app.listen(port, () => {
    console.log("Server running at port " + port);
    console.log("app listening at " + process.env.BASE_URL);
});