import './App.css'
import { Greet } from './components/Greet';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Inputs } from './components/Inputs';
import { Container } from './components/Container';
function App() {
  const PersonName = {
    firstName: 'Nouman',
    lastName: 'ulHaq'
  }
  const PersonLisst = [
    {
      firstName: 'Nouman',
      lastName: 'ulHaq'
    }, {
      firstName: 'Imran',
      lastName: 'ulHaq'
    }, {
      firstName: 'Sufyan',
      lastName: 'ulHaq'
    }, {
      firstName: 'Ayan',
      lastName: 'ulHaq'
    }
  ]
  return (
    <div className="App">
      <Greet name='Nouman' message={10} />
      <Person name={PersonName} />
      <PersonList names={PersonLisst} />
      <Status status={'success'} />
      <Oscar>
        <Heading>Hello There</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('event', event, id)
      }} />
      <Inputs handleChange={event => console.log(event)} />
      <Container styles={{ border: '2px', color: 'red' }} />
    </div>
  );
}

export default App;
