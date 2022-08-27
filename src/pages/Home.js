import image from '../dmc.png'
import picture from '../image2.jpg';
import { MdSecurity } from 'react-icons/md';
import { FaClock } from 'react-icons/fa';
import { BsCalendarCheck } from 'react-icons/bs';

export default function Home() {
    return (
        <div className="about">

        <div className='sidebar'>
            <img src={picture} />
        </div>

        <section className="lorem">
            <h1>
            Kim jesteśmy
            </h1> <br/>
            <p>
            DMC Logistics to zespół młodych, ambitnych ludzi z wieloletnim doświadczeniem
            w zakresie logistyki i transportu. Jako operator logistyczny oferujemy kompeksowe
            rozwiązania w zakresie transportu drogowego, intermodalnego, usług celnych oraz logistyki
            kontraktowej. Dzięki współpracy z naszymi partnerami mamy możliwość realizacji każdego zlecenia. 
              </p>
            <br /> 
        </section>
          <div className='advantage'>
            <h1>
              Dlaczego My?
            </h1>
            <div className='Us'>
              <div className='icon'>
              <MdSecurity /> <br />
              </div>
              <b>Ubezpieczenie ładunków</b>
              <p>Ubezpiecznie ładunków to standard naszych usług.</p>
            </div>
            <div className='Us'>
              <div className='icon'>
              <FaClock/>
              </div>
              <b>Dyspozycyjność 24h</b>
              <p>Jesteśmy dla Was przez całą dobę </p>
            </div>
            <div className='Us'>
            <div className='icon'>
              <BsCalendarCheck/>
              </div>
              <b>Terminowość dostaw</b>
              <p>Staramy się aby każdy nasz transport dojechał do celu na czas</p>
            </div>
          </div>
           
       

        <div className="right-logo">
          <img src={image}></img>
        </div>

        <div className='footer'>
          <footer>
          Wszelkie prawa zastrzeżone © DMC 2022
          </footer>
        </div>

      </div>


    );
}