describe("Player", function() {


  beforeEach(function(){
    player = new Player("John");
  });

  it('has name attribute when instantiated', function(){
    expect(player.name()).toEqual("John")
  });

});
