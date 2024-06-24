import Swal from "sweetalert2";


const AddContactForm = () => {
    const handleAddContacts = e => {
        e.preventDefault()
        const form = e.target
        const userName = form.name.value 
        const phoneNumber = form.number.value 
        const userEmail = form.email.value 
        const photo = form.photo.value 
        const address = form.address.value 

        const newUser = { userName, phoneNumber, userEmail, photo, address}

        console.log(newUser)

        //  send data to the server

        fetch('https://neutron-task-server.vercel.app/contacts',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Item Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add a Contact</h1>
      
    </div>
    <div className="card bg-base-100 w-full ">
      <form onSubmit={handleAddContacts} className="card-body">
        <div className="lg:flex gap-5 ">
        <div className="form-control lg:w-1/2 ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered"  />
        </div>
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" name='number' placeholder="Phone Number" className="input input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex gap-5 ">
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" name='address'  placeholder="Address" className="input input-bordered" required />
         
        </div>
        </div> 

        <div className=" ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo' placeholder="Photo" className="input input-bordered"  />
        </div>
        
        </div>
        
        <input type="submit" value="Add a Contact" className="btn btn-block" />
        
      </form>
    </div>
  </div>
</div>
    );
};

export default AddContactForm;