import './App.css';

function App() {
  return (
    <div className="App">
      <section id="search">
        <h2>Search with tag selection</h2>

        <div id="search__bar">
          <input id="search__input" type="search" name="search" placeholder="Search here" />
        </div>

        <div id="search__tags"></div>

        <div id="search__selects"></div>
      </section>

      <section>
        <h2>Results</h2>
      </section>
    </div>
  );
}

export default App;
