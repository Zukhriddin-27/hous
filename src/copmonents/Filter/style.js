import styled from 'styled-components'
import { ReactComponent as houses } from '../../assets/icons/houses.svg'
import { ReactComponent as filter } from '../../assets/icons/setting.svg'
import { ReactComponent as search } from '../../assets/icons/search.svg'
import { Select } from 'antd'

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`
const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-size: 14px;
  border-radius: 2px;
  height: ${({ height }) => (height ? `${height}px` : `44px`)};
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  padding-left: ${({ icon }) => (icon ? '35px' : '20px')};
  border: 1px solid #e6e9ec;
  outline: none;
`
const Icons = styled.div``

Icons.Search = styled(search)`
  margin-right: 8px;
`
Icons.Filter = styled(filter)`
  margin-right: 8px;
`
Icons.Houses = styled(houses)`
  margin-right: 8px;
`

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`
const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-bottom: 20px;
`
const SelectAntd = styled(Select)`
  max-width: 200px;
  min-width: 200px;
  width: 100%;
  .ant-select-selector {
    height: 44px !important;
    padding: 5px 11px !important;
    border: 1px solid #e6e9ec !important;
  }
`

export { Container, Icons, MenuWrapper, Section, Input, SelectAntd }
