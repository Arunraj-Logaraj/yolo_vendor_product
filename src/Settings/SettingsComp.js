import React, { useState } from "react";
import Layout from "../Layout";
import { Permisson } from "./Permisson";
import { PropertySetting } from "./PropertySetting";
import { RoleSetting } from "./RoleSetting";
import { UpdatePassword } from "./UpdatePassword";
import { UsersSetting } from "./UsersSetting";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import padlock from "../images/padlock 1.png";
import setting from "../images/Group (3).png";
import role from "../images/Group (4).png";
import users from "../images/Group (5).png";
import permission from "../images/Group (6).png";

export const SettingsComp = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen1 = () => {
    setOpen1(!open1);
  };

  const handleClickOpen2 = () => {
    setOpen2(!open2);
  };

  const handleClickOpen3 = () => {
    setOpen3(!open3);
  };
  const handleClickOpen4 = () => {
    setOpen4(!open4);
  };

  return (
    <Layout>
      <div>
        <div className="settingComp">
          <div className="item item-1" onClick={handleClickOpen}>
            <img src={padlock} alt="padlock" />
            <p>Update PassWord</p>
            <ArrowCircleRightIcon />
            {/* <button className="one">clickMe</button> */}
          </div>
          <div className="item item-2" onClick={handleClickOpen1}>
            <img src={setting} alt="setting" />
            <p>Property Setting</p>
            <ArrowCircleRightIcon />
            {/* <button onClick={handleClickOpen1}>PropertySetting</button> */}
          </div>
          <div className="item item-3" onClick={handleClickOpen2}>
            <img src={role} alt="role" />
            <p>Role</p>
            <ArrowCircleRightIcon />
            {/* <button onClick={handleClickOpen2}>RoleSetting</button> */}
          </div>
          <div className="item item-4" onClick={handleClickOpen3}>
            <img src={users} alt="users" />
            <p>Users</p>
            <ArrowCircleRightIcon />
            {/* <button onClick={handleClickOpen3}>UsersSetting</button> */}
          </div>
          <div className="item item-5" onClick={handleClickOpen4}>
            <img src={permission} alt="permissions" />
            <p>Permissions</p>
            <ArrowCircleRightIcon />
            {/* <button onClick={handleClickOpen4}>Permission</button> */}
          </div>
          {open ? <UpdatePassword setTrigger={setOpen} /> : ""}
          {open1 ? <PropertySetting setTrigger={setOpen1} /> : ""}
          {open2 ? <RoleSetting setTrigger={setOpen2} /> : ""}
          {open3 ? <UsersSetting setTrigger={setOpen3} /> : ""}
          {open4 ? <Permisson setTrigger={setOpen4} /> : ""}
        </div>
      </div>
    </Layout>
  );
};
