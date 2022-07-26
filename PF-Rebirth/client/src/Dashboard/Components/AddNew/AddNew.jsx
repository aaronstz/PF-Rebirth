import React, { useState, useEffect } from 'react';
import background from '../../../Assets/loginMain.png';
import './AddNew.css'
import { useDispatch, useSelector } from 'react-redux'
import { postPet } from '../../../Redux/Actions/index'
import { Link } from 'react-router-dom'

function validate(input){
    // let validateName = /^[a-zA-Z\s]+$/; 
    // let validateUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    // let errors = {};
    // if(!input.type){
    //     errors.type = 'Type must be only one of the following options'
    // }
    // return errors;
}


function AddNew(){
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name:'',
        description:'',
        image:'',
        age: 0,
        size:'',
        gender: '',
        type:'',
        race:'',
        location:'',

    })


    console.log(input)
    console.log(errors)

    function handleChange(e){
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        // setErrors(validate({
        //     ...input,
        //     [e.target.name] : e.target.value
        // }))
    }

    function handleType(e){
        e.preventDefault()
        setInput({
            ...input,
            type: [...input.type, e.target.value]
        })
        // setErrors(validate({
        //     ...input,
        //     [e.target.name] : e.target.value,
        //     type: ''
        // }))
    }

    function handleGender(e){
        e.preventDefault()
        setInput({
            ...input,
            gender: [...input.gender, e.target.value]
        })
    }

    function handleSize(e){
        e.preventDefault()
        setInput({
            ...input,
            size: [...input.size, e.target.value]
        })
    }


    function handleSubmit(e){
        e.preventDefault()
        if(Object.keys(errors).length === 0 && input.type.length > 0){

            dispatch(postPet(input))
    
            setInput({
                name:'',
                description:'',
                image:'',
                age: 0,
                size:'',
                gender: '',
                type:'',
                race:'',
                location:'',
            })
        }
        else{
            alert('Fields with * are required')
        }
    }

    return(
        <section>
            <div className="add-container">
                <div className="add-wrapper">
                    <div className="add-wrapperleft">
                        <div className="add-md-center">
                            <div className="addcard-wrapper">
                                <div className="addcard fat">
                                    <div className="addcard header">
                                    <div className="addcard-title">
                                        <h2>Add new pet</h2>
                                    </div>
                                <div className="addcard-body">
                                    <form method = "POST" className ="addvalidate" noValidate="" onSubmit ={(e)=> handleSubmit(e)}>
                                        <div className="form-group">
                                            <label for ="name">Name*</label>
                                            <input
                                            id="name"
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            value={input.name}
                                            required
                                            autoFocus
                                            onChange ={(e)=>{handleChange(e)}}
                                            />
                                            <div className="addinvalid-fb">Name is invalid</div>
                                        </div>

                                        <div className="addform">
                                            <label for ="image">Image*</label>
                                            <input
                                            id="image"
                                            type="file"
                                            class="form-control-file"
                                            name="image"
                                            value={input.image}
                                            required
                                            autoFocus
                                            onChange ={(e)=>{handleChange(e)}}
                                            />
                                            <div className="addinvalid-fb">Image is invalid</div>
                                        </div>

                                        <div className="addform">
                                            <label for ="age">Age*</label>
                                            <input
                                            id="age"
                                            type="number"
                                            class="form-control"
                                            name="age"
                                            value={input.age}
                                            required
                                            autoFocus
                                            onChange ={(e)=>{handleChange(e)}}
                                            />
                                            <div className="addinvalid-fb">Age is invalid</div>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Size*</label>
                                             <select class="form-control" id="exampleFormControlSelect1" value ={input.size} onChange={(e)=>handleSize(e)}>
                                                <option selected>Choose...</option>
                                                <option value ="small">Small</option>
                                                <option value ="medium">Medium</option>
                                                <option value ="big">Big</option>
                                            </select>

                                            <div className="addinvalid-fb">Size is invalid</div>
                                        </div>

                                        <div class="form-group">
                                            <label for ="exampleFormControlSelect1">Gender*</label>
                                            <select class="form-control" id="exampleFormControlSelect1" onChange ={(e)=> {handleGender(e)}}>
                                                <option selected>Choose...</option>
                                                <option value ="male">Male</option>
                                                <option value ="female">Female</option>
                                            </select>

                                            <div className="addinvalid-fb">Gender is invalid</div>
                                        </div>

                                        <div class="form-group">
                                            <label for ="exampleFormControlSelect1">Type*</label>
                                            <select class="form-control" id="exampleFormControlSelect1" onChange ={(e)=> {handleType(e)}}>
                                                <option selected>Choose...</option>
                                                <option value ="dog" name ="type" >Dog</option>
                                                <option value ="cat" name ="type" >Cat</option>
                                            </select>
                                            <div className="addinvalid-fb">Type is invalid</div>
                                        </div>

                                        <div className="addform">
                                            <label for ="race">Race</label>
                                            <input
                                            id="race"
                                            type="text"
                                            class="form-control"
                                            name="race"
                                            value={input.race}
                                            required
                                            autoFocus
                                            onChange ={(e)=>{handleChange(e)}}
                                            />
                                            <div className="addinvalid-fb">Race is invalid</div>
                                        </div>
                                        <div className="addform">
                                            <label for ="location">Location*</label>
                                            <input
                                            id="location"
                                            type="text"
                                            class="form-control"
                                            name="location"
                                            value={input.location}
                                            required
                                            autoFocus
                                            onChange ={(e)=>{handleChange(e)}}
                                            />
                                            <div className="addinvalid-fb">Location is invalid</div>
                                        </div>
                                        <div className="addform">
                                            <label for ="description">Description</label>
                                            <input
                                            id="description"
                                            type="text"
                                            class="form-control"
                                            name="description"
                                            value={input.description}
                                            required
                                            autoFocus
                                            onChange ={(e)=>{handleChange(e)}}
                                            />
                                            <div className="addinvalid-fb">Description is invalid</div>
                                        </div>
                                    <div className="addform-submit">
                                        <button
                                        type="submit"
                                        class="btn btn-primary my-1"
                                        >
                                            CREATE
                                        </button>
                                    </div>
                                        
                                    </form>
                                    {
                                        errors.type && <h6>{errors.type}</h6>
                                    }
                                </div>
                                    </div>
                                    <div className="addfooter">
                                    Copyright &copy; 2022 &mdash; Team 13
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="addwrapper-right">
                            <div className="add-md-center">
                                <img src={background} alt="Add Pet"/>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default AddNew