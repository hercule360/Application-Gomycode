import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


const Home = () => {
  return (
    <div>
      <div>
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.teskerti.tn/wp-content/uploads/slider/cache/b3032bf2c4cda141693203afad7cbf76/TESKERTI.TN-1-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Backstage	</h5>
          <p>Les billets sont tous vendus....</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.teskerti.tn/wp-content/uploads/slider/cache/287fbf4a48eab045617351087ef5dd97/IMG-20230509-WA0005.jpg"
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h5>FUN-CLUB RELEASE</h5>
          <p>Les billets sont tous vendus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.teskerti.tn/wp-content/uploads/slider/cache/39ff0ac86c1fba996347bdc56b3bc57c/AFF-PRINC-1080x1920-1.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Blind Release	</h5>
          <p>
          Les billets sont tous vendus..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
    </div>
    <h1>SPECTACLE</h1>

    <div className='film'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.teskerti.tn/wp-content/uploads/2023/05/341935080_716136996867664_6651875185115386288_n-1536x864.png" />
      <Card.Body>
        <Card.Title>Tunes Of Yüka // 2023</Card.Title>
        <Card.Text>
        5 JUILLET 2023 21H00 - 6 JUILLET 2023 4H00 YUKA GAMMARTH

        </Card.Text>
        <Button  variant="outline-success" href="https://youtu.be/3bzHspRUGtg" >After Movie YUKA GAMMARTH</Button>


      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.teskerti.tn/wp-content/uploads/2023/05/Kitsch29MAI-01-1536x864.png" />
      <Card.Body>
        <Card.Title>El Kitsh El Arabi El assil | 29 MAI</Card.Title>
        <Card.Text>
        29 MAI 2023 19H00 - 30 MAI 2023 2H00 YUKA GAMMARTH

        </Card.Text>
        <Button  variant="outline-success" href="https://youtu.be/PLeEl4aPBVs" >  After Movie  El Kitsh El Arabi </Button>


      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.teskerti.tn/wp-content/uploads/2023/05/IMG-20230509-WA0005.jpg" />
      <Card.Body>
        <Card.Title>Nervous Addiction invites. DENIS HORVAT G
</Card.Title>
        <Card.Text>
        9 JUIN 2023 20H00 - 10 JUIN 2023 4H00 LE CARPE DIEM

        </Card.Text>
        <Button variant="outline-success"  href="https://youtu.be/kID6J6Z436M" >  After Movie DENIS HORVA</Button>


      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.teskerti.tn/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-03-at-11.31.38.jpeg" />
      <Card.Body>
        <Card.Title>RIMM Summer Festival</Card.Title>
        <Card.Text>
        15 JUIN 2023 20H00 - 17 JUIN 2023 0H00 MAISON DE FRANCE DE SFAX

        </Card.Text>
        <Button variant="outline-success"  href="https://youtu.be/UJ3FvOcw4lQ" > After MovieRIMM Summer</Button>

      </Card.Body>
    </Card>
    
      

    </div>
    <h1>----------------------------------------------------------------------------------</h1>

    </div>
  
    
  )
}

export default Home
