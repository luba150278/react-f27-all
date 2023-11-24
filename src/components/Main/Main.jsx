import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, changeValue } from '../../share/reducers/counter.reducer';
//import styles

export default function Main() {
  const [act, setAct] = useState('+');
  const [val, setVal] = useState(0);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <section>
      <div className='container my-5'>
        <div>
          <div className='d-flex gap-4'>
            <input
              type='number'
              onChange={(e) => setVal(e.target.value)}
              value={val}
            />
            <input onChange={(e) => setAct(e.target.value)} value={act} />
          </div>
          <p><span className="fw-bold">Current</span>: {counter}</p>
          <div className='d-flex gap-4'>
            <Button onClick={() => dispatch(increment())}>+</Button>
            <Button onClick={() => dispatch(decrement())}>-</Button>
            <Button onClick={() => dispatch(changeValue({ act, val }))}>
              change
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
