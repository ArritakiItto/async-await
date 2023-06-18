let number = 23;
let mainURL = "http://numbersapi.com";

//part 1
async function p1() {
  let data = await $.getJSON(`${mainURL}/${number}?json`);
  console.log(data)
}

p1();

//part 2 

const favoriteNumbers = [5, 12, 69]
async function p2() {
  let data = await $.getJSON(`${mainURL}/${number}?json`);
  console.log(data)
}
p2();

// part 3
async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${mainURL}/${number}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();