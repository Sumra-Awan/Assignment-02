


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
      <h1>This Is Home Page</h1>
      <h2>Hi!</h2>
      <About />
    </div>
  );
}






