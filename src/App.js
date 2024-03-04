
import './App.css';
import bg from "./images/running_water.jpg"
import Header from './components/Header';

function App() {

  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
  };

  return (
    <main className='h-screen w-screen' style={styles}>
      <Header />

      <div className='h-full w-full flex flex-col justify-center px-[4rem] ' >
          <h1 className='text-[#bee0ea] font-bold text-[5rem]' >Wobbee</h1>
          <h3 className='text-white text-[2rem] font-bold ' >Bathroom Fittings Wholesale</h3>

          <button className='w-[10rem] py-[6px] rounded-3xl bg-[#bee0ea] hover:bg-[#87989e] mt-[1rem]' >Contact Us</button>
      </div>

    </main>
  );
}

export default App;
