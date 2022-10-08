// entry point
const express = require('express');
const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Dev server started</h1>")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));