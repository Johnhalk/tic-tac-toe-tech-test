describe("Board", function() {


    beforeEach(function(){
      board = new Board();
    });

    it('Should initialise with a length of 3', function(){
      expect(board.showBoard().length).toEqual(3)
    });

});
