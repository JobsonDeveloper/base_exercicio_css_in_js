import React from 'react'
import { ContainerElement } from './Styles'

type ContainerProps = {
  children: React.ReactNode
}
export const Container = (props: ContainerProps) => {
  return <ContainerElement>{props.children}</ContainerElement>
}
