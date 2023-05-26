import { useState } from 'react'
import './index.css'
import Heading from '../../components/heading';
import Text from '../../components/text';
import FormInput from '../../components/formInput';
import { Button } from '../../components/button';

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [service, setService] = useState('')

  const submit = (event) => {
    event.preventDefault()
    console.log({ firstName, lastName, phoneNumber, service })
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="contactText">
          <Heading level={2}>Contact</Heading>
          <Text size="14px">
            Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours
          </Text>
        </div>
        <form>
          <div className="row">
            <FormInput type="text" placeholder="First Name" value={firstName} onChange={value => setFirstName(value)} />
            <FormInput type="text" placeholder="Last Name" value={lastName} onChange={value => setLastName(value)} />
          </div>
          <FormInput type="tel" placeholder="Phone number" style="full" value={phoneNumber} onChange={value => setPhoneNumber(value)} />
          <FormInput type="text" placeholder="What Service are you interested in?" style="full" value={service} onChange={value => setService(value)} />
          <Button variant="primary" onClick={submit}>Submit now</Button>
        </form>
      </div>
    </div>
  )
};

export default Contact;
