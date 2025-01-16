import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button onClick={goBack} style={styles.goBackButton}>
      {/* U-turn like arrow symbol */}
      <span style={styles.icon}>↩</span>
    </button>
  );
};

const styles = {
  goBackButton: {
    fontSize: '20px', // Adjust size of the icon
    background: 'none',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '24px', // Size of the icon
  },
};

export default GoBackButton;
