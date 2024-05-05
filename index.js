const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('App Running');
})

app.get('/time', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.send(`<!DOCTYPE html><html><head><title>Current Time</title></head><body><p>${currentTime}</p></body></html>`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));