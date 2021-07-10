const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 2000;

// connect to database
connectDB();

app.use(express.json({extended: false}));

// Define routes
app.user('/api/user', user);

app.get('/', (req, res) => {
    console.log('Server started');
});

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))