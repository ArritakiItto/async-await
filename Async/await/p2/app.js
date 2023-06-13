$(function() {
  let mainURL = 'https://deckofcardsapi.com/api/deck';
})

//p1
async function part1() {
  let data = await $.getJSON(`${mainURL}/new/draw/`);
  let {suit, value} = data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
}

//p2
async function part2() {
  let firstCardData = await $.getJSON(`${mainURL}/new/draw`);
  let deckId = firstCardData.deck_id;
  let secondCardData = await $.getJSON(`${mainURL}/${deckId}/draw/`)
  [firstCardData, secondCardData].forEach(card => {
    let {suit, value} = card.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });
}

//p3
