import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Checkbox } from 'antd';

import { BiEnvelopeOpen } from "react-icons/bi";

const NotificationBox = ({ visible }) => {
  return (
    <aside
      className={visible ? "notification--box active" : "notification--box"}
    >
      <div className="notification--box-header flex items-center">
        <BiEnvelopeOpen className="mr-2" size={24} />
        <span className="font-bold">NOTIFICATIONS</span>
      </div>
      <div className="notification--box-wrapper w-full">
        <ul className="w-full">
          <li className="notification--box-item p-2">
            <div className="notification--box-item-header grey-border pb-2 flex items-center justify-between">
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-secondary mr-2"></div>
                <div className="flex flex-col">
                    <span className="font-semibold text-xs">Alper Erkol</span>
                        <span className="user-type text-xs font-extrabold text-center">graduate</span>
                </div>
              </div>
              <Checkbox></Checkbox>
            </div>
            <div className="notification--box-item-body text-xs font-semibold mt-2">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae exercitationem distinctio incidunt, nam nisi illo alias possimus inventore ex? Libero.</span>
            </div>
            <div className="absolute left-2 right-2 bottom-2 notification--box-item-footer font-semibold text-xs flex items-center justify-between">
                <span>go to post</span>
                <span>3 minutes ago.</span>
            </div>
          </li>
          <li className="notification--box-item"></li>
          <li className="notification--box-item"></li>
        </ul>
      </div>
    </aside>
  );
};

export default NotificationBox;
