import './App.css'
import { ProjectCard } from './components/projectCard'

function App() {

  return (
    <>
      <header>
        <img className="profile" src="https://avatars.githubusercontent.com/u/11763362?v=4&" alt="Foto do desenvolvedor" />
        <h1>Victor Matheus Barbosa Tavares</h1>
        <p>
          Professor e Desenvolvedor de jogos apaixonado por programação. <br />
          Experiente com Unreal e uso muito a Unity, mas minha paixão é a Godot.
        </p>
      </header>

      <div className="container">
        <div className="section">
          <h2>Sobre mim</h2>
          <p>
            Meu objetivo é desenvolver jogos cada vez melhores até o momento em que eu acredite que desenvolvi o melhor jogo que conseguiria,
            até que consiga implementar as mecânicas mais marcantes nos jogos que joguei na minha vida, até que eu tenha conseguido explorar
            cada possibilidade que a programação e as ferramentas que as game engines me disponibilizaram.
          </p>
        </div>

        <div className="section">
          <h2>Projetos</h2>
          <div className="projects">
            <ProjectCard projectName="Infinity Runner Vertical"
              projectImg="https://img.itch.zone/aW1nLzYxMDY1NzIucG5n/105x83%23/yXYtvS.png"
              projectLink="https://matheusum.itch.io/infinity-runner-vertical" />

            <ProjectCard projectName="Asteroids"
              projectImg="https://img.itch.zone/aW1nLzYxMTczNzMucG5n/105x83%23/yhLf0m.png"
              projectLink="https://matheusum.itch.io/asteroids" />

            <ProjectCard projectName="Geek Brawl"
              projectImg="https://img.itch.zone/aW1nLzY1NDc4MzkucG5n/105x83%23/Kg7i7u.png"
              projectLink="https://matheusum.itch.io/geek-brawl" />

            <ProjectCard projectName="Sky Takedown"
              projectImg="https://img.itch.zone/aW1nLzc3OTM0NjgucG5n/105x83%23/Kgc%2FhV.png"
              projectLink="https://matheusum.itch.io/sky-takedown" />

            <ProjectCard projectName="Spelling"
              projectImg="https://img.itch.zone/aW1nLzg3NDkwODkucG5n/105x83%23/NKrsEx.png"
              projectLink="https://matheusum.itch.io/spelling" />

            <ProjectCard projectName="Farm City"
              projectImg="https://img.itch.zone/aW1nLzYzNjI0ODMucG5n/105x83%23/wD4bhr.png"
              projectLink="https://matheusum.itch.io/farm-city" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
