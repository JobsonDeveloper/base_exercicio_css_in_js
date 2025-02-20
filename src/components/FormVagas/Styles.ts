import { ChangeEvent, ReactNode } from 'react'
import styled from 'styled-components'

type CampoProps = {
  placeholder?: string
  onChange?: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined
  type?: string
}

type FormProps = {
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined
  children?: string | ReactNode
}

type BtnProps = {
  type?: string
  children: string | ReactNode
}

export const BtnPesquisar = styled.button<BtnProps>`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const InputElement = styled.input<CampoProps>`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrincipal};
`

export const Formulario = styled.form<FormProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
