import React, { useState, useEffect } from 'react';
import background from '../../../Assets/loginMain.png';
import './AddNew.css'
import { useDispatch, useSelector } from 'react-redux'
import { postPet } from '../../../Redux/Actions/index'
import { Link, useNavigate } from 'react-router-dom'
import { provincias } from '../../../Tools/provincias'

function validate(input){
    let validateName = /^[a-zA-Z\s]+$/; 
    let validateUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    let errors = {};
    if(!input.type || input.type > 1){
        errors.type = 'Type must be only one of the following options'
    }
    if(!input.name){
        errors.name = 'Name is required'
    }
    if(!validateName.test(input.name)){
        errors.name = 'Name cannot contain numbers or special characters'
    }
    if(input.image && !validateUrl.test(input.image)){
        errors.image = 'This is not a valid URL'
    }
    if(!input.size){
        errors.size = 'Please select one of the following options'
    }
    if(!input.gender){
        errors.gender = 'Please select one of the following options'
    }
    if(!input.type){
        errors.type = 'Please select one of the following options'
    }
    if(!input.race){
        errors.race = "If you don't know the breed write 'unknown'"
    }
    if(!input.location){
        errors.location = 'Please select one of the following options'
    }
    return errors;
}


function AddNew(){
    const [selectedFile, setSelectedFile] = useState()
    const [isFilePicked, setIsFilePicked] = useState(false)

    const navigate = useNavigate()
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
        console.log(e.target.name)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleType(e){
        e.preventDefault()
        setInput({
            ...input,
            type: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value,
            type: ''
        }))
    }

    function handleImage(e){
        setSelectedFile(e.target.files[0])
        setIsFilePicked(true)
    }

    // function handleGender(e){
    //     e.preventDefault()
    //     setInput({
    //         ...input,
    //         gender: e.target.value
    //     })
    // }

    // function handleSize(e){
    //     e.preventDefault()
    //     setInput({
    //         ...input,
    //         size: [...input.size, e.target.value]
    //     })
    // }


    function submitImage(){
        const formData = new FormData();

        formData.append('File', selectedFile)

        fetch(
            'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
            {
                method: 'POST',
                body: formData
            }
        )
            .then((response)=>response.json())
            .then((result)=> {
                console.log('Success:', result)
            })    
            .catch((error)=>{
                console.error('Error:', error)
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
            navigate('/home')
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
                                            <div className="addinvalid-fb">{errors.name}</div>
                                        </div>

                                        <div className="addform">
                                            <label class="form-label" for ="customFile">Image*</label>
                                            <input
                                            id="customFile"
                                            type="text"
                                            class="form-control"
                                            name="image"
                                            value={input.image}
                                            required
                                            autoFocus
                                            onChange ={(e)=>{handleChange(e)}}
                                            />
                                            {/* <input
                                            id="customFile"
                                            type="file"
                                            class="form-control"
                                            name="image"
                                            value={input.image}
                                            required
                                            autoFocus
                                            onChange ={(e)=>{handleImage(e)}}
                                            />
                                            {
                                                isFilePicked? (
                                                    <div>
                                                        <p>Filename: {selectedFile.name}</p>
                                                        <p>Filetype: {selectedFile.type}</p>

                                                    </div>
                                                    )
                                                    : (
                                                        <p>Select a file to show details</p>
                                                        )
                                            }
                                            <div>
                                                <button onClick={submitImage}>Upload Image</button>
                                            </div> */}
                                            <div className="addinvalid-fb">{errors.image}</div> 
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
                                            min="0"
                                            onChange ={(e)=>{handleChange(e)}}
                                            />
                                            <div className="addinvalid-fb">{errors.age}</div>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Size*</label>
                                             <select name ="size" class="form-control" id="exampleFormControlSelect1" value ={input.size} onChange={(e)=>handleChange(e)}>
                                                <option selected>Choose...</option>
                                                <option value ="small">Small</option>
                                                <option value ="medium">Medium</option>
                                                <option value ="big">Big</option>
                                            </select>

                                            <div className="addinvalid-fb">{errors.size}</div>
                                        </div>

                                        <div class="form-group">
                                            <label for ="exampleFormControlSelect1">Gender*</label>
                                            <select name ="gender" class="form-control" id="exampleFormControlSelect1" onChange ={(e)=> {handleChange(e)}}>
                                                <option selected>Choose...</option>
                                                <option value ="male" >Male</option>
                                                <option value ="female">Female</option>
                                            </select>

                                            <div className="addinvalid-fb">{errors.gender}</div>
                                        </div>

                                        <div class="form-group">
                                            <label for ="exampleFormControlSelect1">Type*</label>
                                            <select name ="type" class="form-control" id="exampleFormControlSelect1" onChange ={(e)=> {handleChange(e)}}>
                                                <option selected>Choose...</option>
                                                <option value ="dog">Dog</option>
                                                <option value ="cat">Cat</option>
                                            </select>
                                            <div className="addinvalid-fb">{errors.type}</div>
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
                                            <div className="addinvalid-fb">{errors.race}</div>
                                        </div>
                                        <div className="addform">
                                            <label for ="location" >Location*</label>
                                            <select name ="location" class="form-control" id="exampleFormControlSelect1" onChange ={(e)=> {handleChange(e)}}>
                                                <option selected>Choose...</option>
                                                {
                                                    provincias?.map(p => {
                                                        return(
                                                            <option value ={p}>{p}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <div className="addinvalid-fb">{errors.location}</div>
                                        </div>
                                        <div className="form-outline">
                                            <label class="form-label"for ="textAreaExample">Description</label>
                                            <textarea name="description" value={input.description} type="text" autoFocus class ="form-control" id="textAreaExample" rows="4" onChange= {(e)=>handleChange(e)}></textarea>

                                            {/* <input
                                            id="description"
                                            type="text"
                                            class="form-control"
                                            name="description"
                                            value={input.description}
                                            required
                                            autoFocus
                                            onChange ={(e)=>{handleChange(e)}}
                                            /> */}
                                            {/* <div className="addinvalid-fb">Description is invalid</div> */}
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