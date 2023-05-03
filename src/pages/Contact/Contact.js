/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Button from "../../components/Snippets/Form/Button/Button";
import Form from "../../components/Snippets/Form/Form";
import FormTitle from "../../components/Snippets/Form/FormTitle/FormTitle";
import TextArea from "../../components/Snippets/Form/TextArea/TextArea";
import TextInput from "../../components/Snippets/Form/TextInput/TextInput";
import TextSelect from "../../components/Snippets/Form/TextSelect/TextSelect";

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
                <TextSelect label="Parking Charge" required>
                    <select required>
                        <option value="">Select Car</option>
                        <option value="microbus">Microbus</option>
                        <option value="car">Car</option>
                        <option value="truck">Truck</option>
                    </select>
                </TextSelect>
                <TextInput type="text" placeholder="Your phone" label="Phone" required />
                <div className="offer-fields">
                    <div className="offer-radio-field">
                        <label className="checkcontainer">
                            All Food Item
                            <input type="radio" name="item_offer" />
                            <span className="radiobtn" />
                        </label>
                    </div>
                    <div className="offer-radio-field">
                        <label className="checkcontainer">
                            Specific Manu Item
                            <input type="radio" name="item_offer" />
                            <span className="radiobtn" />
                        </label>
                    </div>
                </div>
                <TextArea label="Address" cols="30" rows="5" />
                <div className="form-button-area">
                    <Button type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
};

export default Contact;
