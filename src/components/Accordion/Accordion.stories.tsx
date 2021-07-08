import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;
const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    collapsed: true,
    ...callbacksProps,
    titleValue: 'Menu',
    items: []
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callbacksProps,
    collapsed: false,
    titleValue: 'Users',
    items: [
        {id: '1', title: 'Dimych', value: 1},
        {id: '2', title: 'Valera', value: 2},
        {id: '3', title: 'Artem', value: 3},
        {id: '4', title: 'Viktor', value: 4}
    ]
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => {
                          setValue(!value)
                      }}
                      items={[
                          {id: '1', title: 'Dimych', value: 1},
                          {id: '2', title: 'Valera', value: 2},
                          {id: '3', title: 'Artem', value: 3},
                          {id: '4', title: 'Viktor', value: 4}
                      ]}
                      onClick={id => alert(`user with id ${id} should be happy`)}
    />
}


