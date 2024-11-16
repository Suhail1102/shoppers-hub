// import { Button } from "react-bootstrap";
// import { useForm } from "react-hook-form";
// import  PulseLoader  from "react-spinners/PulseLoader";
// import { useNavigate } from "react-router-dom";

// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors , isSubmitting, isSubmitted, isSubmitSuccessful},
//   } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     // Save the form data to local storage
//     localStorage.setItem("formData", JSON.stringify(data));
//     useEffect(() => {
//       navigate("/");
//     }, [])
    
//   };
  

//   return (
//     <>
//     <div className="form-body ">
//       {isSubmitting?<PulseLoader
       
//        />:""}
    
//       <form className="Form" onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label className="form-label" htmlFor="firstName">Name</label><br />
//           <input
//             id="name"
//             placeholder="enter your name"
//             className="form-control"
//             {...register("name", { required: "Name is required", maxLength: 20 })}
//           />
//           {errors.name && (
//             <span className="text-danger">{errors.name.message}</span>
//           )}
//         </div>

//         <div>
//           <label htmlFor="email"className="form-label" >Email</label><br />
//           <input className="form-control" placeholder="enter your email"
//             id="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                 message: "Invalid email address",
//               },
//             })}
//           /><br />
//           {errors.email && (
//             <span className="text-danger">{errors.email.message}</span>
//           )}
//         </div>

//         <Button type="submit" variant="primary" disabled={isSubmitting} >Login</Button>
//       </form>
      
//     </div>
       
//     </>
//   );
// }


import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from "react-router-dom";
import { useContext, useState} from "react";
import { UserContext } from "./Context/UserContext";

export default function Form() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { setIsUserLoggedIn } = useContext(UserContext); // Access context to update login state
  const navigate = useNavigate();

const [Loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    // Save the form data to local storage
    localStorage.setItem("formData", JSON.stringify(data));
    setLoading(true)
    setTimeout(() => {
      setIsUserLoggedIn(true);
      setLoading(false)
    }, 1000);
   
    navigate("/");
  };

  return (
    <div className="form-body">
      {Loading && <PulseLoader 
       style={{ display:"flex", alignItems:"center", position: "absolute" ,top: "5rem"}}
       color="purple"
      />}
      
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="form-label" htmlFor="name">Name</label><br />
          <input
            id="name"
            placeholder="Enter your name"
            className="form-control"
            {...register("name", { required: "Name is required", maxLength: 20 })}
          />
          {errors.name && <span className="text-danger">{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email" className="form-label">Email</label><br />
          <input
            className="form-control"
            placeholder="Enter your email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          /><br />
          {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </div>

        <Button type="submit" variant="primary" disabled={isSubmitting}>Login</Button>
      </form>
    </div>
  );
}
