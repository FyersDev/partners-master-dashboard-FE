import React from 'react';

import GroupIcon from '@material-ui/icons/Group';

import ApList from "../../pages/apList"

const initState = {
    menuList: [
        {link: '/ap-list', sub: false, name: 'AP List', icon: <GroupIcon color="primary"/>}
    ],
    routes: [
        {link: '/ap-list', comp: ApList},
    ],
    menus: []
};
// customer_invoices
const reducer = (state=initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
