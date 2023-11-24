import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { firstCards, nextCard } from '../../share/reducers/blackjack.reducer';

export default function BlackJack() {
  const { cards, totalGamer, totalDiler } = useSelector((state) => state.black);
  const dispatch = useDispatch();
  console.log(cards);
  const updateGamerCards = () => {
    dispatch(nextCard());
    const p = document.createElement('p');
    p.textContent = cards[cards.length - 1].title;
    document.getElementById('gamer-cards').appendChild(p)
  }
  return (
    <section>
      <div className='container'>
        {totalGamer === 21 && totalDiler === 21 && (
          <h1>{totalGamer === 21 ? 'Переміг гравець' : 'Гравець програв'}</h1>
        )}
        <div className='d-flex gap-4'>
          <Button onClick={() => dispatch(firstCards())}>Get cards</Button>
          <Button onClick={() => updateGamerCards()}>Next Card</Button>
          <Button onClick={() => dispatch(stop())}>Stop</Button>
        </div>
        <div className='field'>
          <div>
            <h2>User: {totalGamer}</h2>
            {cards.length > 0 && (
              <div id="gamer-cards">
                <p>{cards[0].title}</p>
                <p>{cards[1].title}</p>
              </div>
            )}
          </div>
          <div>
            <h2>Diler: {totalDiler}</h2>
            {cards.length > 0 && (
              <>
                <p>{cards[2].title}</p>
                <p></p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
