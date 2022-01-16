//import React from "react";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/list-groups.css";

const Profile = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')

    const getProfile = async () => {
        
        try 
        {
            const response = await fetch('http://avr:80/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
                
            })

            const data = await response.json();

            if (response.status === 200)
            {
                //window.alert(data.username);
                console.log(data);
                setUsername(data.username);
                setEmail(data.email);

            }else{
                const err = new Error(response.error);
                throw err; 
            }
        } catch(error){
            console.log(error)
            navigate('/login')
        }

    }
    useEffect(() => {
        
        getProfile();

    }, []);

    return(
        <>
            <div class="row featurette">
                
            
                <div class="col-md-7 order-md-2">
                    

                    <h2 class="featurette-heading text-center ">Oh yeah, it’s that good. <span class="text-muted ">See for yourself.</span></h2>
                   
                   
                   
                    <div class="list-group list-group-checkable">
                        <input class="list-group-item-check" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios1" value="" />
                        <label class="list-group-item py-3" for="listGroupCheckableRadios1">
                            {username}
                            <span class="d-block small opacity-50">With support text underneath to add more detail</span>
                        </label>

                        <input class="list-group-item-check" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios2" value="" />
                        <label class="list-group-item py-3" for="listGroupCheckableRadios2">
                            {email}
                            <span class="d-block small opacity-50">Some other text goes here</span>
                        </label>

                        <input class="list-group-item-check" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios3" value="" />
                        <label class="list-group-item py-3" for="listGroupCheckableRadios3">
                            Third radio
                            <span class="d-block small opacity-50">And we end with another snippet of text</span>
                        </label>

                        <input class="list-group-item-check" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios4" value="" disabled />
                        <label class="list-group-item py-3" for="listGroupCheckableRadios4">
                            Fourth disabled radio
                            <span class="d-block small opacity-50">This option is disabled</span>
                        </label>
                    </div>


                    
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 class="mb-0">List group item heading</h6>
                                <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                            </div>
                            <small class="opacity-50 text-nowrap">now</small>
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 class="mb-0">Another title here</h6>
                                <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                            </div>
                            <small class="opacity-50 text-nowrap">3d</small>
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 class="mb-0">Third heading</h6>
                                <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                            </div>
                            <small class="opacity-50 text-nowrap">1w</small>
                            </div>
                        </a>
                    </div>


                </div>
                
                <div class="col-md-5 order-md-1">
                <div className="col-md-10 mx-auto col-lg-5">
                <div className="row align-items-center g-lg-5 py-5">
                
                    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                </div>
            </div>
            </div>
            </div>  
            
        </>
    )
}
export default Profile