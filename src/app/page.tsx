


import Header from '../components/Header';
import About from '../components/About';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',       
        height: '30vh',           
        textAlign: 'center',        
      }}
    >
      <Header />
      <h1>HELLO WORLD!</h1>
      <About />
    </div>
  );
}






