// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')


ServerEvents.tick((event) => {
    let server = event.getServer();
    server.getPlayers().forEach((player) => {
        
    });
})