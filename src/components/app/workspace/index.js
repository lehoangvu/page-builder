import React from 'react'
import Box from 'tags/box'
const style = {
	root: {
		width: '80%'
	}
}

class Workspace extends React.Component {

	render() {
		const { onSelectTag } = this.props
		
		return <div style={style.root}>
			<Box onSelect={onSelectTag}>
				Ad ullamco reprehenderit consequat.
			</Box>
		</div>
	}
}

export default Workspace