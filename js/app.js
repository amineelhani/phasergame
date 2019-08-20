let mainState = {  
    preload: function() {  
        // Qua vengono precaricati gli assets
    },

    create: function() {  
        // Qua viene creato il gioco
    },

    update: function() {  
        // Qua viene aggiornato 60 volte al secondo
    },
};

// Inizializza il gioco
let game = new Phaser.Game(500, 300);  
game.state.add('main', mainState);  
game.state.start('main');