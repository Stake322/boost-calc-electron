import React from 'react'
import { Button, Segment, } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const Header = () => {
    const segmentStyle = {
        position: "sticky",
        top: "0%",
        width: "100%",
        display: 'flex',
        justifyContent: "center",
        alingItems: 'center',
        backgroundImage: 'url(https://wallpaperaccess.com/full/3705495.jpg)'
    }
    return (
        <Segment textAlign='center' color="purple" style={segmentStyle}>
            <Link to="/dota2-boost-calc/">
                <Button color='purple' size='small'>Буст</Button>
            </Link>
            <Link to="/dota2-boost-calc/prices">
                <Button color='purple' size='small'>Изменить цену</Button>
            </Link>

        </Segment >
    )

}
export default Header   