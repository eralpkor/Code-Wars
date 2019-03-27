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
  var input = people.sort(function (a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();


    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  }).sort(function (a, b) {
    return b.points - a.points;
  })

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

  return result.sort(function (vote1, vote2) {
    // sort by points
    if (vote1.points > vote2.points) return -1;
    if (vote1.points < vote2.points) return 1;
    // sort by names
    if (vote1.name > vote2.name) return 1;
    if (vote1.name < vote2.name) return -1;
  });
}