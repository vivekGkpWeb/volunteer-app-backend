const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const users = require('./fakedata/users');

app.get('/', (req, res) => {
    res.send('!! Hello World !!');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/users/:userId', (req, res) => {
    res.send(users.find(user => user.id == req.params.userId));
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
