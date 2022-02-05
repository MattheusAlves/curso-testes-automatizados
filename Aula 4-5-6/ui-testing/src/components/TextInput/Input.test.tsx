import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./";

describe("TextInput", () => {
  const onChange = jest.fn();
  beforeEach(() => {
    render(<Input label="fizz" onChange={onChange} name="jest" />);
  });

  it("should render input with label", () => {
    expect(screen.getByText("fizz")).toBeInTheDocument();
    expect(screen.getByTestId("input_jest")).toBeVisible();
  });

  it("should call onChange when input changes", () => {
    fireEvent.change(screen.getByTestId("input_jest"), {
      target: {
        value: "foo",
      },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
