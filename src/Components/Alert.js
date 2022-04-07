import React, { useEffect, useRef } from 'react'
import {
    Header,
    Segment,
    TransitionablePortal,
} from 'semantic-ui-react'



function Alert({ open, info, setOpen }) {
    const intervalRef = useRef();
    useEffect(() => {
        const closePopup = () => setOpen(false);
        if (open) intervalRef.current = setTimeout(closePopup, 1500)
        return () => clearInterval(intervalRef.current)
    }, [open])

    return (
        <div>
            <TransitionablePortal open={open}>
                <Segment
                    textAlign='center'
                    style={{ left: '80%', position: 'fixed', top: '0%', zIndex: 10 }}
                >
                    <Header>{info}</Header>
                </Segment>
            </TransitionablePortal>

        </div>
    );
}

export default Alert;