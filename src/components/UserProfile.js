import React, { useState } from "react";

function UserProfile (){
    const [user , setUser ] = useState({
        name : 'Aline Brek ', 
        age  : 34,
        email : 'aline115@gmail.com'
    });
    const [userDeatails , setUserDeatails] = useState({
        userName :"Kishan ",
        userAge : 23,
        userContact :{
            contactNumber: 33446312,
            userEmail : "kishankul"
        }
    })
    const upadateName = () =>{
        setUser(prevState => ({
            ...prevState, 
            name: 'Jane Doe' 
          }));
    };
    
  const updateEmail = () => {
    setUser(prevState => ({
      ...prevState,
      email: 'janedoe@example.com'
    }));

  };
   const UpadetEmail = () =>{
     setUserDeatails(prevState =>({
        ...prevState,
        userContact :{
           ...prevState.userContact,
           userEmail :"kishan1156@gmail.com"
        }
     }));
   };
  

  return(
     <div>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <button onClick={upadateName}>Change Name</button>
        <button onClick={updateEmail}>Change Email</button>
        <h2>User Deatails:</h2>
        <p>UserName {userDeatails.userName}</p>
        <p> Age:{userDeatails.userAge}</p>
        <p>Email: {userDeatails.userContact.userEmail}</p>
        <p>Contact:{userDeatails.userContact.contactNumber}</p>
        <button  onClick={UpadetEmail}>ChangeEmail</button>
     </div>
  )
}
export default UserProfile;