import React from 'react';
import Header from '../../Components/Header';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import PostAddIcon from '@mui/icons-material/PostAdd'; 
import EditNoteIcon from '@mui/icons-material/EditNote'; 
import Sidebar from '../../Components/AM_Sidebar'; // Adjust the path as needed

const AmHome = () => {
    const buttonStyle = {
        backgroundColor: 'rgb(115, 49, 202)', 
        color: 'white', 
        flex: 1,
        width: '250px', 
        height: '80px', 
        fontSize: '16px',
        fontFamily: '"Roboto", sans-serif',
        textTransform: 'none',
        marginBottom: '20px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        border: '2px solid transparent',
        borderRadius: '8px', 
        transition: 'background-color 0.3s, color 0.3s, border 0.3s, box-shadow 0.3s', 
        textAlign: 'center', 
        padding: '10px', 
    };

    const handleMouseOver = (e) => {
        e.currentTarget.style.backgroundColor = '#FFFFFF'; 
        e.currentTarget.style.color = 'rgb(115, 49, 202)'; 
        e.currentTarget.style.border = '2px solid rgb(115, 49, 202)'; 
        e.currentTarget.style.boxShadow = '0px 4px 12px rgba(115, 49, 202, 0.5)'; 
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.backgroundColor = 'rgb(115, 49, 202)'; 
        e.currentTarget.style.color = '#FFFFFF'; 
        e.currentTarget.style.border = '2px solid transparent'; 
        e.currentTarget.style.boxShadow = 'none'; 
    };

    return (
        <div style={styles.pageContainer}>
            <Header />
            <div style={styles.mainContent}>
                <Sidebar />
                <div style={styles.content}>
                    <div style={styles.buttonBox}>
                        <Stack
                            direction="column"
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
        </div>
    );
};

const styles = {
    pageContainer: {
        backgroundColor: '#FFFFFF',
        height: '100vh', 
        margin: '0',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
    },
    mainContent: {
        display: 'flex',
        flexGrow: 1,
        marginTop: '64px', // Adjust this value if the header height changes
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', 
        textAlign: 'center',
        padding: '20px',
        flexGrow: 1,
    },
    buttonBox: {
        background: 'rgba(0, 0, 0, 0.05)', 
        width: '100%', 
        maxWidth: '700px', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        padding: '40px',
        textAlign: 'center',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
    },
    buttonStack: {
        width: '100%',
        alignItems: 'center',
    },
};

export default AmHome;
