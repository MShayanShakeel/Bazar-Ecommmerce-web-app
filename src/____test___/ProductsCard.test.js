// import Productcart from "../components/ProductsCard";

// const Productcart = ({ product }) => {
//     const navigate = useNavigate();
//     const _id = product.title ;
  
//     const idString =(_id)=>{
//       return String(_id).toLowerCase().split(" ").join("");
//     };
//     const rootID = idString(_id);
//               //handle PRODUCT detaIL and navigate by singel product page//
//     const handledetail=()=>{
//       navigate(`/product/${rootID}`,{
//         state: {
//           item : product,
         
//         },
//       }
//       expect(_id).toBe(true)
//       );
  
//     };


// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();
//     const Googlehandlerlogin=(e) =>
//   { 
//     e.preventDefault();
//     signInWithPopup(auth , provider)
//     .then((result)=> {
//       const user = result.user;
//       dispatch(
//         addUser({
//           _id: user.uid,
//           name : user.displayName,
//           email : user.email,
//           image  : user.photoURL,
//         })
//       );
//       setTimeout(() => {
//         navigate("/")
//       }, 1500);
//     })
//     .catch((error)=> {
//       console.log(error);
//     });
//   };
//   expect (result.user).toBe(true)}
