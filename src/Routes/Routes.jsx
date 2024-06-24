import { createBrowserRouter } from "react-router-dom"
import Main from "../LayOuts/Main"
import AllContacts from "../Pages/AllContacts/AllContacts"
import AddContacts from "../Pages/AddContacts/AddContacts"
import UpdateContact from "../Pages/UpdateContact"


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
           {
             path: '/',
             element: <AllContacts/>
             
           },
           {
            path:'/add-contacts',
            element: <AddContacts/>
           },
           {
            path: '/update/:id',
            element: <UpdateContact/>,
            loader: ({params}) => fetch(`https://neutron-task-server.vercel.app/contact/${params.id}`)
           }
        ]
    }
])
export default router 