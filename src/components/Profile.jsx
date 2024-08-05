import { useState } from "react";

const Profile = (props) => {
  const [age] = useState(props.age);

  return (
    <div>
      <h1>
        {props.firstName}, {props.lastName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  );
};

export default Profile;
