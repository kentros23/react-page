
import './App.css';
import { ExperienciaAcademica } from './components/experiencia/ExperienciaAcademica';
import { ExperienciaProfesional } from './components/experiencia/ExperienciaProfesional';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/navbar/navbar';
import { PerfilProfesional } from './components/perfil/PerfilProfesional';
import { DatosPersonales } from './components/personal/DatosPersonales';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar    />   
        
        <DatosPersonales/>
        <PerfilProfesional/>
        <ExperienciaAcademica/>
        <ExperienciaProfesional/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
