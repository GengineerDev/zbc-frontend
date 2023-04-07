import { Layout, Space } from 'antd'
const { Header, Content } = Layout

import styles from '../styles/home.less'

function Home() {
    return (
        <Space
            direction="vertical"
            style={{
            width: '100%',
            }}
            size={[0, 48]}
        >
            
            <Header style={styles.header}>Zelene Blockchain</Header>

        </Space>
    )
}

export default Home