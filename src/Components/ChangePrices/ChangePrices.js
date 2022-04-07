import React, { useEffect, useState } from 'react';
import { Button, Container, Divider, Grid, GridColumn, Header, Input, Radio, Segment } from 'semantic-ui-react';
import Alert from '../Alert';
import { InputButton } from './InputButton';

export const ChangePrices = () => {

    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState('')

    const [MMR1, setMMR1] = useState()
    const [MMR2, setMMR2] = useState()
    const [MMR3, setMMR3] = useState()
    const [MMR4, setMMR4] = useState()
    const [MMR5, setMMR5] = useState()
    const [MMR6, setMMR6] = useState()
    const [MMR7, setMMR7] = useState()
    const [MMR8, setMMR8] = useState()
    const [MMR9, setMMR9] = useState()
    const [MMR10, setMMR10] = useState()

    const savePrice = () => {
        localStorage.setItem('MMR1', MMR1)
        localStorage.setItem('MMR2', MMR2)
        localStorage.setItem('MMR3', MMR3)
        localStorage.setItem('MMR4', MMR4)
        localStorage.setItem('MMR5', MMR5)
        localStorage.setItem('MMR6', MMR6)
        localStorage.setItem('MMR7', MMR7)
        localStorage.setItem('MMR8', MMR8)
        localStorage.setItem('MMR9', MMR9)
        localStorage.setItem('MMR10', MMR10)
        setOpen(true);
        setInfo("Цены успешно сохранены")
    }
    useEffect(() => {
        setMMR1(localStorage.getItem('MMR1'))
        setMMR2(localStorage.getItem('MMR2'))
        setMMR3(localStorage.getItem('MMR3'))
        setMMR4(localStorage.getItem('MMR4'))
        setMMR5(localStorage.getItem('MMR5'))
        setMMR6(localStorage.getItem('MMR6'))
        setMMR7(localStorage.getItem('MMR7'))
        setMMR8(localStorage.getItem('MMR8'))
        setMMR9(localStorage.getItem('MMR9'))
        setMMR10(localStorage.getItem('MMR10'))
    }, [])

    return (
        <Segment>
            <Alert info={info} open={open} setOpen={setOpen} />
            <Container textAlign='center'>
                <Header as='h3' content='Изметь цену за 100 ММР' />
                <Grid columns={3}>
                    <GridColumn>
                        <InputButton label='1-2000 MMR' price={MMR1} setMMR={setMMR1} />
                        <InputButton label='2000-3000 MMR' price={MMR2} setMMR={setMMR2} />
                        <InputButton label='3000-3500 MMR' price={MMR3} setMMR={setMMR3} />
                    </GridColumn>
                    <GridColumn>
                        <InputButton label='3500-4000 MMR' price={MMR4} setMMR={setMMR4} />
                        <InputButton label='4000-4500 MMR' price={MMR5} setMMR={setMMR5} />
                        <InputButton label='4500-5000 MMR' price={MMR6} setMMR={setMMR6} />
                    </GridColumn>
                    <GridColumn>
                        <InputButton label='5000-5500 MMR' price={MMR7} setMMR={setMMR7} />
                        <InputButton label='5500-6000 MMR' price={MMR8} setMMR={setMMR8} />
                        <InputButton label='6000-6500 MMR' price={MMR9} setMMR={setMMR9} />
                    </GridColumn>
                </Grid>
                <InputButton label='7000+++' price={MMR10} setMMR={setMMR10} />

            </Container>
            <Divider />
            <Button color='green' onClick={savePrice} style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>SAVE PRICE</Button>


        </Segment>
    );
};