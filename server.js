const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        service: 'test-backend'
    });
});

// Sample endpoint
app.get('/api/data', (req, res) => {
    res.json({ 
        message: 'Backend is working',
        data: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Test backend server running on port ${PORT}`);
});

module.exports = app;
