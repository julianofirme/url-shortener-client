import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';
import Input from '../components/Input';
import SearchButton from '../components/SearchButton';
import { UrlContext } from '../providers/urlProvider';

function Home() {
  const { setOriginalUrl, url } = useContext(UrlContext)


  const handleChange = (event: any) => {
    const {
      target: { value }
    } = event

    setOriginalUrl(value)
  }

  return (
    <Container>
      <h1 style={{ textAlign: 'center', fontSize: '56px' }}>
        Shortener your <span style={{ color: '#F37D63' }}>links</span>
        <br />
        with one click!
      </h1>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Input placeholder={'Paste your link'} onChange={handleChange} />
        <SearchButton value="Shortener" onClick={() => {}} />
      </Box>
    </Container>
  );
}

export default Home;
