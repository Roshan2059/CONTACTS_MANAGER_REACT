import Contact from "./components/Contact";
import Header from "./components/Header";
import "./styles/app.css";
const contacts = [
  { name: "Roshan", contact: 988784545, add: "manamaiju" },
  { name: "Andrew", contact: 988784545, add: "manamaiju" },
  { name: "Leonard", contact: 988784545, add: "manamaiju" },
];
const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <h2>
          <Contact data={contacts[0]} />
          <Contact data={contacts[1]} />
          <Contact data={contacts[2]} />
        </h2>
      </div>
    </>
  );
};

export default App;
