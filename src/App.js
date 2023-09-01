import { styled } from 'styled-components';
import './App.css';
import { Card } from './components/card/Card';
import { Search } from './components/searchbar/Search';
import { Select } from './components/select/Select';
import { Tag } from './components/tag/Tag';

const App = () => {
  const options = ['Test1', 'Test2', 'Test3', 'Test4'];


  return (
    <Container className="App">
      <section id="search">
        <h2>Search with tag selection</h2>

        <Search />

        <TagContainer>
          <Tag tag='Test' />
          <Tag tag='Test' />
          <Tag tag='Test' />
          <Tag tag='Test' />
        </TagContainer>

        <SelectContainer>
          <Select options={options} />
          <Select options={options} />
          <Select options={options} />
        </SelectContainer>

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

const TagContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
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
