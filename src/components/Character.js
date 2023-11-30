import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, TextField } from '@mui/material';
import { ArrowBack, Male, Female } from '@mui/icons-material';

import './Character.css';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      try {
        const characterData = await fetchCharacterData();
        setCharacters(characterData);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    })();
  }, [page, itemsPerPage]);

  const fetchCharacterData = async () => {
    const response = await axios.get(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${itemsPerPage}`);
    return response.data;
  };

  const handlePageChange = (e) => {
    setPage(Number(e.target.value));
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  const getGenderIcon = (gender) => {
    return gender === 'Male' ? <Male /> : <Female />;
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const renderCharacterCard = (character, index) => (
    <Card key={character.url} className="character-card" style={{ backgroundColor: getRandomColor() }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {character.name || 'No Name'}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Gender: {character.gender}
          {getGenderIcon(character.gender)}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Culture: {character.culture}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Born: {character.born || 'Unknown'}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Died: {character.died || 'Unknown'}
        </Typography>
        <Typography variant="h6">Aliases:</Typography>
        <ul>
          {character.aliases.map((alias, aliasIndex) => (
            <li key={aliasIndex}>{alias}</li>
          ))}
        </ul>
        <Typography variant="h6">Allegiances:</Typography>
        <ul>
          {character.allegiances.map((allegiance, allegianceIndex) => (
            <li key={allegianceIndex}>
              <a href={allegiance} target="_blank" rel="noreferrer">
                {allegiance}
              </a>
            </li>
          ))}
        </ul>
        <Typography variant="h6">Books:</Typography>
        <ul>
          {character.books.map((book, bookIndex) => (
            <li key={bookIndex}>
              <a href={book} target="_blank" rel="noreferrer">
                {book}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Link to="/" className="back-link">
        <ArrowBack /> Back
      </Link>
      <Container className="main-container">
        <Grid container spacing={2}>
          {characters.map((character, index) => (
            <Grid item key={character.url} xs={12} md={6} lg={4}>
              {renderCharacterCard(character, index)}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className="controls-container">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Page"
              type="number"
              id="page"
              variant="outlined"
              value={page}
              onChange={handlePageChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Items Per Page"
              type="number"
              id="itemsPerPage"
              variant="outlined"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Character;
