import styled from 'styled-components'
import { Table } from '../../pages/MainPage/components/Table'
import { Field } from '../../pages/MainPage/components/Field/Field'

const Board = () => {
  return (
    <StyledBoard>
      <>
        <Field>start</Field>
        <ul>
          <Field>property</Field>
          <Field>treasury</Field>
          <Field>property</Field>
          <Field>tax</Field>
          <Field>railroad</Field>
          <Field>property</Field>
          <Field>chance</Field>
          <Field>property</Field>
          <Field>property</Field>
        </ul>
        <Field>prison</Field>
      </>

      <>
        <ul>
          <Field>property</Field>
          <Field>property</Field>
          <Field>treasury</Field>
          <Field>property</Field>
          <Field>railroad</Field>
          <Field>chance</Field>
          <Field>property</Field>
          <Field>tax</Field>
          <Field>property</Field>
        </ul>
        <Table />
        <ul>
          <Field>property</Field>
          <Field>power-plant</Field>
          <Field>property</Field>
          <Field>property</Field>
          <Field>railroad</Field>
          <Field>property</Field>
          <Field>treasury</Field>
          <Field>property</Field>
          <Field>property</Field>
        </ul>
      </>

      <>
        <Field>parking</Field>
        <ul>
          <Field>property</Field>
          <Field>chance</Field>
          <Field>property</Field>
          <Field>property</Field>
          <Field>railroad</Field>
          <Field>property</Field>
          <Field>property</Field>
          <Field>water-supply</Field>
          <Field>property</Field>
        </ul>
        <Field>go-to-prison</Field>
      </>
    </StyledBoard>
  )
}

export default Board

const StyledBoard = styled.section`
  display: grid;
  background-color: black;
`
