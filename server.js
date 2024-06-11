// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Handle form submission logic (e.g., save to database, send email)
    res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
