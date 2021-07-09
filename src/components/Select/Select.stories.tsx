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

export const BaseExample = () => <Select collapsed={true}
                                         onChange={()=>{}}
                                         options={[
                                             {id: '1', value: 'Minsk'},
                                             {id: '1', value: 'Moscow'},
                                             {id: '1', value: 'Kiev'}
                                         ]}
                                         title={'selectTitle'}
                                         onChangeTitle={()=>{}} />