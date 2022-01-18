import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import "../css/editprofile.css";


const Signin = () => {
  
  const navigate = useNavigate();
  const [topics, setTopics] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [skills, setSkills] = useState('')

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
  

	async function updateprofile(event) {
		
    event.preventDefault()

		const response = await fetch('http://avr:80/editprofile', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
       topics,
       skills
			}),
			
		})

		const data = await response.json();

		if (response.status === 200)
        {
            window.alert(data.message);
            console.log(data.message);
            //navigate('/login');
        }else{
            window.alert(data.message);
            console.log(data.message);
        }     
	} 



    return(
        <>
            <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">{username}</span><span class="text-black-50">{email}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                
                <div class="row mt-3">
                <div disabled class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value={username}  onChange={(e) => setUsername(e.target.value)} /></div>
                    <div disabled class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value={email}  onChange={(e) => setEmail(e.target.value)} /></div>
                    <div class="col-md-12"><label class="labels">Intrested Topics</label><input type="text" class="form-control" placeholder="Add Topics" value={topics} 
                onChange={(e) => setTopics(e.target.value)} /></div>
                <div disabled class="col-md-12"><label class="labels">Skills</label><input type="text" class="form-control" placeholder="Edit your Skills" value={skills}  onChange={(e) => setSkills(e.target.value)} /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={updateprofile}>Save Profile</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br />
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div>
            </div>
        </div>
    </div>
</div>

        </>
    )
}
export default Signin;
