import React, {useState} from 'react';
import {AppBar, Button, ButtonGroup, Toolbar} from "@mui/material";

import HeaderStyles from "./headerStyles";
import UserPage from "./UserPage";
import Box from "@mui/material/Box";
import GroupPage from "./GroupPage";

const MainPage = () => {
    const [users_page, setPage] = useState(true)
    const header_classes = HeaderStyles();
    return (<div>
        <AppBar
            position="relative"
            elevation={0}>
            <Toolbar className={header_classes.toolbar}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => setPage(true)}>Users</Button>
                    <Button onClick={() => setPage(false)}>Groups</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
        <Box>
            {users_page ? <UserPage/> : <GroupPage/>}
        </Box>
    </div>);
};

export default MainPage;
