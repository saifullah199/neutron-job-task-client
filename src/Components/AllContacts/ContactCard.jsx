import Swal from "sweetalert2";
import UpdateForm from "./UpdateForm";
import { useState } from "react";
import { Link } from "react-router-dom";


const ContactCard = ({user}) => {

    const {userName,phoneNumber,userEmail,photo,address,_id}=user

    

 

    // delete a contact
    const handleDelete =_id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
            
            fetch(`https://neutron-task-server.vercel.app/contact/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
                if( data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }

    // update a contact 

    
    return (
        <div>
            <div className="card card-compact bg-base-100 w-80 shadow-xl">
  <figure>
    <img
    className="w-[200px] h-[200px] rounded-full"
      src={photo}
      alt={userName} />
  </figure>
  <div className="card-body">
  <h2 className="card-title">{userName}</h2>
    <div className=" font-semibold">
        
        <p>Address: {address} </p>
        <p> Email:{userEmail}</p>
        
        <p>Number: {phoneNumber}</p>
    </div>
    <div className="card-actions justify-between">

        {/* update modal */}
        <Link to={`/update/${_id}`}>
            <button className="btn btn-primary"> Update</button>
        </Link>
        

      <button 
      onClick={() => handleDelete(_id)}
      className="btn btn-primary">Delete
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactCard;