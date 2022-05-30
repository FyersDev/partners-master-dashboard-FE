import React from "react";

import GroupIcon from "@material-ui/icons/Group";
import SendIcon from "@material-ui/icons/Send";

import ApList from "../../pages/apList";
import SMS from "../../pages/SMS";

const initState = {
  menuList: [
    {
      link: "/ap-list",
      sub: false,
      name: "AP List",
      icon: <GroupIcon color="primary" />,
    },
    {
      link: "/send-sms",
      sub: false,
      name: "Send SMS",
      icon: <SendIcon color="primary" />,
    },
  ],
  routes: [
    { link: "/ap-list", comp: ApList },
    { link: "/send-sms", comp: SMS },
  ],
  menus: [],
};
// customer_invoices
const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
