import styled from 'styled-components'
const OneMoreTitle = styled.h4`
  color: plum;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const Title = ({ title = 'this is default title', className }) => {
  return (
    <>
      <h3 className={className}>{title}</h3>
      <OneMoreTitle>OneMoreTitle for example</OneMoreTitle>
    </>
  )
}

const StyledTitle = styled(Title)`
  color: red;
`
export { StyledTitle as Title }
