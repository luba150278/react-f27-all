import { useReducer, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { books } from '../../share/data';
import styles from './Main.module.css';
// action - об'єкт з одним обов'язковим полем 'type', друге поле 'payload' - необов'язкове - данні для роботи зі state
const reducer = (state, action) => {
  const { type, payload } = action;
  const id = payload;
  const ind = state.findIndex((item) => item.id === id);
  switch (type) {
    case 'add':
      if (ind !== -1) {
        state[ind].count += 1;
      }
      return [...state];

    case 'minus':
      if (ind !== -1) {
        state[ind].count -= 1;
      }
      return [...state];
    case 'delete':
      if (ind !== -1) {
        const arr = [...state.slice(0, ind), ...state.slice(ind + 1)];
        return arr;
      }
    default:
      return state;
  }
};
export default function Main() {
  const [state, dispatch] = useReducer(reducer, books);
  const [form, setForm] = useState({ title: '', author: '', count: 1 });

  const changeInput = (e) => {};

  const sumbit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <div className='container my-5'>
        <Form>
          <Form.Group className='mb-3' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder='Title'
              name='title'
              value={form.title}
              onChange={(e) => changeInput(e)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='author'>
            <Form.Label>Author</Form.Label>
            <Form.Control
              placeholder='Author'
              value={form.author}
              name='author'
              onChange={(e) => changeInput(e)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='count'>
            <Form.Label>Count</Form.Label>
            <Form.Control
              type='number'
              value={form.count}
              placeholder='count'
              name='count'
              onChange={(e) => changeInput(e)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        <div className={styles.grid}>
          {state.map((book, i) => (
            <div key={book.id} className='d-flex gap-2 align-items-center'>
              <p>{i + 1}</p>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.count}</p>
              <Button
                variant='danger'
                onClick={() => dispatch({ type: 'delete', payload: book.id })}
              >
                Del
              </Button>
              <Button
                variant='success'
                onClick={() => dispatch({ type: 'add', payload: book.id })}
              >
                Add
              </Button>
              <Button
                onClick={() => dispatch({ type: 'minus', payload: book.id })}
              >
                Minus
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
