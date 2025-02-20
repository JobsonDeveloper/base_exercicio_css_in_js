import { FormEvent, ReactNode, useState } from 'react'
import { BtnPesquisar, Formulario, InputElement } from './Styles'

type Props = {
  aoPesquisar: (termo: string) => void
  children?: ReactNode
}

const FormVagas = (props: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <InputElement
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Formulario>
  )
}
export default FormVagas
