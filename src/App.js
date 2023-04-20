import Contact from "./components/Contact";
import Header from "./components/Header";
import Wrapper from "./Wrapper";
import "./styles/app.css";
const contacts = [
  { name: "Roshan", contact: 988784545, add: "manamaiju" },
  { name: "Andrew", contact: 988784545, add: "newzealand" },
  { name: "Leonard", contact: 988784545, add: "Ireland" },
  { name: "Sudip", contact: 983843344, add: "koteshwor" },
];
const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="App">
          <h2>
            <Contact data={contacts[0]} />
            <Contact data={contacts[1]} />
            <Contact data={contacts[2]} />
            <Contact data={contacts[3]} />
          </h2>
        </div>
      </Wrapper>
    </>
  );
};

export default App;
