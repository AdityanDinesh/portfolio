import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_luudms8',
        'template_wvuzdxr',
        refForm.current,
        'QTJ7eNDgM_BTCE2rh'
      )
      .then(
        () => {
          alert('Message Succesfully Send!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send Message, please try again')
        }
      )
  }

  return (
    <>
      <div className="conatiner contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    nmae="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
          <div className="info-map">
            Adityan Dinesh
            <br />
            Kerala,
            <br />
            India,686692 <br />
            <span>adityandinesh001@gmail.com</span>
          </div>
          {/* <div className="map-wrap">
            <MapContainer centre={[10.08157, 76.608315]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[10.08157, 76.608315]}>
                <Popup>Adityan,lives here!</Popup>
              </Marker>
            </MapContainer>
          </div> */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
