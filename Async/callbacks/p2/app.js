$(function ()
{
  let mainURL = 'https://deckofcardsapi.com/api/deck';

  //p1
  $.getJSON(`${mainURL}/new/draw/`, function(data) {
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
  });

  //p2
  $.getJSON(`${mainURL}/new/draw/`, function(data) {
    let firstCard = data.cards[0];
    let deckId = data.deck_id;
    $getJSON(`${mainURL}/${deckId}/draw/`, function(data) {
      let secondCard = data.cards[0];
      [firstCard, secondCard].forEach(function(card) {
        console.log(
          `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
      }
      );
    });
  });
});

