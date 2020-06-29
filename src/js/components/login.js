import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { users } from '../../common/constant'


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idValue: '',
            pwValue: '',
            showError: false
        };
    }

    clear = () => {
        this.setState({ idValue: '', pwValue: '' });
    }

    pwChange = (e) => {
        this.setState({ pwValue: e.target.value });
    }

    idChange = (e) => {
        this.setState({ idValue: e.target.value });
    }

    getUsers = () => {
        let count = 1;
        let userArray = [];
        for (let user in users) {
            userArray.push(<tr key={count}><td>{count}</td><td>{users[user].id}</td><td>{users[user].pw}</td></tr>);
            count++;
        }
        return userArray;
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { idValue, pwValue } = this.state;
        if (users.some((user) => user.id === idValue && user.pw === pwValue)) {
            this.setState({ showError: false });
            this.props.passValue('qwerty');
        } else {
            this.setState({ showError: true });
        }
        return false;
    }

    render() {
        let { idValue, pwValue, showError } = this.state;
        return (
            <div>
                <br />
                <div>
                <h1>Cloud Computing Assignment</h1>
                <br />
                <h2>Login Page</h2>
                <br />
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left"
                }} >
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" required placeholder="Enter username" onChange={this.idChange} value={idValue} style={{ width: '300px' }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required placeholder="Password" onChange={this.pwChange} value={pwValue} style={{ width: '300px' }} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                        <Button variant="primary" onClick={this.clear} style={{ marginLeft: '30px' }}>
                            Clear
                    </Button>
                    </Form>
                    </div>
                </div>
                <br />
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {showError && <span><label style={{ color: 'Red' }}>Invalid Username/Password, Please try again.</label></span>}
                </div>
                <br />
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >
                </div>
            </div>
        );
    }
}