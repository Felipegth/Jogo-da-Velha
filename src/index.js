import  React ,  {  useState  }  de  ' react ' ;
import ReactDOM from 'react-dom';
import  './index.css' ;

// 00:37:40
function  Square ( adereços )  {
  return  (
    < botão  className = "quadrado"  onClick = { adereços . onClick } >
      { adereços . valor }
    < / botão >
  ) ;
}

// ganchos:
// useState () -> substitui this.state
// useEffect () -> eventos
const  Board  =  ( )  =>  {
  const  [ quadrados ,  setSquares ]  =  useState ( Array ( 9 ) . fill ( null ) ) ;
  const  [ xIsNext ,  setIsNext ]  =  useState ( true ) ;

  const  handleClick  =  ( i )  =>  {
    console . log ( quadrados ) ;
    const  squareSlice  =  quadrados ?. fatia ( ) ;
    se  ( calculateWinner ( squaresSlice )  ||  squaresSlice [ i ] )  {
      retorno ;
    }
    squareSlice [ i ]  =  xIsNext ? 'X' : 'O' ;
    setSquares ( squaresSlice ) ;
    setIsNext ( ! xIsNext ) ;
  }

  const  renderSquare  =  ( i )  =>  {
    return  (
      < Quadrado
        valor = { quadrados [ i ] }
        onClick = { ( )  =>  handleClick ( i ) }
      / >
    ) ;
  }

  const  vencedor  =  calcularWinner ( quadrados ) ;
  deixar o  status ;
  if  ( vencedor )  {
    status  =  'Vencedor:'  +  vencedor ;
  }  else  {
    status  =  'Próximo jogador:'  +  ( xIsNext ? 'X' : 'O' ) ;
  }

  return  (
    < div >
      < div  className = "status" > { status } < / div >
      < div  className = "board-row" >
        { renderSquare ( 0 ) }
        { renderSquare ( 1 ) }
        { renderSquare ( 2 ) }
      < / div >
      < div  className = "board-row" >
        { renderSquare ( 3 ) }
        { renderSquare ( 4 ) }
        { renderSquare ( 5 ) }
      < / div >
      < div  className = "board-row" >
        { renderSquare ( 6 ) }
        { renderSquare ( 7 ) }
        { renderSquare ( 8 ) }
      < / div >
    < / div >
  ) ;
}


Const  Game  =  ( )  =>  (
  < div  className = "game" >
    < div  className = "game-board" >
      < Board  / >
    < / div >
    < div  className = "game-info" >
      < div > { / * status * / } < / div >
      < ol > { / * TODO * / } < / ol >
    < / div >
  < / div >
) ;

ReactDOM . render (
  < Game  / > ,
  documento . getElementById ( 'root' )
) ;
função  calcularWinner ( quadrados )  {
   linhas  constantes =  [
    [ 0 ,  1 ,  2 ] ,
    [ 3 ,  4 ,  5 ] ,
    [ 6 ,  7 ,  8 ] ,
    [ 0 ,  3 ,  6 ] ,
    [ 1 ,  4 ,  7 ] ,
    [ 2 ,  5 ,  8 ] ,
    [ 0 ,  4 ,  8 ] ,
    [ 2 ,  4 ,  6 ] ,
  ] ;
  para  ( seja  i  =  0 ;  i  <  linhas . comprimento ;  i ++ )  {
    const  [ a ,  b ,  c ]  =  linhas [ i ] ;
    if  ( quadrados [ a ]  &&  quadrados [ a ]  ===  quadrados [ b ]  &&  quadrados [ a ]  ===  quadrados [ c ] )  {
       quadrados de retorno [ a ] ;
    }
  }
  return  null ;
}