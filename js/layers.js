addLayer("w", {
    name: "toilet wipes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🧻", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(0.005), // Can be a function that takes requirement increases into account
    resource: "toilet wipes", // Name of prestige currency
    baseResource: "dollars", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "w", description: "w: reset for wipes", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
    11: {
        title: "get more money by an investment",
        description: "triple money gain cuz the stock market went in your favor",
        cost: new Decimal(1000),
    }},
    milestones: {
    0: {
        requirementDescription: "100,000 wipes",
        effectDescription: "increases dollar gain to the power of 1.5",
        done(){return player.w.points.gte(1e5)}
    }},
})