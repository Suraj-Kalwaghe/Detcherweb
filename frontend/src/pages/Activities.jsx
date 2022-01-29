import React, { useState } from 'react';
import axios from 'axios';

export const Activities = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  async function handleFormSubmit(data) {
    const response = await axios.post('/api/v1', data);
    if (response.statusText === 'OK')
      setFormMessage('Form Submitted Successfully');
    else setFormMessage(`Error Occured ${response.status}`);
  }

  const handleForm = e => {
    e.preventDefault();
    handleFormSubmit({ name: name, email: email, message: message });
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => {
      setFormMessage('');
    }, 10000);
  };

  const customFilter = {
    filter: 'grayscale(100%) contrast(120%) opacity(16%)',
  };

  return (
    <div>
      <table
        // style='margin:0 0 10px 0; width:244px; background:#fff; border:1px solid #ccc;'
        cellspacing='0'
        cellpadding='0'>
        <tr>
          <td>
            <a href='https://www.miniclip.com/games/short-ride/en/'>
              <img
                src='https://static.miniclipcdn.com/content/game-icons/small/shortride_70x59.jpg'
                width='70'
                height='59'
                align='left'
                alt='Games at Miniclip.com - Short Ride'
              />
              <a href='https://www.miniclip.com/games/short-ride/en/'>
                Short Ride
              </a>
              <p>It's a Short Life! With so many dumb ways to die!</p>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href='https://www.miniclip.com/games/short-ride/en/'
              title='Games at Miniclip.com'>
              Play this free game now!
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};
