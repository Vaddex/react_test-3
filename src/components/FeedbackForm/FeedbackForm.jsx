import { Field, Form, Formik } from "formik";
// import css from "./FeedbackForm.module.css";

const initialValues = {
    username: "",
    email: "",
};

const FeedbackForm = () => {
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field type="text" name="username" />
                <Field type="email" name="email" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default FeedbackForm;
