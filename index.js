var http = require('http'); 
const axios = require('axios');
const schedule = require('node-schedule');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const app = require('./js/app.js');
const express = require('./js/express.js');

const { sequelize } = require('./models');

var fs = require('fs');

const rule = new schedule.RecurrenceRule();
rule.second = [0, new schedule.Range(1, 60)];

const job = schedule.scheduleJob(rule, function()
{
    // console.log('The answer to life, the universe, and everything!');
});

/*
http.createServer(function(req, res) 
{ 
    res.writeHead(200, {'Content-Type' : 'text/html'}); 
    res.end('<h1>Hello NodeJs Banana</h1>'); 
}).listen(8080, function() 
{ 
    console.log("server is listening on 8080"); 
});
*/

/*
axios.get('https://devnauts.tistory.com/95').then((res) => 
{
    const dom = new JSDOM(res.data);
    var matches = dom.window.document.querySelectorAll("div");
    matches.forEach(function(item)
    {
        console.log(item.textContent);
    });
});
*/
// app.println();
/*
for(var i=0;i<1000;i++) {
    app.create();
}
*/  

axios.get('http://localhost:3000/users').then((res) => {
    fs.writeFile('data1.json', JSON.stringify(res.data), 'utf8', function(error) {
        console.log('write end');
    });
});