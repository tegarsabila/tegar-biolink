import React from 'react';
import '../styles/BodyItem.css';

const BodyItem = ({animate = '', icon = '', url = '#', title = '', targetBlank = false }) => {
  return (
    <li className={animate}>
      {targetBlank ? (
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          <i class={icon} aria-hidden="true"></i> {title}
        </a>
      ) : (
        <a href={url} className='link'>
          <i class="fab fa-instagram" aria-hidden="true"></i> {title}
        </a>
      )}
    </li>
  );
};

export default BodyItem;
