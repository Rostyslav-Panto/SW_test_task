import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import GroupSelect from "./GroupSelect";
import FormControl from "@mui/material/FormControl";
import axios from "axios";


const UserForm = ({inputRef}) => {
    const [user, setUser] = useState({
        username: "",
        selected_group: ""
    })

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = () => {
        const validated_group = {"group_name": user.selected_group}
        const request_data = {
            "user_name": user.username,
            "group": validated_group
        }
        try {
            axios.post('http://127.0.0.1:8000/api/users/', request_data)
                .then((response) => response.data)
        } catch (e) {
            alert(e)
        }
        inputRef.current.focus();
    }
    return (
        <form onSubmit={handleSubmit} noValidate>
            <FormControl>
                <Grid
                    container spacing={1} direction={"column"}>
                    <Grid item xs={6}>;
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            value={user.group_name}
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>;
                        <GroupSelect
                            selected_group={user.selected_group}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>;
                        <Button
                            type="submit"
                            color="primary"
                            variant="outlined"
                        >Add User</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </form>
    )

}

export default UserForm;
