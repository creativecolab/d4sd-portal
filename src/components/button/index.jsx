import React from 'react';
import '../../styles/reset.css';
import './style.scss';

/**
 * Long-sized Button Component
 * @param {text} props 
 */
export const LongButton = (props) => {
  return (
    <button id="media-login-btn">{props.text}</button>
  );
}

/**
 * Small-sized Button Component
 * @param {text} props 
 */
export const SmallButton = (props) => {
  return (
    <button id="continue-btn">{props.text}</button>
  );
}

export const LongInputButton = (props) => {
  
}