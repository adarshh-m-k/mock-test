import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Login from '../Login/Login'
import { Apidata } from '../../../api'

function Sign() {

    let [sign, setSign] = useState({
        username: "",
        mobile: "",
        email: "",
        password: "",

    })


    function signupData(e) {

        let { name, value } = e.target

        setSign(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    function signupBtn() {

        if (!sign.username || !sign.mobile || !sign.email || !sign.password) {
            alert('Please give all information')
            return;
        }

        Apidata.post('/user/sign', sign).then((result) => {

            console.log(result);

        }).catch((err) => {

            console.log(err);


        })

    }
    return (
        <div>
            <div>
                <div>
                    <input type="text"
                        name='username'
                        value={sign.username}
                        onChange={signupData} />
                </div>
                <div>
                    <input type="text"
                        name='mobile'
                        value={sign.mobile}
                        onChange={signupData} />
                </div>
                <div>
                    <input type="text"
                        name='email'
                        value={sign.email}
                        onChange={signupData} />
                </div>
                <div>
                    <input type="text"
                        value={sign.password}
                        name='password'
                        onChange={signupData} />
                </div>
                <div>
                    <button onClick={signupBtn}>SignUp</button>
                </div>
                <div>
                    <p>Already have an account<Link to={'/'}>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Sign