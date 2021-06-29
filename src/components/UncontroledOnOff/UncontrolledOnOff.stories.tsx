import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledOnOff>;

export const OnMode = () => <UncontrolledOnOff />


