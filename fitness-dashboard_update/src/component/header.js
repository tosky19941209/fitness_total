import React, { useEffect, useRef, useState } from "react";
import api from '../service/axios'
import toastr from 'toastr';
import { useNavigate } from "react-router-dom";
function Header({ sideBarIndex, headerContent, setHeaderContent, setSideBarIndex }) {
    const content = [
        'OverView',
        'Fitness Analytics',
        'Diet Analytics',
        'Exercise Analytics',
        'Support'
    ]

    const signInBtn = useRef(null)

    const [showWidget, setShowWidget] = useState(false)
    const [avatarSrc, setAvatarSrc] = useState('user.png')
    const [avatarName, setAvatarName] = useState('Log in')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handeKeyPress = (event) => {
        if (event.key === 'Enter') {
            signInBtn.current.click()
        }
    }
    let loginstate = false
    // useEffect(() => {
    //     const localEmail = localStorage.getItem("fitnessemail")
    //     const localPassword = localStorage.getItem("fitnesspassword")
    //     api.get('/admin/signin', { params: { email: localEmail, password: localPassword } })
    //         .then((res) => {
    //             const newData = res.data
    //             if (newData.message === 'success') {
    //                 const name = newData.name
    //                 setAvatarName(name)
    //                 if (!loginstate)
    //                     toastr.success("Welcome to fitness")
    //                 loginstate = true
    //             }
    //         })
    //         .catch((err) => {
    //             console.log("err: ", err)
    //         })
    // }, [])


    const SignIn = async (e) => {
        await api.get('/admin/signin', { params: { email: email, password: password } })
            .then((res) => {
                const newData = res.data
                if (newData.message === 'success') {
                    const name = newData.name
                    setAvatarName(name)
                    const newHeader = {
                        email: email,
                        password: password
                    }
                    setShowWidget(false)
                    setHeaderContent(newHeader)
                    setEmail(email)
                    setPassword(password)
                    toastr.success("Welcome to fitness")
                    localStorage.setItem('fitnessemail', email)
                    localStorage.setItem('fitnesspassword', password)
                } else {
                    toastr.info("Email or password is not correct")
                }
            })
            .catch((err) => {
                console.log("err: ", err)
            })
    }

    return (
        <div className="flex flex-col justify-center w-[100%] h-[15%]">

            <div className=" flex justify-between" >
                <div></div>
                <p className={`text-[#5534A5] text-[20px] md:text-[50px] ml-[30%] md:ml-[10%]`}>{content[sideBarIndex]}</p>
                <div className="flex flex-col">
                    <div className="flex  items-center mr-10">
                        <button onClick={(e) => {
                            // showWidget === true ? setShowWidget(false) : setShowWidget(true)
                            navigate("/signin")
                        }}
                        ><img className="border rounded-[50%] hidden md:block " src={avatarSrc} width="80px"></img></button>
                        <p className="text-[#757575] ml-10"
                            onClick={() => {
                                navigate("/signin")
                            }}>
                            {avatarName}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Header