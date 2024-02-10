import { ReactNode } from 'react'
import styled from 'styled-components'

export const Field = ({ children }: { children?: ReactNode }) => {
  const a = 123

  return <StyledField>{children}</StyledField>
}

const StyledField = styled.li`
  display: flex;
  flex-direction: column;
`
