let number = 5;
let mainURL = "http://numbersapi.com";

//p1
$.getJSON(`${mainURL}/${number}?json`, function(data) {
  console.log(data);
});

//p2
let favnumbers = [5, 12, 69];
$.getJSON(`${mainURL}/${favNumbers}?json`, function(data) {
  console.log(data);
});
