describe("Square", function() {


  beforeEach(function(){
    square = new Square();
  });

  it('has a value of null when instantiated', function(){
    expect(square.space()).toEqual(null)
  });
  
});
