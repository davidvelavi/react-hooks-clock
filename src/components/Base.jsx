import React from 'react';
import Hour from './Hour';
import '../assets/styles/components/Base.scss';

const Base = ({ hours }) => {
  return (
    <section className='base'>
      {
        hours.map((item) => (<Hour hour={item} key={item} />))
      }
    </section>
  );
};

export default Base;
