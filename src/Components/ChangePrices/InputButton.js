import React from 'react';
import { Button, Divider, Grid, GridColumn, Header, Input, Radio, Segment } from 'semantic-ui-react';


export const InputButton = ({ label, price, setMMR }) => {
    const placeHolder = 'Цена ' + price + ' Рублей'
    
    return (
        <div>
            <Header as='h4' content={label} />
            <Input type='number' placeholder={placeHolder} style={{ marginRight: "1%", marginBottom: "5%", maxWidth: '200px' }} onChange={e => setMMR(e.target.value)} />
        </div>


    );
};