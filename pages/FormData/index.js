import React, { useState } from 'react'
import axios from "axios"

const FormData = () => {
    const [inputText, setInputText] = useState("")
    const [inputGrade, setInputGrade] = useState("selct")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPhone, setInputPhone] = useState(0)
    const [inputState, setInputState] = useState("")
    const [inputSchool, setInputSchool] = useState("")
    const [inputCity, setInputCity] = useState("")
    const [gender, setGender] = useState("")
    const [pincode, setPincode] = useState(0)
    const [schoolId, setSchoolID] = useState(0)

    const gradeDropDown = [{
        grade: "4th",
        value: 4
    }, {
        grade: "5th",
        value: 5
    }, {
        grade: "6th",
        value: 6
    }, {
        grade: "7th",
        value: 7
    }, {
        grade: "8th",
        value: 8
    }, {
        grade: "9th",
        value: 9
    }]
    const formDataSubmit = async(e) => {
        e.preventDefault()
        let payload = {
            student_email: inputEmail,
            student_name: inputText,
            gender: gender,
            standard: inputGrade,
            student_contact_no: inputPhone,
            school_address: inputSchool,
            city: inputCity,
            pincode: pincode,
            school_id: schoolId
        }
        console.log("payload", payload)
try{
        await axios.post("http://13.232.8.8506:8089/htschool/api/add-response-data", payload).then(res=>console.log(res))
}
catch(err){
setTimeout(()=>{
    console.log("somethimg went wrong please check your form")
},1000)
}
    }

    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "500px" }}>
            <form onSubmit={formDataSubmit}>
                <div className='row' style={{ padding: '10px', minHeight: '50px' }}>
                    <div className='col-lg-6'>
                        <input type="text"
                            value={inputText}
                            placeholder="Name"
                            onChange={(e) => { setInputText(e.target.value) }} />
                        <select value={inputGrade} onChange={(e) => { setInputGrade(e.target.value) }} className="form-select form-select-sm" aria-label=".form-select-sm example">
                            {gradeDropDown && gradeDropDown.length > 0 && gradeDropDown.map((x) =>
                                (<option value={x.value} >{x.grade}</option>))}
                        </select>
                        <select value={gender} onChange={(e) => { setGender(e.target.value) }} className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value={"Male"} >Male</option>
                            <option value={"Female"} >Female</option>
                        </select>
                    </div>
                </div>
                <div className='row' style={{ padding: '10px', minHeight: '50px' }}>
                    <div className='col-lg-6'>
                        <input type="email"
                            value={inputEmail}
                            placeholder="Email"
                            onChange={(e) => { setInputEmail(e.target.value) }} />
                        <input type="number"
                            value={inputPhone}
                            placeholder="Phone Number"
                            onChange={(e) => { setInputPhone(e.target.value) }} />
                    </div>
                </div>
                <div className='row' style={{ padding: '10px', minHeight: '50px' }}>
                    <div className='col-lg-6'>
                        <input type="text"
                            value={inputState}
                            placeholder="State"
                            onChange={(e) => { setInputState(e.target.value) }} />
                        <input type="text"
                            value={inputSchool}
                            placeholder="School"
                            onChange={(e) => { setInputSchool(e.target.value) }} />
                    </div></div>
                <div className='row' style={{ padding: '10px', minHeight: '50px' }}>
                    <div className='col-lg-6'>
                        <input type="text"
                            value={inputCity}
                            placeholder="City"
                            onChange={(e) => { setInputCity(e.target.value) }} />
                        <input type="text"
                            value={schoolId}
                            placeholder="School ID"
                            onChange={(e) => { setSchoolID(e.target.value) }} />
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div >
    )
}

export default FormData