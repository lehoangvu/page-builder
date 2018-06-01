import React from 'react'


const props = {
	id: 'box_flex',
	name: 'BoxFlex',
	styles: [
		{
			attr: 'width',
			unit: 'px',
			alias: 'Dài',
			name: 'width',
			value: 300
		},
		{
			attr: 'backgroundColor',
			unit: '',
			alias: 'Màu nền',
			name: 'backgroundColor',
			value: 'blue'
		},
		{
			attr: 'color',
			unit: '',
			alias: 'Màu nền',
			name: 'color',
			value: 'white'
		},
		{
			attr: 'paddingTop',
			unit: 'px',
			alias: 'Đệm trên',
			name: 'paddingTop',
			value: 16
		},
		{
			attr: 'paddingBottom',
			unit: 'px',
			alias: 'Đệm dưới',
			name: 'paddingBottom',
			value: 16
		},
		{
			attr: 'paddingLeft',
			unit: 'px',
			alias: 'Đệm phải',
			name: 'paddingLeft',
			value: 16
		},
		{
			attr: 'paddingRight',
			unit: 'px',
			alias: 'Đệm trái',
			name: 'paddingRight',
			value: 16
		}
	],
}

class Box extends React.Component {
	state = {
		...props
	}
	
	buildStyle = data => {
		let styles = {}
		data.map(item => {
			const key = item.attr
			const value = item.value || item.defaultValue
			styles[key] = `${value}${item.unit}`
		})
		return styles
	}
	
	onClick = e => {
		e.preventDefault()
		e.stopPropagation()
		this.props.onSelect  && this.props.onSelect(this.state)
	}
	
	render() {
		const { styles } = this.state

		return <div style={this.buildStyle(styles)} onClick={this.onClick}>
			{this.props.children}
		</div>
	}
}

export default Box