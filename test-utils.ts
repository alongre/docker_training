/* eslint-disable import/export */

import { render } from "@testing-library/react";


const customRender = (ui: any, options = {}) =>

  render(ui, {

    // wrap provider(s) here if needed

    wrapper: ({ children }) => children,

    ...options,

  });




export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

// override render export

export { customRender as render };