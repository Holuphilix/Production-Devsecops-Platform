const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Production-Grade DevSecOps CI/CD Platform');
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        platform: 'Production-Grade DevSecOps CI/CD Platform',
        environment: 'local'
    });
});

app.listen(PORT, () => {
    console.log(`Platform application running on port ${PORT}`);
});
