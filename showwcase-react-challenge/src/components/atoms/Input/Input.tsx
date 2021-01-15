import React from "react";
import styled from "styled-components";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ onChange }: InputProps) => {

  const Input = styled.input`
  width: 16rem;
  border: 1px solid gray;
  box-shadow: 2px 4px lightgray;
  `

  return (
    <>

      <Input type="text" onChange={onChange}/>

    </>
  )
}

export default Input;