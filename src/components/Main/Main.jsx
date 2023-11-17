import { useReducer, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { books } from '../../share/data';
import Arrows from '../Arrows/Arrows';
import styles from './Main.module.css';
// action - об'єкт з одним обов'язковим полем 'type', друге поле 'payload' - необов'язкове - данні для роботи зі state
const reducer = (state, action) => {
  const { type, payload } = action;
  const id = payload.id ? payload.id : payload;
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
    case 'new_book':
      state.push(payload);
      return [...state];
    case 'change_book':
      if (ind !== -1) {
        state[ind] = payload;
      }
      return [...state];
    default:
      return state;
  }
};

const initialForm = { title: '', author: '', count: 1 };
export default function Main() {
  const [state, dispatch] = useReducer(reducer, books);
  const [form, setForm] = useState(initialForm);
  const [changedId, setChangedId] = useState(0);

  const changeInput = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const sumbit = (e) => {
    e.preventDefault();
    const id = Date.now();

    if (changedId === 0) {
      const payload = { ...form, id };
      dispatch({ type: 'new_book', payload });
    } else {
      const payload = { ...form, id: changedId };
      dispatch({ type: 'change_book', payload });
      setForm(initialForm);
      setChangedId(0);
    }
  };

  const changeBook = (id) => {
    setChangedId(id);
    const book = state.find((item) => item.id === id);
    if (book) {
      setForm({ ...book });
    } else {
      setChangedId(0);
    }
  };
  return (
    <section>
      <div className='container my-5'>
        <Form className='d-flex gap-5 mb-5' onSubmit={(e) => sumbit(e)}>
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
          <div key='head-book' className={styles.item}>
            <p>#</p>
            <p>Title <Arrows name='title' changeSort={changeSort} isAZ={true}/></p>
            <p>Author</p>
            <p>Count</p>
            <p>Delete</p>
            <p>Add</p>
            <p>Minus</p>
            <p>Change</p>
          </div>
          {state.map((book, i) => (
            <div key={book.id} className={styles.item}>
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

              <Button variant='warning' onClick={() => changeBook(book.id)}>
                Change
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
