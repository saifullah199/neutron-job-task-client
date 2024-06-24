import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ContactCard from "../../Components/AllContacts/ContactCard";



const AllContacts = () => {
    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const { data } = await axios.get(`https://neutron-task-server.vercel.app/contacts`);
          return data;
        },
      });
      console.log(users)
    return (
        <div className='container w-10/12 mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 gap-4">
                {
                    users.map(user => <ContactCard key={user._id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default AllContacts;