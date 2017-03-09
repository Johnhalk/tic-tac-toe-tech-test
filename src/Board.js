function Board(square){
  this._board = [[new Square(),new Square(),new Square()],
                [new Square(),new Square(),new Square()],
                [new Square(),new Square(),new Square()]];

};

Board.prototype.showBoard = function(){
  return this._board;
};
