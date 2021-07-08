import React from 'react';
import {ComponentMeta} from "@storybook/react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;