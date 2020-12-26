import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Sample saying: <br />
      Add {isIncome ? <strong>Income </strong> : <strong>Expence </strong>}
      for {isIncome ? <strong>$100 </strong> : <strong>$50 </strong>}
        in Category {isIncome ? <strong>Salary </strong> : <strong>Travel </strong>}
      for {isIncome ? <strong>Monday </strong> : <strong>Friday </strong>}
    </div>
  );
};

export default InfoCard;
