import styled, { keyframes } from 'styled-components'

export const Button = styled.button`
  border: 2px solid #4caf50;
  border-radius: 8px;
  background-color: ${({ variant }: { variant?: 'outline' | undefined }) =>
    variant === 'outline' ? '#fff' : '#4caf50'};
  color: ${({ variant }: { variant?: 'outline' | undefined }) =>
    variant === 'outline' ? '#4caf50' : '#fff'};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${({ variant }: { variant?: 'outline' | undefined }) =>
      variant !== 'outline' ? '#fff' : '#4caf50'};
    color: ${({ variant }: { variant?: 'outline' | undefined }) =>
      variant !== 'outline' ? '#4caf50' : '#fff'};
  }
`

export const FancyButton = styled(Button)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`

export const SubmitButton = styled(Button).attrs({
  type: 'submit',
})`
  box-shadow: 0 9px #999;
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
  src: ${({ src }: { src: string }) => src};
`

export const DarkButton = styled(Button)`
  border: 2px solid
    ${({ theme }: { theme: { dark: { primary: string } } }) =>
      theme.dark.primary};
  background-color: ${({ theme }: { theme: { dark: { primary: string } } }) =>
    theme.dark.primary};
  color: ${({ theme }: { theme: { dark: { color: string } } }) =>
    theme.dark.color};
`
