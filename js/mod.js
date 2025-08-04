let modInfo = {
	name: "The Restaurant Tree",
	author: "therealdumpsterfire",
	pointsName: "dollars",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "version 0.1",
	name: "JESSE, let's COOK",
}

let changelog = `<h1>update log:</h1><br>
	<h3>v0.1: <strong>JESSE</strong>, let's <em>COOK</em></h3><br>`

let winText = `you cooked man, you completed ${VERSION.num} UPDATE OF... THE... RESTAURANT... TREE!!!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
    if (hasUpgrade('t', 11)) gain = gain.times(3)
	if (hasMilestone('t', 0)) gain = gain.div(1.5)
	return gain
}
// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("5"))
}

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {
	background: "url('https://i.imgur.com/YxZrnzI_d.webp')",
}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}