import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/shared/NavBar';
import diamond from './assets/diamond.png';
import star from './assets/star.png';
import chat from './assets/chat.png';
import chatText from './assets/chatText.png';
import './DashBoard.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';




export default function DashBoard() {
    const boxStyle = {backgroundColor: '#5DADEC', borderRadius: '1rem'};
    const buttonStyle = {backgroundColor: 'white', borderRadius: '1rem', color: 'black', fontWeight: 'bold'};
    const numElements = 4;
    const clickedState = new Array(numElements).fill(false);
    const [clicked, setClicked] = React.useState(clickedState);

    const handleClick = () => {
        setClicked(!clicked);
    }
    return (<div>
        <div className='header-container'>
            <img src={diamond} alt="diamond" width={35}/>
            <div>3000 XP</div>
            <div>4 EVENTS</div>
        </div>


            <div className='star-container'>
            <img src={chatText} alt='chat' className='chat'/>
                <div className='vertical-row' style={{display: 'flex'}}>
                    <img src={star} alt="star" className='star' onClick={handleClick}/>
                    {clicked ? <Box sx={boxStyle} textAlign='center'>
                        <div className='box-text' style={{display: 'block'}}>Explore study spots</div>
                        
                        <Button variant="contained" color="primary" sx={buttonStyle}>
                            BEGIN
                        </Button>
                    </Box> : ''}
                </div>
                <div className='vertical-row' style={{display: 'flex'}}>
                    <img src={star} alt="star" className='star'/>
                    {/* {clicked ? <Box sx={boxStyle} textAlign='center'>
                        <div className='box-text' style={{display: 'block'}}>Explore study spots</div>
                        
                        <Button variant="contained" color="primary" sx={buttonStyle}>
                            BEGIN
                        </Button>
                    </Box> : ''} */}
                </div>
                <div className='vertical-row' style={{display: 'flex'}}>
                    <img src={star} alt="star" className='star'/>
                    {/* {clicked ? <Box sx={boxStyle} textAlign='center'>
                        <div className='box-text' style={{display: 'block'}}>Explore study spots</div>
                        
                        <Button variant="contained" color="primary" sx={buttonStyle}>
                            BEGIN
                        </Button>
                    </Box> : ''} */}
                </div>
                <div className='vertical-row' style={{display: 'flex'}}>
                    <img src={star} alt="star" className='star'/>
                    {/* {clicked ? <Box sx={boxStyle} textAlign='center'>
                        <div className='box-text' style={{display: 'block'}}>Explore study spots</div>
                        
                        <Button variant="contained" color="primary" sx={buttonStyle}>
                            BEGIN
                        </Button>
                    </Box> : ''} */}
                </div>
            </div>    
            


        <NavBar />
    </div>)
}
