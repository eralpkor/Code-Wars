// // Ranking position
// https://www.codewars.com/kata/ranking-position/javascript
// // In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).
// var persons = [{
//   name: "John",
//   points: 100,
// },
// {
//   name: "Bob",
//   points: 130,
// },
// {
//   name: "Mary",
//   points: 120,
// },
// {
//   name: "Kate",
//   points: 120,
// },
// ];

function ranking(people) {
  var input = people.sort(function(a, b) {
    return b.points - a.points || a.name.localeCompare(b.name)
  });

  var result = [];
  var pos = 0;
  var highPoints = 9999;
  for (var i = 0; i < input.length; i++) {
    if (input[i].points < highPoints) {
      pos = i + 1;
      input[i].position = i + 1;
      highPoints = input[i].points;
    } else if (input[i].points === highPoints) {
      input[i].position = pos;
    }
    result.push(input[i]);
  }
  return result;
}


// working sorter
function ranking(people) {
  people.sort((a, b) => b.points - a.points || a.name.localeCompare(b.name))
  
  people.forEach((x, i) => x.position = !i || x.points < people[i-1].points ? i + 1 : people[i-1].position);
  return people;
}

// The ! is the boolean NOT operator.

// NOT (!): toggles a statement from true to false or from false to true.

// !0 = true
// !1 = false