require ('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get ('/twitter', (req, res) => {
    res.send('<h1>Hello Twitter!</h1>')
})

app.get ('/login',(req, res) => {
    res.send('<h1>Login</h1>')
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is running on port ${port}`)
}
)