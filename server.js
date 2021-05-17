const express = require('express') //import express.js store by using express as variable
const app = express //create a express' instance and create variable named app

//create PORT, storing port value. In case we set in env of pc.
// but if not, we'll use 8080 instead.
const PORT = process.env.PORT || 8080

//create 1 route, set in PATH is /, host's index 
//then set response to display 'hello, world.'
app.get('/', (req, res) => res.send('Hello World'))

//run web server we created by using PORT 
app.listen(PORT, () => {
    //if it's work then display to terminal 
    console.log(`Server is running on port: ${PORT}`)
})

//export app for the next project, it feels like module exactly
module.exports = app
