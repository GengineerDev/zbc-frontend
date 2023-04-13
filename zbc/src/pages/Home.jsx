import { Card, Input } from 'antd'
const { Meta } = Card
import '../styles/home.css'

function Home() {
    return (
        // Food & Agriculture
        // Education
        // Health
        // Housing
        // Environment
        // Transportation
        // Employment
        <div className='card-wrap'>
            <Input placeholder="Search for a pitch..." />
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" height="300" src="https://media.istockphoto.com/id/1328004520/photo/healthy-young-soybean-crop-in-field-at-dawn.jpg?b=1&s=170667a&w=0&k=20&c=nb9fxR6z4ztjH_Ov-3NCHPd0O5SpBwxWXmKeEd4W9pc=" />}
            >
            <Meta title="Crop Circles" description="Food & Agriculture" />
                <br />
                <p>A food delivery service that brings organic produce straight from the farm to your door.</p>
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" height="300" src="https://media.istockphoto.com/id/1263424631/photo/e-learning-online-education-or-internet-encyclopedia-concept-open-laptop-and-book-compilation.jpg?b=1&s=612x612&w=0&k=20&c=HygElgW-OETIQmGGb2IBFmuN6nuBG2G27cp6Thta1fA=" />}
            >
            <Meta title="Teach-a-palooza" description="Education" />
                <br />
                <p>A language learning app that uses AI to personalize lessons for each student.</p>
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" height="300" src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80" />}
            >
            <Meta title="Vitamin Vortex" description="Health" />
                <br />
                <p>Offers natural remedies and supplements to promote holistic well-being.</p>
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" height="300" src="https://media.istockphoto.com/id/157284152/photo/housing-development-under-construction.jpg?s=612x612&w=0&k=20&c=k7JAncIfye7hbRdEeYtY0JyEsRXDa2YfuKvh4zwUH6k=" />}
            >
            <Meta title="Bed & Biscuits" description="Housing" />
                <br />
                <p>Provides affordable and convenient camping solutions for outdoor enthusiasts and travelers.</p>
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" height="300" src="https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=" />}
            >
            <Meta title="Earthly Delights" description="Environment" />
                <br />
                <p>A startup that creates sustainable alternatives to single-use plastic products.</p>
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" height="300" src="https://thumbs.dreamstime.com/b/truck-transportation-four-sunset-51452506.jpg" />}
            >
            <Meta title="Crazy Cab" description="Transportation" />
                <br />
                <p>An on-demand ride-sharing platform that connects riders with local drivers.</p>
            </Card>
            <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" height="300" src="https://media.istockphoto.com/id/1302423098/photo/employee-people-at-modern-office.jpg?s=612x612&w=0&k=20&c=YO2k3nE8gi1qlD7oDFX_S0WsUE0LwRJM-j9wOhb2ly4=" />}
            >
            <Meta title="Jobtastic" description="Employment" />
                <br />
                <p>A job matching platform that uses AI to find the perfect fit for job seekers.</p>
            </Card>
        </div>
    )
}

export default Home