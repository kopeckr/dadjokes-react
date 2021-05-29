import React, { useState } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [btnUp, setBtnUp] = useState(likes);
  const [btnDown, setBtnDown] = useState(dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>

      <div className="joke__likes">
        <button
          onClick={() => setBtnUp(btnUp + 1)}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {btnUp}
        </span>
        <button
          onClick={() => setBtnDown(btnDown + 1)}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {btnDown}
        </span>
      </div>
    </div>
  );
};

export default Joke;
