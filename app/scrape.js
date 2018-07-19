const request = require('request')
      cheerio = require('cheerio')
      Game = require('./models/Game')
      args = process.argv;

const { bookshelf } = require('./db/database');

const game = args[2];
const dungeon = args[3];

request(`http://www.zeldadungeon.net/${game}-walkthrough/${dungeon}/`, (error, response, html) => {
    var walkthrough = [];
    var $ = cheerio.load(html);
    // console.log(html);
    if (!error) {
        $('div.walkthrough p').each(() => {
            var data = $(this);
            console.log(data.text());
            walkthrough.push(data.text());
        });
        // console.log(walkthrough)
    }   
});

