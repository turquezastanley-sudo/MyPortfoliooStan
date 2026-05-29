module.exports = (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method Not Allowed. Use POST to submit the contact form.'
        });
    }

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

    return res.status(200).json({
        success: true,
        message: 'Message data successfully processed on the server framework database registry!'
    });
};
