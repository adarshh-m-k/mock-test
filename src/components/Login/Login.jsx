import React, { useState } from 'react'
import { Apidata } from '../../../api'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    let [data, setData] = useState({
        email: "",
        password: ""

    })

    let navigate = useNavigate()

    function inputData(event) {

        let { name, value } = event.target

        console.log(event.target);


        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function loginBtn() {

        if (!data.email || !data.password) {
            alert('Please enter email and password')
            return;
        }

        Apidata.post('/user/login', data).then((result) => {

            console.log(result);
            navigate('/sign')

        }).catch((err) => {

            console.log(err);


        })
    }




    return (
        <div>
            <div>
                <div>
                    <input type="text"
                        name='email'
                        value={data.email}
                        onChange={inputData} />
                </div>
                <div>
                    <input type="text"
                        name='password'
                        value={data.password}
                        onChange={inputData} />
                </div>
                <div>
                    <button onClick={loginBtn}>Login</button>
                </div>
                <div>
                    <p>Don't have an account <Link to={'sign'}>Register</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login