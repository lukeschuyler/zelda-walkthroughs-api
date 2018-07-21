const { bookshelf } = require('./db/database');
const request = require('request')
      cheerio = require('cheerio') 
      Game = require('./models/Game')
      args = process.argv,
      game = args[2],
      dungeon = args[3];

{
    function makeRequest() {
        request(`http://www.zeldadungeon.net/${game}-walkthrough/${dungeon}/`, (error, response, html) => {
            var walkthrough = [];
            var $ = cheerio.load(html);
            // var $ = cheerio.load('<div class="walkthrough"><p>Hello</p><p></p></div>');
            // console.log($);
            // console.log($('div.walkthrough p'))
            if (!error) {
                $('div.walkthrough p').each(() => {
                    console.log("ROOT: ", $.root().text())
                    $(this).text() ? walkthrough.push($(this).text()) : void 0;
                });
                // console.log(walkthrough)
            }   
        });
    }

    makeRequest();
}

