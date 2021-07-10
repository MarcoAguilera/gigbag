const express = require('express');
const app = express();

const connectDB = require('./config/db');
const PORT = process.env.PORT || 2000;

// Import Routes 
const user = require('./api/routes/users');
const auth = require('./api/routes/auth');

// connect to database
connectDB();

app.use(express.json({extended: false}));

// Define routes
app.use('/api/users', user);
app.use('/api/auth', auth);

app.get('/', (req, res) => {
    console.log('Server started');
});

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))