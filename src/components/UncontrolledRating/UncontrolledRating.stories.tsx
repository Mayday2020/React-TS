import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledRating>;

export const EmptyRating = () => <UncontrolledRating />

