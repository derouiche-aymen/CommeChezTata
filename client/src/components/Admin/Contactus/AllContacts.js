import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTraiteur } from "../../../redux/actions/traiteurAction";
import ContactsCom from "./ContactsCom";

const AllContacts = () => {
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getTraiteur());
    }, []);
    const Contacts = useSelector((state) => state.ContactUsReducer.contactUs.allContactUs);

  return (
    <div className='listContacts'>
        {Contacts && Contacts.map(el=> <ContactsCom el={el} />)}
    </div>
  );
};
export default AllContacts;
