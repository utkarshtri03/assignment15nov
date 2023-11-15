import React, { useState } from "react";
import Poupcomponent from "./Poupcomponent";
import DeletePopup from "./DeletePopup";
import {
  Deleteicon,
  Downloadicon,
  Markprivateicon,
  Moveicon,
  Renameicon,
  Shareicon,
  Viewicon,
} from "../assets/images";

const Optionpopup = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
  };

  return (
    <div className="bg-white p-2 rounded-md">
      <Poupcomponent icon={<Viewicon />} name="View" />
      <Poupcomponent icon={<Downloadicon />} name="Download" />
      <Poupcomponent icon={<Renameicon />} name="Rename" />
      <Poupcomponent icon={<Shareicon />} name="Share Link" />
      <Poupcomponent icon={<Moveicon />} name="Move" />
      <Poupcomponent icon={<Markprivateicon />} name="Mark Private" />
      <Poupcomponent
        icon={<Deleteicon />}
        name="Delete"
        bgcolor="text-[#F15454]"
        onClick={handleDeleteClick}
      />
      {showDeletePopup && <DeletePopup onClose={closeDeletePopup} />}
    </div>
  );
};

export default Optionpopup;
