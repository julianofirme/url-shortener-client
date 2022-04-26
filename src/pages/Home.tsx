import { Box, Container } from '@mui/material';
import React, { useContext, useState } from 'react';
import CopyButton from '../components/CopyButton';
import Input from '../components/Input';
import SearchButton from '../components/SearchButton';
import { UrlContext } from '../providers/urlProvider';

function Home() {
  const { setOriginalUrl, url } = useContext(UrlContext)
  const [urlToShorten, setUrlToShorten] = useState<string>('')


  const handleChange = (event: any) => {
    const {
      target: { value }
    } = event

    setUrlToShorten(value)
  }

  const handleShorten = () => {
    setOriginalUrl(urlToShorten)
  }

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url)
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
        <SearchButton value="Shortener" onClick={handleShorten} />
      </Box>

      {
        url && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3
              style={{ textAlign: 'center', color: '#F37D63' }}
            >
              <a style={{ color: 'white' }} href={url}>{url}</a>
            </h3>
            <CopyButton value='Copy url' onClick={handleCopyUrl} />
          </Box>
        )
      }

    </Container>
  );
}

export default Home;
