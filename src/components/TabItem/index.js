import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabClass = isActive ? 'active-tab-btn' : null
  const onTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className={`tab-item-container ${activeTabClass}`}>
      <button type="button" className="tab-btn" onClick={onTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
