import { Card } from 'antd'
const { Meta } = Card
import '../styles/home.css'

function Home() {
    return (

        <div className='card-wrap'>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>
    )
}

export default Home