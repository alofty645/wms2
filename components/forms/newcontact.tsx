import React from "react";
import { Formik } from "formik";
import Button from "@/components/UI/Button";

const Basic = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="m-10 grid grid-cols-2 gap-5 text-white "
        >
          <div>
            <h1 className="m-1">First Name</h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-lg w-full max-w-xs "
            />
          </div>
          <div>
            <h1 className="m-1">First Name</h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-lg w-full max-w-xs"
            />
          </div>

          <Button title={"Submit"}></Button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
