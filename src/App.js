import { styled } from 'styled-components';
import './App.css';
import { Card } from './components/card/Card';
import { Search } from './components/searchbar/Search';
import { Select } from './components/select/Select';

function App() {
  return (
    <Container className="App">
      <section id="search">
        <h2>Search with tag selection</h2>

        <Search />

        <SelectContainer>
          <Select />
          <Select />
          <Select />
        </SelectContainer>

        <div id="search__selects"></div>
      </section>

      <section>
        <h2>Results</h2>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </section>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default App;
