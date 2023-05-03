import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlSubmit = (e) => {
        e.preventDefault()
        dispatch(setNameTrainer(e.target.nameTrainer.value))
        navigate("/pokedex")
    }


  return (
    <section className="min-h-screen grid grid-rows-[1fr_auto]">
      <section>
        <article>
          <div >
            <img  src="/images/pokedex.svg" alt="" />
          </div>
          <h2>Hello Trainer¡</h2>
          <p>Give me your name to start!</p>
          <form onSubmit={handlSubmit}>
            <input id="nameTrainer" type="text" placeholder="Tu nombre ..." />
            <button>Start!</button>
          </form>
        </article>
      </section>

      {/*Footer*/}

      <Footer />
    </section>
  );
};

export default Home;
