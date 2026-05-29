const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Server Validation Error: All request inputs are required.'
        });
    }

    console.log('========================================');
    console.log(`NEW MESSAGE LOGGED FROM: ${name} (${email})`);
    console.log(`MESSAGE CONTENT: ${message}`);
    console.log('========================================');

    res.status(200).json({
        success: true,
        message: 'Message data successfully processed on the server framework database registry!'
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`[SYSTEM SERVER RUNNING]: Listening securely at address http://localhost:${PORT}`);
});