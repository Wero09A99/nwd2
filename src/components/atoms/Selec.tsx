import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectBasic() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <FormControl variant="standard" sx={{ minWidth: 100, ml: 1 }}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Categories' }}
                sx={{
                    '& .MuiSelect-select': {
                        padding: '8px 32px 8px 10px',
                        fontWeight: 'bold',
                    },
                }}
            >
                <MenuItem value="">
                    All categories
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
            </Select>
        </FormControl>
    );
}
