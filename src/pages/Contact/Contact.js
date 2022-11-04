import React from 'react';
import Button from '../../components/Snippets/Form/Button/Button';
import Form from '../../components/Snippets/Form/Form';
import FormTitle from '../../components/Snippets/Form/FormTitle/FormTitle';
import TextArea from '../../components/Snippets/Form/TextArea/TextArea';
import TextInput from '../../components/Snippets/Form/TextInput/TextInput';

const Contact = () => {
    return (
        <div className="container">
            <FormTitle title="Contact Us" />
            <Form action="" className="form-area">
                <TextInput type="text" placeholder="Your first name" label="First Name" required />
                <TextInput type="text" placeholder="Your last name" label="Last Name" required />
                <TextInput
                    type="email"
                    placeholder="Email address"
                    label="Email address"
                    required
                />
                <TextInput type="text" placeholder="Your phone" label="Phone" required />
                <TextArea label="Address" cols="30" rows="5" />
                <div className="form-button-area">
                    <Button type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
};

export default Contact;
