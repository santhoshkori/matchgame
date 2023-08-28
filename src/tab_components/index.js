import './index.css'

const Tabitem = props => {
  const {tabdetails, changetab, isactive} = props
  const {displayText, tabId} = tabdetails

  const colorit = isactive ? 'applycolor' : ''

  const clicktab = () => {
    changetab(tabId)
  }

  return (
    <li>
      <p onClick={clicktab} className={`eachtab ${colorit}`}>
        {displayText}
      </p>
    </li>
  )
}

export default Tabitem
