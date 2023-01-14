import { Button } from '../Button';

export default {
    title: "Button",
    component: "dx-button",
};

const Template = (args: any) => Object.assign(new Button(), args);

export const Primary: any = Template.bind({});
Primary.args = {
    title: "Register",
    variant: "primary",
};