import React, { useState, useEffect } from 'react';
import { Button, Input, Segment, Form, Radio } from 'semantic-ui-react';

export const RadioComponents = ({ setRadio, header }) => {
    const [value, setValue] = useState("")
    const handleChange = value => {
        setValue(value);
    }
    useEffect(() => {
        setRadio(value);
    }, [value])
    return (
        <Form>
            <Form.Field>
                {header}: <b>{value}</b>
            </Form.Field>
            <Form.Field>
                <Radio
                    label='10%'
                    name='radioGroup'
                    value='10'
                    checked={value === "10"}
                    onChange={(e, value) => handleChange(value.value)}

                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='25%'
                    name='radioGroup'
                    value='25'
                    checked={value === "25"}
                    onChange={(e, value) => handleChange(value.value)}
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='0%'
                    name='radioGroup'
                    value='0'
                    checked={value === "0"}
                    onChange={(e, value) => handleChange(value.value)}
                />
            </Form.Field>
            <Form.Field>
                <Input placeholder="Своё значение" value={value} onChange={e => handleChange(e.target.value)} style={{ marginLeft: "1%", marginBottom: "2%", width: '50%' }} />
            </Form.Field>
        </Form>
    );
};