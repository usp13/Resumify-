const dns = require('node:dns');

dns.setServers([
    '8.8.8.8',
    '1.1.1.1'
]);

require("dotenv").config();
const app = require('./src/app');
const connecttoDB = require("./src/config/database");
const  generateInterviewReport  = require('./src/services/ai.service.js')
//const { resume , selfDescription , jobDescription } = require('./src/services/temp.js')

connecttoDB();

//generateInterviewReport( {resume , selfDescription , jobDescription }) ; 


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});