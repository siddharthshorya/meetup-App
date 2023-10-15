import styled from 'styled-components'

export const PageMainContainer = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`

export const Nav = styled.nav`
  padding: 15px 8%;
`

export const Logo = styled.img`
  width: 150px;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10%;
  flex-grow: 1;
`

export const RegisterHeading = styled.h1`
  font-family: Roboto;
  text-align: center;
  color: #334155;
  font-weight: 500;
  margin: 10px 0;
  font-size: 42px;
`

export const RegisterPara = styled.p`
  font-family: Roboto;
  text-align: center;
  color: #64748b;
  margin: 15px 0;
`

export const RegisterButton = styled.button`
  background-color: #2563eb;
  padding: 8px 12px;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-bottom: 20px;
  font-weight: 600;
`
export const Image = styled.img`
  width: ${props => props.imageWidth};
`

export const ImageFormContainer = styled.div`
  display: flex;
  padding: 10px;
`

export const Form = styled.form`
  width: 50%;
`

export const LabelInputContainer = styled.div`
  margin: 15px auto;
  width: 80%;
`
export const Label = styled.label`
  font-family: Roboto;
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`
export const Input = styled.input`
  padding: 5px;
  width: 100%;
  outline: none;
  border-radius: 4px;
  border: 1px solid #00000050;
`
export const RegisterNowButton = styled.button`
  background-color: #2563eb;
  padding: 8px 12px;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-left: 10%;
  font-weight: 600;
`

export const Select = styled.select`
  padding: 5px;
  width: 100%;
  outline: none;
  border-radius: 4px;
  border: 1px solid #00000050;
`

export const Option = styled.option`
  padding: 5px;
  width: 100%;
`
export const ErrorMsg = styled.p`
  color: red;
  font-family: Roboto;
  font-size: 13px;
  margin: 10px 0 5px 10%;
`
export const Greeting = styled.h1`
  font-size: 42px;
  font-family: Roboto;
  color: #3b82f6;
`
