import React from 'react';

const NotFound = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    emoji: {
      fontSize: '5rem',
      marginBottom: '50px',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1rem',
      marginTop:'2px',
      marginBottom: '30px',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 30px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.emoji}>😕</div>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.paragraph}>Oops! The page you are looking for might be currently under development.</p>
      <button style={styles.button} onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default NotFound;
