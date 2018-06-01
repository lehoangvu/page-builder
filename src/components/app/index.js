import React from 'react'
import Workspace from './workspace'
import Sidebar from './sidebar'
import { Layout } from 'antd'

const { Sider, Content } = Layout

const style = {
	root: {
		display: 'flex'
	}
}

class App extends React.Component {

	state = {
		sidebar: {
			tagProps: {

			}
		},
		workspace: {

		}
	}

	onSelectTag = tagProps => {
		console.log(tagProps)
		this.setState({
			sidebar: {
				...this.state.sidebar,
				tagProps
			}
		})
	}

	render() {

		const { sidebar } = this.state

		return <div style={style.root}>
			<Content>
				<Workspace onSelectTag={this.onSelectTag} />
			</Content>
	        <Sider className="app-right-sider">
				<Sidebar state={ sidebar }/> 
	        </Sider>
		</div>
	}
}

export default App