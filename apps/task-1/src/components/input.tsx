import React from "react";

export const InputField = React.memo(() => {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Hello Your search has been forwarded !!!");
  };
  return (
    <form
      onSubmit={submitForm}
      className="flex  border border-white border-opacity-[.1]  p-2 w-[80%] justify-between "
    >
      <input
        type="text"
        placeholder="Search for your result .."
        className="bg-brand-bg text-white outline-none p-2 w-[80%]"
      />
      <button className="text-white">search</button>
    </form>
  );
});
