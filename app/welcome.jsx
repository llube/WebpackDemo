
import React from 'react';

export function Welcome(props){
  console.log(props)
  return (
    <h1>Hello, {props.name}</h1>
  )
}