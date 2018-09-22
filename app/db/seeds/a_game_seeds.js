exports.seed = (knex, Promise) => {
    return knex('game').del() 
      .then(() => { 
        return Promise.all([
          knex('game').insert({
            title: "BREATH OF THE WILD"
          }),
          knex('game').insert({
            title: "TRI FORCE HEROES"
          }),
          knex('game').insert({
            title: "A LINK BETWEEN WORLDS"
          }),
          knex('game').insert({
            title: "SKYWARD SWORD"
          }),
          knex('game').insert({
            title: "SPIRIT TRACKS"
          }),
          knex('game').insert({
            title: "PHANTOM HOURGLASS"
          }),
          knex('game').insert({
            title: "TWILIGHT PRINCESS"
          }),
          knex('game').insert({
            title: "THE MINISH CAP"
          }),
          knex('game').insert({
            title: "THE WIND WAKER"
          }),
          knex('game').insert({
            title: "ORACLE OF AGES"
          }),
          knex('game').insert({
            title: "ORACLE OF SEASONS"
          }),
          knex('game').insert({
            title: "MAJORA’S MASK"
          }),
          knex('game').insert({
            title: "OCARINA OF TIME"
          }),
          knex('game').insert({
            title: "LINK’S AWAKENING"
          }),
          knex('game').insert({
            title: "A LINK TO THE PAST"
          }),
          knex('game').insert({
            title: "THE ADVENTURE OF LINK"
          }),
          knex('game').insert({
            title: "THE LEGEND OF ZELDA"
          }),
        ]);
      });
  };