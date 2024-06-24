import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateContact = () => {

    const user = useLoaderData()
     const {userName,phoneNumber,userEmail,photo,address,_id}=user
console.log(user)
    const handleUpdateContacts = e => {
        e.preventDefault()
        const form = e.target
        const userName = form.name.value 
        const phoneNumber = form.number.value 
        const userEmail = form.email.value 
        const photo = form.photo.value 
        const address = form.address.value 

        const updatedUser = { userName, phoneNumber, userEmail, photo, address}

        console.log(updatedUser)

        //  send data to the server

        fetch(`https://neutron-task-server.vercel.app/contact/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Contact Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }
    return (
        <div className="container mx-auto w-10/12">
            <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Update a Contact</h1>
      
    </div>
    <div className="card bg-base-100 w-full ">
      <form onSubmit={handleUpdateContacts}  className="card-body">
        <div className="lg:flex gap-5 ">
        <div className="form-control lg:w-1/2 ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' defaultValue={userName} placeholder="Your Name" className="input input-bordered"  />
        </div>
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" name='number' defaultValue={phoneNumber} placeholder="Phone Number" className="input input-bordered" required />
         
        </div>
        </div>
        <div className=" lg:flex gap-5 ">
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' defaultValue={userEmail} placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" name='address' defaultValue={address}  placeholder="Address" className="input input-bordered" required />
         
        </div>
        </div> 

        <div className=" ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo' defaultValue={photo} placeholder="Photo" className="input input-bordered"  />
        </div>
        
        </div>
        
        <input type="submit" value="Update Contact" className="btn btn-block" />
        
      </form>
    </div>
    </div>
        </div>
    );
};

export default UpdateContact;