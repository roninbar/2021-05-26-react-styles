import React from 'react'
import {
    FormControl, Grid, InputLabel, MenuItem, Select,
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { sessionInfoSelector, setState } from '../../storage/testSlice'

const useStyles = makeStyles((theme) => createStyles({
    container: {
        width: '100%',
    },
    placeHolder: {
        textAlign: 'center',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    label: {
        '&.Mui-focused': {
            color: 'red',
        },
    },
    select: {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
        },
    },
}))

const Home = (): React.ReactElement => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const testState = useSelector(sessionInfoSelector)
    const handleOnChange = (e: { target: { value: unknown } }) => {
        dispatch(setState(e.target.value))
    }

    return (
        <Grid container>
            <Grid item xs={12} className={classes.placeHolder}>
                <h2>Home Page Placeholder:<br />state= {testState}</h2>
            </Grid>
            <Grid item xs={12} className={classes.placeHolder}>
                <FormControl className={classes.formControl} variant="outlined">
                    <InputLabel className={classes.label} id="state">State</InputLabel>
                    <Select className={classes.select} labelId="state" value={testState} onChange={handleOnChange}>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default Home
