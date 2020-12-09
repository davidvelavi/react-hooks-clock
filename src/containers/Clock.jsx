import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Base from '../components/Base';
import '../assets/styles/components/Clock.scss';

const Clock = () => {
  const [second, setSecond] = useState(moment().format('ss') * 6);
  const [minute, setMinute] = useState(moment().format('mm') * 6);
  const [hour, setHour] = useState(moment().format('hh') * 30);

  const _makeTimer = (timer, time, fn, factor = 6) => {
    return setTimeout(() => {
      fn(timer >= 360 ? factor : timer + factor);
    }, time);
  };

  const _getHand = (type) => {
    return document.getElementsByClassName(type)[0];
  };

  const _updateHand = (node, deg) => {
    node.style.transform = `rotate(${deg}deg)`;
  };

  useEffect(() => {
    const secondTimer = _makeTimer(second, 1000, setSecond);
    const secondHand = _getHand('second-hand');
    _updateHand(secondHand, second);
    return () => { clearInterval(secondTimer); };
  }, [second]);

  useEffect(() => {
    const minuteTimer = _makeTimer(minute, 60000 - (moment().format('ss') * 1000), setMinute);
    const minuteHand = _getHand('minute-hand');
    _updateHand(minuteHand, minute);
    return () => { clearInterval(minuteTimer); };
  }, [minute]);

  useEffect(() => {
    const hourTimer = _makeTimer(hour, 3.6e+6 - (((moment().format('mm') * 60) * 1000) + (moment().format('ss') * 1000)), setHour, 30);
    const hourHand = _getHand('hour-hand');
    _updateHand(hourHand, hour);
    return () => { clearInterval(hourTimer); };
  }, [hour]);

  return (
    <section className='clock'>
      <Base hours={[12, 3, 6, 9]} />
      <Base hours={[1, 4, 7, 10]} />
      <Base hours={[2, 5, 8, 11]} />
      <section className='center'>
        <div className='center cover' />
        <div className='hand hour-hand' />
        <div className='hand minute-hand' />
        <div className='hand second-hand' />
      </section>
    </section>
  );
};

export default Clock;
