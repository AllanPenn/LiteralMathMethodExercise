let warmHugs = "Hi, I\'m Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());
warmHugs = warmHugs.replace("like", "love")
console.log(warmHugs);
let beenImpaled = "Oh, look at that. I\'ve been impaled.";
console.log(beenImpaled.slice(18));
let dotDotDot = "...";
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(Math.PI);
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

// BONUS
console.log(" Let It Go!".toUpperCase().repeat(2).trim());
let reindeers = "Reindeers are better than people.";
console.log(reindeers.replace(/ /g, "_"));
console.log(Math.SQRT2);
var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7)