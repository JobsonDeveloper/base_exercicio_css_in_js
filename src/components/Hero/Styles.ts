import styled from 'styled-components'
import { Container } from '../Container/Container'

export const Formulario = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const ContainerHero = styled(Container)`
  position: relative;
`

export const TituloDois = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  color: white;
  position: relative;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
