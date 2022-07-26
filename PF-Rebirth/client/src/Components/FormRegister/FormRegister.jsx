import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../Assets/logoLanding.png'
import pet from '../../Assets/fotoPet1.png';
import './FormRegister.css';

export default function FormRegister() {

    return (
        <div className='formContainer'>
            <div className='formRegister'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Names</Form.Label>
                        <Form.Control type="text" placeholder="Enter names" className='formInputStyle'></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last names" className='formInputStyle'></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" className='formInputStyle'></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  className='formInputStyle'/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  className='formInputStyle'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm your password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm your password"  className='formInputStyle'/>
                    </Form.Group>
                    <div className='formBtnSubmit'>
                        <Button variant="primary" type="submit">
                            Registrarse
                        </Button>
                    </div>
                </Form>
            </div>
            <div className='formImageContainer'>
                <img src={logo} alt="logo" className='formLogoImage'/>
                <img src={pet} alt="pet" className='formPetImage'/>
            </div>
        </div>
    );
}