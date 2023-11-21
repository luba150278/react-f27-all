import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './Main.module.css';
import validator from 'validator';


const initialForm = { email: '', phone: '' };
export default function Main() {
  const [form, setForm] = useState(initialForm);
  const sumbit = (e) => {
    e.preventDefault();
  }
  const changeInput = (e) => {
    setForm({ ...form, fo})
  }
  return (
    <section>
      <div className='container my-5'>
        <Form className='d-flex gap-5 mb-5' onSubmit={(e) => sumbit(e)}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder='Email'
              name='email'
              value={form.email}
              onChange={(e) => changeInput(e)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='phone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder='Phone'
              value={form.phone}
              name='phone'
              onChange={(e) => changeInput(e)}
            />
          </Form.Group>          

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
       
      </div>
    </section>
  );
}
