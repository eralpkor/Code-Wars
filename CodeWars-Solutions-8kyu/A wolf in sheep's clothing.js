// A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// Examples
// warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep


function warnTheSheep(queue) {
  return queue.reverse().indexOf('wolf') === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`;
}

//