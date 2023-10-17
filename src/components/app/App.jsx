import Footer from '../footer/Footer';
import Header from '../header/Header';
import Layout from '../layout/Layout';
import List from '../list/List';
import styles from './App.module.css';
import img1 from '../../images/1.jpg';
import Arrow from '../svg/Arrow';

function App() {
  const title = 'Hello, User';
  const headerTitle = 'Header!!!!';
  const menu = 'Menu';
  const arr = ['apple', 'android', 'samsung'];
  const items = [
    { title: 'Apple', desc: 'Apple desc', id: 1, price: 10 },
    { title: 'Orange', desc: 'Orange desc', id: 2, price: 20 },
    { title: 'Peach', desc: 'Peach desc', id: 3, price: 30 },
    { title: 'Lemon', desc: 'Lemon desc', id: 4, price: 40 },
    { title: 'Grape', desc: 'Grape desc', id: 5, price: 50 },
  ];

  const isAuth = true;
  const error = '';
  return (
    <>
      <Header headerTitle={headerTitle} headerMenu={menu} />
      <div className='container'>
        {isAuth ? <p>Hello, User</p> : <p>Hey, please log in</p>}
        {error && error !== '' && <p className={styles.error}>{error}</p>}
        <Arrow width='30' height='30' fill='#000' />
        <Arrow width='50' height='50' fill='#ea9017' />
        <Arrow width='70' height='70' fill='#064017' />
        <Arrow width='90' height='90' fill='#442631' classIcon='down' />
        <img
          src='https://kyiv24.news/wp-content/uploads/2020/10/osin-pes-unsplash-01.10.2020-3.jpg'
          alt=''
          width='300'
        />
        <img src={img1} alt='' width='300' />
        <List arr={arr} objArr={items} />
        <div className={styles['app-wrap']} id='app'>
          {title}
        </div>
        <Layout>
          <p>Lorem lorem lorem</p>
        </Layout>

        <Layout>
          <span>SPAN SPAN</span>
        </Layout>

        <Layout>
          <h1>Page Title</h1>
        </Layout>
      </div>
      <Footer isAqua={true} />
    </>
  );
}

export default App;
