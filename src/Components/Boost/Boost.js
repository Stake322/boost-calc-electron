import React, { useEffect, useState } from 'react';
import { Button, Divider, Grid, GridColumn, Header, Input, Radio, Segment } from 'semantic-ui-react';
import { RadioComponents } from './RadioComponents';

import { LogicBoostCalc } from '../LogicBoostCalc';

export const Boost = () => {
    const [result, setResult] = useState(0);
    const [totalResult, setTotalResult] = useState(0);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);

    const [radioExtra, setRadioExtra] = useState(0);
    const [radioDiscount, setRadioDiscount] = useState(0);

    function throttle(fn, ms) {
        let timeout;
        function exec() {
            fn.apply()
        }
        function clear() {
            timeout = undefined ? null : clearTimeout(timeout)
        }
        if (fn !== undefined && ms !== undefined) {
            timeout = setTimeout(exec, ms)
        } else {
            console.log('callback function and the timeout must be supplied')
        }
        // API to clear the timeout
        throttle.clearTimeout = () => clear()
    }

    useEffect(() => {
        throttle(() => {
            setResult(Math.ceil(LogicBoostCalc(+from, +to)));
        }, 500)
        setTotalResult(Math.ceil(result))
    }, [from, to, result])

    useEffect(() => {
        setTotalResult(Math.ceil(result * (1 + +radioExtra / 100)))
    }, [radioExtra])
    useEffect(() => {
        setTotalResult(Math.ceil(result * (1 - +radioDiscount / 100)))
    }, [radioDiscount])

    return (
        <Segment>
            <Input type='number' max={4} placeholder='ММР ОТ' label='От' labelPosition='left' style={{ marginLeft: "1%" }} onChange={e => setFrom(e.target.value)} />
            <Input type='number' placeholder='ММР ДО' label='До' labelPosition='left' style={{ marginLeft: "1%", marginBottom: "2%" }} onChange={e => setTo(e.target.value)} />
            <Grid columns={2}>
                <GridColumn>
                    <RadioComponents setRadio={setRadioDiscount} header="Скидка" />
                </GridColumn>
                <GridColumn>
                    <RadioComponents setRadio={setRadioExtra} header="Доп. Плата" />
                </GridColumn>
            </Grid>
            <Divider />
            <Header as='h2'>Цена чистая: {result} RUB.</Header>

            <Header as='h2'>Цена с добавками: {totalResult} RUB.</Header>
        </Segment>
    );
};