import React from "react";
import { IoMdBookmarks } from "react-icons/io";
import { BiCode } from "react-icons/bi";
import { RiBug2Fill } from "react-icons/ri";
import { MdFace } from "react-icons/md";


const AppList = ({ data }) => {
  return (
    <div className="d-flex border-bottom p-1 align-items-center">
      <div className="mx-2">
        <IoMdBookmarks size={56} />
      </div>
      <div className="text-break">
        <h5 className="m-0 p-0">{data.name}</h5>
        <small className="text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem, repellendus.
        </small>
        <div className="text-secondary">
          {data.language && (
            <span>
              <BiCode color="black" /> {data.language}
            </span>
          )}{" "}
          &nbsp;
          <span>
            <RiBug2Fill color="black" /> {data.open_issues}
          </span>{" "}
          &nbsp;
          <span>
            <MdFace color="black" /> {data.watchers_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppList;
