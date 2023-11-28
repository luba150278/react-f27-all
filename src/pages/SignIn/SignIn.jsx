import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import FormAuth from '../../components/FormAuth/FormAuth';

export default function SignIn() {
  return (
    <>
      <Header />
      <section>
        <div className='container'>
          <FormAuth
            title='Sign in'
            link='/signup'
            titleLink='Need an account?'
            isSignUp={false}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
