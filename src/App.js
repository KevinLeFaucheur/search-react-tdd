import { useState } from 'react';
import { styled } from 'styled-components';
import { Card } from './components/card/Card';
import { Search } from './components/searchbar/Search';
import { Select } from './components/select/Select';
import { Tag } from './components/tag/Tag';
import { TagContext } from './components/TagContext'
import { movies } from './data/movies';
import './App.css';

const App = () => {
  const [tags, setTags] = useState(['red', 'blue', 'green']);
  const options = ['Test1', 'Test2', 'Test3', 'Test4', 
    'Test5', 'Test6', 'Test7', 'Test8', 'Test9', 'Test10'];

  return (
    <Container className="App">
      <section id="search">
        <h2>Search with tag selection</h2>

        <Search />

        <TagContext.Provider value={{tags, setTags}}>
          <TagContainer>
            {tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}
          </TagContainer>

          <SelectContainer>
            <Select name='Titles' options={options} />
            <Select name='Genre' color={'#ED6454'} options={options} />
            <Select name='Directors' color={'#68D9A4'} options={options} />
          </SelectContainer>
        </TagContext.Provider>

      </section>

      <section>

        <h2>Results</h2>

        <CardContainer>
          {movies.map(movie => 
            <Card key={movie.id} movie={movie} />
          )}
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
