import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import { NotAuthorizedError } from "@cygnetops/common-v2";

const NewTicket = ({ currentUser, tickets }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [userId, setUserId] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title,
      price,
    },
    // onSuccess: () => Router.push("/transaction"),
  });

  const handleClick = (event, title, price) => {
    if (title == "adult_ticket_01") {
      setTitle(title);
      setPrice(price);
      setUserId(currentUser);
      event.preventDefault();
      doRequest();
    }
    if (title == "adult_ticket_02") {
      setTitle(title);
      setPrice(price);
      event.preventDefault();
      doRequest();
    }
    if (title == "student_ticket_01") {
      setTitle(title);
      setPrice(price);
      event.preventDefault();
      doRequest();

    }
    if (title == "student_ticket_02") {
      setTitle(title);
      setPrice(price);
      event.preventDefault();
      doRequest(); 
    }
  };
  return (

    <div>
      <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="bg-red-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
          <a className="mt-2 font-bold" onClick={(e) => handleClick(e, "adult_ticket_01", 2)}>adult_ticket_01</a>
          <div className="font-light">$2</div>
        </div>

        <div
          className="bg-red-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
          <a className="mt-2 font-bold" onClick={(e) => handleClick(e, "adult_ticket_02", 1)}>adult_ticket_02</a>
          <div className="font-light">$1</div>
        </div>

        <div
          className="bg-green-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
          <a className="mt-2 font-bold" onClick={(e) => handleClick(e, "student_ticket_01", 1)}>student_ticket_01</a>
          <div className="font-light">$1</div>
        </div>

        <div
          className="bg-green-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
          <a className="mt-2 font-bold" onClick={(e) => handleClick(e, "student_ticket_02", 9,5)}>student_ticket_02</a>
          <div className="font-light">$0.5</div>
        </div>
      </div>
    
    </div>
  );
};
NewTicket.getInitialProps = async (context, client, currentUser) => {
  if (currentUser===null) {
    throw new NotAuthorizedError();
  }
  const { data } = currentUser
  return { user: data };
};
export default NewTicket;
