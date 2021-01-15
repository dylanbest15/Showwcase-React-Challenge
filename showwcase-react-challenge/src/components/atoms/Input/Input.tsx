import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }: InputProps) => {

  const Input = styled.input`
  width: 18rem;
  border: 1px solid gray;
  box-shadow: 2px 4px lightgray;
  padding: 3px 10px 3px 10px;
  `

  return (
    <>

      <Input type="text" placeholder={placeholder} onChange={onChange}/>

    </>
  )
}

export default Input;