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
    <section className="min-h-screen grid bg-cover bg-no-repeat bg-bottom bg-[url('/images/pokeball2.jpg')] grid-rows-[1fr_auto]">
      <section>
        <article className="grid justify-center">
          <div >
            <img className="hover:animate-pulse" src="/images/pokedex.svg" alt="" />
          </div>
          <h2 className="font-bold text-center text-red-500 text-2xl ">Hello Trainer¡</h2>
          <p className="text-black font-bold text-center text-xl ">Give me your name to start!</p>
          <form className="flex justify-center h-[30px]" onSubmit={handlSubmit}>
            <input className="w-[60%] bg-transparent  sm:w-[30%] xl:w-[80%] rounded-md drop-shadow-4xl border-4 border-red-600 placeholder-red-700 font-bold"  id="nameTrainer" type="text"  placeholder="Tu nombre ..." />
            <button className="bg-red-500 drop-shadow-4xl w-16 font-bold rounded-md">Start!</button>
          </form>
        </article>
      </section>

      {/*Footer*/}

      <Footer />
    </section>
  );
};

export default Home;
