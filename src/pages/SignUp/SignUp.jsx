import Footer from '../../components/Footer/Footer';
import FormAuth from '../../components/FormAuth/FormAuth';
import Header from '../../components/Header/Header';

export default function SignUp() {
  return (
    <>
      <Header />
      <section>
        <div className='container'>
          <FormAuth
            title='Sign up'
            link='/signin'
            titleLink='Have an account?'
            isSignUp={true}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
