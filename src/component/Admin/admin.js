import { Button } from '@mui/material';
import React from 'react'
import AdminDashboard from '../Dashboard/Admin/admin';
import classes from './styles.module.css';
export default function Admin() {
    return (
        <div className={classes.adminWrapper}>
    {/* <div className={classes.headerWrapper}>
        <div>
            Heading
        </div>
        <div>
            <Button variant="contained" disableElevation>Logout</Button>
        </div>
    </div> */}
    <div className={classes.mainWrapper}>
        <AdminDashboard/>
    </div>
        </div>
    )
}
