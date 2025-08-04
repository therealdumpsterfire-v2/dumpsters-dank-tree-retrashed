addLayer("t", {
    name: "tomatoes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🍅", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff6347", // Color of the layer, used in the node and in the prestige button
    requires: new Decimal(1.5), // Can be a function that takes requirement increases into account
    resource: "tomatoes", // Name of prestige currency
    baseResource: "dollars", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('c', 11)) mult = mult.times(2) // Example of a milestone affecting gain (as you can see, it doubled tomato gain)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "t: reset for tomatoes", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
    11: {
        title: "red golly geez",
        description: "dollars are multiplied by 3 cuz tomatoes so good people want em",
        cost: new Decimal(5),
    }},
    milestones: {
    0: {
        requirementDescription: "100 tomatoes",
        effectDescription: "money is divided by 1.5, inflation??? but tomatoes are doubled",
        done(){return player.t.points.gte(100)}
    }},
})

addLayer("c", {
    name: "cheese", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🧀", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: -1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#d8c860ff", // Color of the layer, used in the node and in the prestige button
    requires: new Decimal(1.5), // Can be a function that takes requirement increases into account
    resource: "cheeses", // Name of prestige currency
    baseResource: "dollars", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('c', 11)) mult = mult.times(2) // Example of an upgrade affecting gain (as you can see, it tripled cheese gain)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "c: reset for cheeses", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.t.points.gte(1)},
    upgrades: {
    11: {
        title: "cheese + tomatoes",
        description: "maybe this can make pizza at some point! but for now, it just makes more 2x cheese and tomatoes cuz more people want both now",
        cost: new Decimal(5),
   }},
})