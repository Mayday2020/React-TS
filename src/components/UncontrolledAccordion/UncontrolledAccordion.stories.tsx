import React from 'react';
import { ComponentMeta } from '@storybook/react';

import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledAccordion>;

export const ModeChanging = () => <UncontrolledAccordion titleValue={'Uncontrolled Users'}/>



