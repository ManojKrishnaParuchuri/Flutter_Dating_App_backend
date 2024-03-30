const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userroute');

const app = express();
const port = process.env.PORT || 2001;

// MongoDB Atlas connection URI
const mongoURI = 'mongodb+srv://admin:admin@cluster0.snx7gwu.mongodb.net/flutter_project?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', userRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
