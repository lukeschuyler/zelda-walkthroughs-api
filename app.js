var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
const bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())

app.get('/:game/:dungeon', ({ params: {game, dungeon} }, res, next) => {
  request(`http://www.zeldadungeon.net/${game}-walkthrough/${dungeon}/`, function (error, response, html) {
    var walkthrough = [];
    var $ = cheerio.load(html);
     if(!error){
        $('div.walkthrough p').each(function(){
        var data = $(this);
        walkthrough.push(data.text());
      })
        res.json(JSON.stringify(walkthrough))
    }
  })
})

app.listen(8080)
