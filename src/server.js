const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

//test server
app.get('/', (req, res) => {
    res.send("<h1>Dev server started</h1>")
});

//status
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//export app
module.exports = app;