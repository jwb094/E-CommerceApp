import React, { useState } from "react";
import ErrorAlert from "./ErrorAlert";
function Newsletter(props) {
  const NewsletterList = [
    { id: 1, name: "Weekly" },
    { id: 2, name: "Forenight" },
    { id: 3, name: "Monthly" },
  ];

  const [firstname, setFirsttName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedNewsletter, setselectedselectedNewsletter] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (e) => {
    setselectedselectedNewsletter(e.target.value);
  };

  function reset() {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setselectedselectedNewsletter("");
    setErrors({});
    setResult("");
    setSubmitted(false);
  }

  function validateFields() {
    let validationErrors = {};
    //  First Name validation
    if (!firstname) {
      validationErrors.firstname = "Your Name is required";
    }
    //  Last Name validation
    if (!lastname) {
      validationErrors.lastname = "Your Name is required";
    }

    //  Last Name validation
    if (!selectedNewsletter) {
      validationErrors.selectedNewsletter = " Please pick an option is required";
    }


    // Email validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid Email address";
    }

    //append the validationErrors to State
    setErrors(validationErrors);
    //Return True or false depending on the length
    return Object.keys(validationErrors).length === 0;
  }

  const closeError = (field) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[field];
      return updatedErrors;
    });
  };

  function handleNewsletterSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      const isValid = validateFields();
      if (!isValid) return;

      setSubmitted(true);
      setResult(firstname + lastname + " for subscribing to our newsletter");

      // Show success for 5 seconds
      setTimeout(() => {
        reset();
      }, 3000);
    }, 3000);
    setResult("");
  }

  return (
    <section
      data-template="Newsletters"
      data-view="default"
      className="c-searchbar | py-12"
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-12">
        {result ? (
          <div className="flex flex-col justify-center items-center gap-4 bg-emerald-100 border-t-4 border-emerald-500">
            <h2 className="mt-6 | text-5xl ">Success</h2>

            <p className="mb-6 | text-lg">Thank you</p>

            <p>{result}</p>
          </div>
        ) : (
          <form
            action=""
            className="flex flex-col gap-y-6"
            onSubmit={handleNewsletterSubmit}
          >
            {/* First + Last Name */}
            <div className="w-full | md:flex md:flex-row  md:justify-center gap-x-6">
              <div className="w-full md:w-1/2  px-auto gap-y-6 flex">
                <div className="flex flex-col w-full ">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    className="w-full md:w-11/12 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
                    placeholder="Daniel"
                    value={firstname}
                    onChange={(e) => setFirsttName(e.target.value)}
                  />
                  {errors?.firstname && (
                    <ErrorAlert
                      message={errors.firstname}
                      onClose={() => closeError("firstname")}
                    />
                  )}
                </div>

                <div className="flex flex-col w-full ">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="w-full md:w-11/12 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
                    placeholder="Jones"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors?.lastname && (
                    <ErrorAlert
                      message={errors.lastname}
                      onClose={() => closeError("lastname")}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* Newsletter Option +*/}
            <div className="w-full | md:flex md:flex-row  md:justify-center ">
              <div className="flex flex-row justify-between  w-full md:w-1/2  px-auto ">
                {NewsletterList.map((item) => (
                  <div class="inline-flex items-center" key={item.id}>
                    <label
                      className="relative flex items-center cursor-pointer"
                      htmlFor={`email-${item.id}`}
                    >
                      <input
                        name={item.name}
                        type="radio"
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                        id={`email-${item.id}`}
                        value={item.name}
                        checked={selectedNewsletter === item.name}
                        onChange={handleSelect}
                      />
                      <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                    </label>
                    <label
                      className="ml-2 text-slate-600 cursor-pointer text-sm"
                      htmlFor={`email-${item.id}`}
                    >
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
                 {errors?.selectedNewsletter && (
                    <ErrorAlert
                      message={errors.selectedNewsletter}
                      onClose={() => closeError("selectedNewsletter")}
                    />
                  )}
            </div>
            {/* Email */}
            <div className="w-full | md:flex md:flex-row  md:justify-center">
              <div className="relative flex flex-col md:flex-row mx-6 gap-y-6 justify-center md:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <input
                  type="email"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="abcsd@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  type="submit"
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:ml-2"
                >
                  Sumbit
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              {errors?.email && (
                <ErrorAlert
                  message={errors.email}
                  onClose={() => closeError("email")}
                />
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
