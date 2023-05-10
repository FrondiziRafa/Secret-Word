// CSS
import './GameOver.css'


export const GameOver = ({ retry, score }) => {
  return (
    <div>
        <h1>fim de jogo</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Tentar novamente</button>
    </div>
  )
}
