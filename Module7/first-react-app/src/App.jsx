import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDisplayer from './components/PropsDisplayer'
import City from './components/City'
import Pet from './components/Pet'
import FullName from './components/FullName'
import ComplexComment from './components/ComplexComment'
import Comment from './components/Comment'
import Callout from './components/Callout'
import MoviesList from './components/MoviesList'
import MoodChanger from './components/MoodChanger'
import BirthdayTranslator from './components/BirthdayTranslator'
import Weather from './components/Weather'
import LoginForm from './components/LoginForm'
import ExplodingBomb from './components/ExplodingBomb'
import Greeting from './components/Greeting'
import BigCats from './components/BigCats'
import Emoji from './components/Emoji'
import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'
import RefCounter from './components/refCounter'
import VideoPlayer from './components/VideoPlayer'
import ReducerCounter from './components/ReducerCounter'
import PostListReducer from './components/PostListReducer'
import SubscribeForm from './components/SubscribeForm'
import ActivityFinders from './components/ActivityFinders'
import { UserProvider } from './context/UserContext'
import MyThemeProvider from './context/MyThemeContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
import { EmojiProvider } from './context/EmojiContext'


// function Welcome(props) { // custom Welcome component
// return (
// <div className="Welcome">
// {/* if the 'name' prop exists, render it on the screen */}
// <h3>Welcome {props.name}!</h3>
// {/* if this component has children, render them here */}
// {props.children}
// </div>
// )
// }

// const comment = {
// date: new Date(),
// text: 'I hope you enjoy learning React!',
// author: { // author is also an object
// name: 'Hello Kitty',
// avatarUrl: 'https://placecats.com/g/64/64',
// },
// };

// const divStyle = { background: 'lightblue', padding: '1em', fontWeight: 'bold' };

// function Welcome(props) {
// return (
// <div className="componentBox">
// <h3>Welcome {props.name}!</h3>
// </div>
// )
// }

// function ExampleComponent() {
// return (
// <div className="ExampleComponent componentBox">
// <div style={divStyle}>This is a styled div.</div>
// <h1>My Example Component</h1>
// <p>My first React component!</p>
// </div>
// )
// }

function App() {
  const [count, setCount] = useState(0)
  const invalidJSX = <p>paragraph 1</p>;
  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
const spideyJSX = (<div>
<h3>{spiderman.name}</h3>
<blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
</div>);

const spideyJSXFragment = (<>
<h3>{spiderman.name}</h3>

<blockquote>{spiderman.catchPhrase}</blockquote>
<cite>{spiderman.alterEgo}</cite>
</>);



  return (
    <>
        <UserProvider>
      <MyThemeProvider>
        <EmojiProvider>
        
    
    <NavBar/>
    <AppRoutes/>

    {/* <Greeting name="Sean" children="stop playing league of legends"/>
    
    <ExplodingBomb /> */}

    {/* <BigCats/> */}

    {/* <ClockDisplay/> */}

    {/* <ActivityFinder/> */}
    {/* <RefCounter/> */}

    {/* <VideoPlayer/> */}
    {/* <ReducerCounter/> */}
    {/* <PostListReducer/> */}

    {/* <SubscribeForm/> */}


    {/* <ActivityFinders/> */}
    {/* <LoginForm/> */}


    
    {/* <Emoji/> */}

    
    {/* <Weather/> */}

    {/* <BirthdayTranslator/> */}

    {/* <MoodChanger/> */}
          {/* <Callout title="Nested React Component" message="Simple message with a fancy box applied via composition">
            <FullName first="Elon" last="Musk" />
            </Callout> */}
           
           {/* <MoviesList/> */}

    {/* <PropsDisplayer/>
    <PropsDisplayer myProp="first prop"/>
    <PropsDisplayer prop1="first" prop2="second" prop3={3}/>
    <PropsDisplayer name="Harry Styles" age={29}/>
    <PropsDisplayer pets={["cat", "dog", "goldfish"]}/>
    <PropsDisplayer reactLogo={reactLogo} buttonCount={count}/>

    <City name="Sydney"/>
    <City name="Melbourne" state="VIC"/>
    <City name="Chicago" state="Illinois" country="USA"/>
    <City name="Newcastle">
      <div>Newcastle is a harbour city in the Australian state of New South Wales.</div>
      <div><strong>Population:</strong> 322,278 (2016)</div>
    </City>
      
      <Pet name="Frankie" type="stupid"/>

      <FullName first="Joe" last="Thomas"/>

      <ComplexComment author={comment.author}
date={comment.date}
text={comment.text}/>




     <Comment author={comment.author}
date={comment.date}
text={comment.text}/> 

     {spideyJSX}
    {spideyJSXFragment} 
    <ExampleComponent/>
    <Welcome name="students">
    <p>Children of Welcome</p>
    </Welcome> 
       <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}

            </EmojiProvider>
          </MyThemeProvider>
    </UserProvider>
    </>
  )
}

export default App
