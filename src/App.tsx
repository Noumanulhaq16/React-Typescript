import './App.css'
// import { Greet } from './components/Greet';
// import { Person } from './components/Person'
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Button } from './components/Button';
// import { Inputs } from './components/Inputs';
// import { Container } from './components/Container';
// import { UserContextProvider } from './components/context/UserContext';
// import { User } from './components/context/User';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Box } from './components/context/box';
// import { MutableRef } f  rom './components/ref/MutableRef';
// import { List } from './components/generic/List';
// import { RandomNumber } from './components/restriction/RandomNumber';
import { Toaster } from './components/templete/Toaster';
function App() {
  // const PersonName = {
  //   firstName: 'Nouman',
  //   lastName: 'ulHaq'
  // }
  // const PersonLisst = [
  //   {
  //     firstName: 'Nouman',
  //     lastName: 'ulHaq'
  //   }, {
  //     firstName: 'Imran',
  //     lastName: 'ulHaq'
  //   }, {
  //     firstName: 'Sufyan',
  //     lastName: 'ulHaq'
  //   }, {
  //     firstName: 'Ayan',
  //     lastName: 'ulHaq'
  //   }
  // ]
  return (
    <div className="App">
        {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      {/* <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      /> */}
      {/* <MutableRef />   */}
      {/* <UserContextProvider>
        <ThemeContextProvider>
          <User />
        </ThemeContextProvider>
      </UserContextProvider> */}
      {/* <Greet name='Nouman' message={10} />
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
      <Container styles={{ border: '2px', color: 'red' }} /> */}
      {/* <RandomNumber  value={20} isPositive  /> */}
      <Toaster position='center'  />
    </div>
  );
}

export default App;
