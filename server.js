const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res) => {
    res.send('привет');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});