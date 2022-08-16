import Link from "next/link";
import React from "react";


const styles = {
  border: '5px solid black', 
  height: '50vh', 
  width: '50%',

};
const LandingPage = ({ users }) => {
  if (users.currentUser===null)
  {console.log(users);
    return (
<div style={styles}>
          <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
          Please Insert Card/Sign In
          </h3>
          <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            CurrentValue:
          </p>
              <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
    {/* {users.currentUser.lat} */}
    </p>
          {/* {userList} */}
          </div>
    );
  }
else{
//  const userList = users.currentUser.map((user) => {
//   return (
//     <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
//     {user.value}
//    </p>
//   );
console.log(users)
};


  return (

 <div style={styles}>
          <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
            Card Information
          </h3>
          <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            CurrentValue:
          </p>
              <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
    {/* {users.currentUser.lat} */}
    </p>
          {/* {userList} */}
          </div>
  );
  };

LandingPage.getInitialProps = async (context, client, currentUser) => {
  // console.log(currentUser.id);
  // const {id} = currentUser.id

  const { data } = await client.get(`/api/users/currentUser`);

  return { users: data };
};

export default LandingPage;
