$(function() {
  let mainURL = 'https://deckofcardsapi.com/api/deck';

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
async function setup() {
  let $btn = $('button');
  let $cardPlace = $('#card');

  let deckData = await $.getJSON(`${mainURL}/new/shuffle/`);
  $btn.show().on('click', async function() {
    let cardData = await $.getJSON(`${mainURL}/${deckData.deck_id}/draw/`);
    let cardSrc = cardData.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    $cardPlace.append(
      $('<img>', {
        src: cardSrc,
        css: {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        }
      })
    );
    if (cardData.remaining === 0) $btn.remove();
  });
}
setup();
});