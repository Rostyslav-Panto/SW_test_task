import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import axios from "axios";


const UserForm = () => {
    const [group, setGroup] = useState({
        group_name: "",
        description: ""
    })

    const handleChange = (event) => {
        setGroup({
            ...group,
            [event.target.name]: event.target.value
        })

    }
    const handleSubmit = () => {
        const request_data = {
            "group_name": group.group_name,
            "description": group.description
        }
        try {
            axios.post('http://127.0.0.1:8000/api/groups/', request_data)
                .then((response) => response.data)
        } catch (e) {
            alert(e)
        }
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
                            value={group.group_name}
                            label="Group_name"
                            name="group_name"
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>;
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            value={group.description}
                            label="Description"
                            name="description"
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>;
                        <Button
                            type="submit"
                            color="primary"
                            variant="outlined"
                        >Add Group</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </form>
    )

}

export default UserForm;
