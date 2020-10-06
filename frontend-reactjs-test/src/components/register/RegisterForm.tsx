import React from 'react';
import './register.css';
import DecoratorImg from './../../data/Decorator.png';
import { Form } from 'react-bootstrap';
import Button from '../Button';

export default class RegisterForm extends React.Component<{},{}> {
    constructor(props:{}) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event:any) {

    }

    render() {
        return (
            <div className='register-container'>
                <div className='register-bg'></div>
                <img style={{marginRight: '150px'}} src={DecoratorImg} alt='decorator' />
                <form onSubmit={this.handleSubmit} style={{width: '250px'}}>
                    <h2 style={{fontSize: '25px'}}>Stay in the Know!</h2>
                    <p style={{fontSize: '12px', marginBottom: '25px'}}>
                        Don't get left behind! <br/>
                        Subscribe to our newsletters today!</p>
                    <input type='text' name='name' id='name' placeholder='Name' className='register-border-field'/>
                    <br/>
                    <input type='text' name='email' id='email' placeholder='Email' className='register-border-field'/>
                    <br/>
                    <select className='register-border-field' id='select-country'>
                        <option disabled selected>Country</option>
                        <option>VietNam</option>
                        <option>Japan</option>
                    </select>
                    <br/>
                    <select className='register-border-field' id='select-platform'>
                        <option disabled selected>Platform</option>
                        <option>Android</option>
                        <option>Windows</option>
                    </select>
                    <br/>
                    <br/>
                    <div className='group-checkbox'>
                        <input type='checkbox' name='policy' id='check-policy'/>
                        <label>By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.</label>
                    </div>
                    {/* <br/> */}
                    <div className='group-checkbox'>
                        <input type='checkbox' name='promotion' id='check-pomotion'/>
                        <label>I agree to receive promotional offers relating to all Gameloft games and services.</label>
                    </div>
                    {/* <Button text="Button" /> */}
                    <div style={{display: 'flex',
                                justifyContent: 'center'}}>
                        <input type='submit' value='Button' id='submit'/>
                    </div>
                </form>
                {/* <Form>
                    <h2>Stay in the Know!</h2>
                    <p>Don't get left behind! <br/>
                        Subscribe to our newsletters today!</p>
                    <Form.Group>
                        <Form.Control type='text' placeholder='Name' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='email' placeholder='Email' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as='select'>
                            <option selected disabled>Country</option>
                            <option>VietNam</option>
                            <option>Japan</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as='select' placeholder='Platform'>
                            <option selected disabled>Platform</option>
                            <option>Android</option>
                            <option>Windows</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type='checkbox' id='check-policy'>
                            <Form.Check.Input type='checkbox' isValid />    
                            <Form.Check.Label>By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.</Form.Check.Label>
                        </Form.Check>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type='checkbox' id='check-promotion'>
                            <Form.Check.Input type='checkbox' isValid />    
                            <Form.Check.Label>I agree to receive promotional offers relating to all Gameloft games and services.</Form.Check.Label>
                        </Form.Check>
                    </Form.Group>
                </Form> */}
            </div>
        )
    }
}