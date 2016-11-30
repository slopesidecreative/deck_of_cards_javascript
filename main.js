// Create a Deck object constructor. A deck should have the following functionality:
//
// The Deck should contain the 52 standard cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck
// Now create a Player object constructor. A Player should have the following functionality:
//
// The Player should have a name
// The Player should have a hand
// The Player should be able to take a card (use the deck.deal method)
// The Player should be able to discard a card

"use strict";

var suites = ['clubs','diamonds','spades','hearts'];
var faces =  ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
var values = [1,2,3,4,5,6,7,8,9,10,10,10,10];

/* ******* Card class ******** */
var Card = function(suite,face,value){
   var self = this;
   this.suite = suite;
   this.face = face;
   this.value = value;

   // the constructor was called without "new".
   if (!(this instanceof Card)) {
      return new Card(suite,face,value);
   }
}
/* ******* end Card class ******** */

/* ******* Deck class ******** */
var Deck = function(){
   var self = this;
   self.deck = [];

   // create the deck
   self.deck = self.create();
   // the constructor was called without "new".
   if (!(this instanceof Deck)) {
      return new Deck(suite,face,value);
   }
}
// instance method
Deck.prototype.create = function(){
      var deck = [];
      for(var i=0;i<suites.length;i++){
         for(var x=0;x<faces.length;x++){
            // console.log(suites[i], faces[x], values[x]);
            var newCard = new Card(suites[i], faces[x], values[x]);
            // console.log('card: ',newCard);
            deck.push(newCard);
         }
      }
      return deck;
   }
// instance method
Deck.prototype.shuffle = function(){
// https://bost.ocks.org/mike/shuffle/
  var m = this.deck.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }
}
// instance method
Deck.prototype.deal = function(){
   // remove card from deck and return it
   return this.deck.pop();
}
/* ******* end Deck class ******** */

/* ******* Person class ******** */
var Person = function(name){
   var self = this;
   self.name = name;
   self.hand = [];
   self.deck = new Deck();
   // the constructor was called without "new".
   if (!(this instanceof Person)) {
      return new Person(suite,face,value);
   }
}
// instance method
Person.prototype.takeCard = function(){
      this.hand.push(this.deck.deal());
   }
// instance method
Person.prototype.discardCard = function(idx){
   console.log('hand length: ',this.hand.length);
   if(this.hand.length > 0){
      this.hand.pop()
      }else{
         console.log('no more cards!');
      }
   }
/* ******* end Person class ******** */


// lets do this...
var myDeck = new Deck();
//console.log(myDeck.deck);
myDeck.shuffle();
//console.log(myDeck.deck);
myDeck.deal();

// now with a Person.....

var me = new Person('Jake');
//console.log('my deck: ',me.deck)
me.deck.shuffle();
me.takeCard();
console.log('my hand: ',me.hand);
me.discardCard();
console.log('my hand: ',me.hand);
