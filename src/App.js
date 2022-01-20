import './App.css';
import AutoCompleteComponent from './Components/AutoComplete';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1>UI Component for Autocomplete</h1>
      </header>
      <AutoCompleteComponent
        suggestions={[
          "JavaScript",
          "Java",
          "Node",
          "React",
          "Angular",
          "Python",
          "Ruby",
          "HTML",
          "CSS",
          "C++",
          "C#",
          "PHP",
          "Vuejs",
          "Jest",
          "Nextjs",
          "Gatsby",
          "NPM",
          "Yarn",
          "Redux"
          

        ]}
      />
    </div>
  );
}

export default App;
