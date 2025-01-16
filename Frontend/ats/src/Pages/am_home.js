import React from 'react';
import Header from '../Components/Header';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import PostAddIcon from '@mui/icons-material/PostAdd'; 
import EditNoteIcon from '@mui/icons-material/EditNote'; 

const AmHome = () => {
    const buttonStyle = {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        flex: 1,
        maxWidth: '30%',
        height: '120px',
        borderRadius: '10px',
        transition: 'transform 0.3s',
        fontSize: '18px',
        fontFamily: '"Roboto", sans-serif',
        textTransform: 'none',
    };

    const handleMouseOver = (e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

    return (
        <div style={styles.pageContainer}>
            <Header />
            <div style={styles.content}>
                <div style={styles.buttonBox}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        style={styles.buttonStack}
                    >
                        <Button
                            variant="contained"
                            startIcon={<PersonAddIcon />} 
                            style={buttonStyle}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            Create Client
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<PostAddIcon />} 
                            style={buttonStyle}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            Add Requirement
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<EditNoteIcon />} 
                            style={buttonStyle}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            View/Edit Requirements
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        backgroundColor: '#FFFFFF',
        height: '100vh',
        margin: '0',
        padding: '0',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '20px',
    },
    buttonBox: {
        background: 'linear-gradient(to bottom, #112E3E, #1A4C63)', 
        width: '100%', 
        maxWidth: '1200px', 
        borderRadius: '15px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        padding: '40px',
        textAlign: 'center',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        height: '100%',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
    },
    buttonStack: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};

export default AmHome;
