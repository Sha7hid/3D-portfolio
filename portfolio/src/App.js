import styled from 'styled-components'
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';

const Container = styled.div`
height: 100vh;
scroll-snap-type : y mandatory;
scroll-behaviour: smooth;
overflow-y: auto;
color: white;
background: url("./img/bg.jpg");
scrollbar-width:none;
&::-webkit-scrollbar{
  display : none;
}
`
function App() {
  return (
   <div>
    <Container>
    <Hero/>
    <Who/>
    <Works/>
    <Contact/>
    </Container>
    
   </div>
  );
}

export default App;
