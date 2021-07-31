var expect = chai.expect;

describe('MyFunctions', function(){

    describe('#createDeckOfCards', function(){
        it("Ensure that function creats a deck of 52 cards", function(){
            testDeck = new Deck();
            testDeck.createDeckOfCards();
            let x = testDeck.deckOfCards;
            expect(x).to.have.length(52);
        });
    });

    describe('#create a Player', function(){
        it("Check to see if a player is created", function(){
            testPlayer = new Player();
            expect(testPlayer).to.be.an('object')
        });
    });

    describe('#dealCards', function(){
        it("Ensure that deck is dealt", function(){
            testPlayer1 = new Player();
            testPlayer2 = new Player();
            testDeck = new Deck();
            testDeck.createDeckOfCards();
            testDeck.shuffleCards(testDeck.deckOfCards);
            testDeck.dealCards(testDeck.deckOfCards);
            expect(testDeck.deckOfCards).to.be.empty;
        });
    });
});