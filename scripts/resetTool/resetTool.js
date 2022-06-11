/*
Reset tool by Floppys
*/
let resetTool = new Tool("Reset")

Game.on("playerJoin", (player) => {
    player.on("initialSpawn", () => {
        player.warnings = 2
        player.equipTool(resetTool)
    })
})

resetTool.on("equipped", (player) => {
    player.centerPrint("Click 2 time to reset, unequip this tool to reset your warnings", 2)
})

resetTool.on("activated", (player) => {
    
    player.warnings--;
    if(player.warnings === 1) {
        player.centerPrint("[#FF0000]Click again to confirm reset", 2)
    } else if(player.warnings === 0) {
        player.kill()
        console.log(`${player.username} has resetted.`)
        player.warnings = 2
    }
})
resetTool.on("unequipped", (player) => {
    player.warnings = 2
})
