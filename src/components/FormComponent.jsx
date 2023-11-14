import { useState } from "react";
import axios from "axios";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const [serverState, setServerState] = useState();

  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("*Name required"),
    email: Yup.string().email("Invalid email").required("*Email required"),
    message: Yup.string()
      .min(2, "Too Short!")
      .max(180, "Too Long!")
      .required("*Message required"),
  });

  const handleSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/meqbwobp",
      data: values,
    })
      .then((response) => {
        console.log(response);
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          "Thanks for your message! I'll be in touch soon."
        );
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="flex flex-col w-full">
              <label className="text-slate-200 text-base" htmlFor="name">
                Your Name
              </label>
              <Field
                className="px-2 py-1 text-base mt-1 bg-slate-900 border-b text-white rounded w-full"
                type="text"
                name="name"
                id="name"
                placeholder="John doe"
              />
              <ErrorMessage
                name="name"
                className="errorMsg text-sm text-red-600"
                component="p"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-slate-200 text-base" htmlFor="email">
                Email Address
              </label>
              <Field
                className="px-2 py-1 text-base mt-1 bg-slate-900 border-b text-white rounded w-full"
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
              />
              <ErrorMessage
                name="email"
                className="errorMsg text-sm text-red-600"
                component="p"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-slate-200 text-base" htmlFor="message">
              Your Message
            </label>
            <Field
              as="textarea"
              name="message"
              id="message"
              rows="2"
              className="px-2 py-1 text-base mt-1 bg-slate-900 border-b text-white w-full rounded"
              placeholder="Message"
            ></Field>
            <ErrorMessage
              name="message"
              className="errorMsg text-sm text-red-600"
              component="p"
            />
          </div>
          <div className="button-container ms-auto mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-primary border-0 w-max rounded text-slate-950 font-medium text-lg "
            >
              Submit
            </button>
          </div>
          {serverState && (
            <p className={!serverState.ok ? "errorMsg" : ""}>
              {serverState.msg}
            </p>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
