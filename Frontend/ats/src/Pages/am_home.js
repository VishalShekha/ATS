import React from 'react';
import Header from '../Components/Header'; 

const AmHome = () => {
    return (
        <div style={styles.pageContainer}>
            <Header />
            <main style={styles.content}>
                <h1>Welcome to AM Home</h1>
                <p>This is your homepage.</p>
            </main>
        </div>
    );
};

const styles = {
    pageContainer: {
        backgroundColor: 'blue', 
        height: '100vh', 
        margin: '0',
        padding: '0',
        color: '#fff', 
    },
    content: {
        padding: '20px',
        textAlign: 'center',
    },
};

export default AmHome;
