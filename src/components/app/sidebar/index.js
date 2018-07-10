import React from 'react'
import { Menu } from 'antd'


const SubMenu = Menu.SubMenu

class Sidebar extends React.Component {

	buildStyleFromState = props => {

		return props.styles && props.styles.map(item => {
			return <div>
				{item.alias} <input value={item.value} placeholder={item.alias} /> {item.unit}
			</div>

		})
	}

	render() {

		const { state } = this.props

		return <div>
			<div className="control-box">
				<div className="control-box-title">Styles</div>
				<div className="control-box-content">
					{this.buildStyleFromState(state.tagProps)}
				</div>
			</div>
		</div>
	}
}

export default Sidebar