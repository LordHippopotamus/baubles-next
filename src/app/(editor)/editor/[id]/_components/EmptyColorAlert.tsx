"use client"

import { Alert } from "@mui/material"
import { useEmptyColorAlertStore } from "../_hooks/emptyColorAlertStore"

const EmptyColorAlert = () => {
    const open = useEmptyColorAlertStore(state => state.open)
    const setOpen = useEmptyColorAlertStore(state => state.setOpen)

    const handleClose = () => setOpen(false)

    if (!open) return 

    return (
        <Alert sx={{position: 'absolute', bottom: 16, left: 16}} severity="error" onClose={handleClose}>Pick a color in the lower right corner!</Alert>
    )
}

export default EmptyColorAlert