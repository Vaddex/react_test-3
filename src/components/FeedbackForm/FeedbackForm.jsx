import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./FeedbackForm.module.css";

const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "Too short!")
        .max(20, "Too long!")
        .required("Required!"),
    email: Yup.string()
        .min(2, "Too short!")
        .max(20, "Too long!")
        .required("Required!"),
    message: Yup.string()
        .min(3, "Too short!")
        .max(20, "Too long!")
        .required("Required!"),
    level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required!"),
});

const initialValues = {
    username: "",
    email: "",
    message: "",
    level: "good",
};

const FeedbackForm = () => {
    const nameFieldId = useId();
    const emailFieldId = useId();
    const msgFieldId = useId();
    const levelFieldId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.container}>
                <label htmlFor={nameFieldId}>Username</label>
                <Field type="text" name="username" id={nameFieldId} />
                <ErrorMessage
                    name="username"
                    component="span"
                    className={css.error}
                />
                <br />

                <label htmlFor={emailFieldId}>Email</label>
                <Field type="email" name="email" id={emailFieldId} />
                <ErrorMessage
                    name="email"
                    component="span"
                    className={css.error}
                />
                <br />

                <label htmlFor={msgFieldId}>Message</label>
                <Field
                    as="textarea"
                    name="message"
                    id={msgFieldId}
                    rows="5"
                ></Field>
                <ErrorMessage
                    name="message"
                    component="span"
                    className={css.error}
                />
                <br />

                <label htmlFor={levelFieldId}>Service satisfaction level</label>
                <Field as="select" name="level" id={levelFieldId}>
                    <option value="good">Good</option>
                    <option value="neutral">Neutral</option>
                    <option value="bad">Bad</option>
                </Field>
                <ErrorMessage
                    name="level"
                    component="span"
                    className={css.error}
                />
                <br />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default FeedbackForm;
