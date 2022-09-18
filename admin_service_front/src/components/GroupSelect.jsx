import React, {useEffect} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";

const CategorySelect = ({selected_group, onChange}) => {
    const [groups, setGroups] = React.useState([]);

    useEffect(() => {
        fetchCategories()
    }, [])

    async function fetchCategories() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/groups/')
            setGroups(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <FormControl fullWidth>
            <Select
                value={selected_group}
                label="Category"
                name="selected_group"
                onChange={onChange}
            >
                {groups.map((group) => (
                    <MenuItem key={group.id} value={group.group_name}>
                        {group.group_name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default CategorySelect;