module.exports = function(mod) {
    mod.hook("S_CREATURE_LIFE", 3, e=> {
        if(e.alive) return;
        mod.send("S_INSTANT_MOVE", 3, e);
        mod.setTimeout(()=> {
            mod.send("S_INSTANT_MOVE", 3, e);
        }, 400);
    });
}