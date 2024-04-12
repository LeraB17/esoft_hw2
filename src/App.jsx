import './App.css'
import Avatar from './components/Avatar/Avatar'
import CompetenceColumn from './components/CompetenceColumn/CompetenceColumn'

function App() {

  let competencies_now = [
    { "name": "Html", "image": "competence_images/html.png", },
    { "name": "Css", "image": "competence_images/css.png", },
    { "name": "PostgreSQL", "image": " competence_images/postgresql.png", },
    { "name": "Memology", "image": "competence_images/memes.jpg", },
  ]
  let competencies_want = [
    { "name": "NodeJS", "image": "competence_images/nodejs.png", },
    { "name": "JavaScript", "image": "competence_images/js.png", },
    { "name": "Typescript", "image": "competence_images/typescript.png", },
    { "name": "React", "image": "competence_images/react.png", },
    { "name": "Vue", "image": "competence_images/vue.png", },
    { "name": "WebSocket", "image": "competence_images/websocket.jpg", },
    { "name": "Git", "image": "competence_images/git.png", },
    { "name": "CI/CD", "image": "competence_images/cicd.png", },
    { "name": "Docker", "image": "competence_images/docker.jpg", },
    { "name": "Testing", "image": "competence_images/testing.png", },
  ]

  let user = {
    "image": 'images/avatar.jpg',
    "image2": 'images/мяу.jpg',
    "name": "Бородина Валерия Александровна",
    "github": "https://github.com/LeraB17",
    "competencies": competencies_now,
    "competencies_want": competencies_want,
  }

  return (
    <div className='container'>
      <Avatar user={user} className="block1" />
      <CompetenceColumn title={'Мои компетенции'} competencies={user?.competencies} />
      <CompetenceColumn title={'Хочу изучить / изучаю'} competencies={user?.competencies_want} />
    </div>
  )
}

export default App
