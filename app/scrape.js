const { bookshelf } = require('./db/database');
const request = require('request')
      cheerio = require('cheerio') 
      Game = require('./models/Game')
      Walkthrough = require('./models/Walkthrough')
      args = process.argv,
      game = args[2],
      dungeon = args[3];

{
    request(`http://www.zeldadungeon.net/${game}-walkthrough/${dungeon}/`, function(error, response, html) {
        if (error) return error;

        const walkthrough = {};
        const walkthroughArray = [];
        const $ = cheerio.load(html);

        $('div.walkthrough p').each(function() {
            $(this).text() ? walkthroughArray.push($(this).text()) : void 0;
        });

        walkthrough.content = walkthroughArray.join('\n\n').replace('\'\\xF0\\x9F\\x98\\x89\\x0A\\x0A', '');
        walkthrough.game_id = 1;
        walkthrough.dungeon_name = kebabToPretty(dungeon);

        return Walkthrough.addWalkthrough(walkthrough)
            .then(newWalkthrough => { console.log('done'); process.exit(); })
            .catch(err => { console.log('err', err); process.exit(); });
    });

    function kebabToPretty(kebab) {
        kebab = kebab.split('-');
        const capitalizedArray = kebab.map(w => w.charAt(0).toUpperCase() +  w.substr(1).toLowerCase());

        return capitalizedArray.join(' ');
    }
}