import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const buttonStyle = {display: 'block'};
  const navigate = useNavigate();
  function handleClick() {
    navigate('/result');
  }

  return (
    <div style={{padding: 20}}>
      What books can you find in this library?
      <Button variant="text" sx={buttonStyle} onClick={handleClick}>Option A</Button>
      <Button variant="text" sx={buttonStyle} onClick={handleClick}>Option B</Button>
      <Button variant="text" sx={buttonStyle} onClick={handleClick}>Option C</Button>
    </div>
  );
}