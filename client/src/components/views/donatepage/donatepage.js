import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Axios from 'axios';


const { Title } = Typography;
const { TextArea } = Input;


function UploadProductPage(props) {

    const [NameValue, setNameValue] = useState("")
    const [AddressValue, setAddressValue] = useState("")
    const [numberValue, setnumberValue] = useState("")
    const [donationValue, setdonationValue] = useState("")
    const [BNameValue, setBNameValue] = useState("")
    const [BAddressValue, setBAddressValue] = useState("")
    const [BnumberValue, setBnumberValue] = useState("")


    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }

    const onAddressChange = (event) => {
        setAddressValue(event.currentTarget.value)
    }

    const onnumberChange = (event) => {
        setnumberValue(event.currentTarget.value)
    }

    const ondonationChange = (event) => {
      setdonationValue(event.currentTarget.value)
    }

    const onBNameChange = (event) => {
    setBNameValue(event.currentTarget.value)
    }

    const onBAddressChange = (event) => {
    setBAddressValue(event.currentTarget.value)
    }

    const onBnumberChange = (event) => {
    setBnumberValue(event.currentTarget.value)
    } 

    const onSubmit = (event) => {
        event.preventDefault();


        if (!NameValue || !AddressValue || !numberValue || !donationValue
          || !BNameValue || !BAddressValue || !BnumberValue) {
            return alert('fill all the fields first!')
        }
        else{
          alert('Donation details succesfully uploaded  please wait for the delivery person')
           props.history.push('/')
        }


    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Donation Details</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <br />
                <label><h4>Donor Details</h4></label>
                <label>Name</label>
                <Input
                    onChange={onNameChange}
                    value={NameValue}
                />
                <br />
                <br />
                <label>Address</label>
                <TextArea
                    onChange={onAddressChange}
                    value={AddressValue}
                />
                <br />
                <br />
                <label>Phone number</label>
                <Input
                    onChange={onnumberChange}
                    value={numberValue}
                    type="number"
                />
                <br /><br />
                <label>Donation Details</label>
                <TextArea
                    onChange={ondonationChange}
                    value={donationValue}
                />
                <br/>
                <br/>
                <br />
                <label><h4>Beneficiary Details</h4></label>
                <label> Name</label>
                <Input
                    onChange={onBNameChange}
                    value={BNameValue}
                />
                <br />
                <br />
                <label>Address</label>
                <TextArea
                    onChange={onBAddressChange}
                    value={BAddressValue}
                />
                <br />
                <br />
                <label>Phone number</label>
                <Input
                    onChange={onBnumberChange}
                    value={BnumberValue}
                    type="number"
                />
                <br /><br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
