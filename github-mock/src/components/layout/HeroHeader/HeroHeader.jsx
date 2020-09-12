import React from "react";
import PropTypes from "prop-types";
import FormElement from "./Form/FormElement";
import FormInfoText from "./Form/FormInfoText";
import FormButton from "./Form/FormButton";

const HeroHeader = (props) => {
  return (
    <div className="w-full bg-gray-800">
      <div className="max-w-4xl m-auto py-10 md:grid md:grid-flow-col md:grid-cols-2">
        <div className="text-white p-6 m-auto">
          <p className="text-6xl text-bold">Built for developers</p>
          <p className="text-xl text-gray-500">
            Lorem ipsum is a development platform inspired by the way you work.
            From{" "}
            <a className="text-white underline" href="#">
              open source
            </a>{" "}
            to{" "}
            <a className="text-white underline" href="#">
              business
            </a>
            , you can host and review code, manage projects, and build software
            alongside 50 million developers.
          </p>
        </div>
        <div className="px-16 py-6 md:px-6 hidden sm:block">
          <form className="bg-white shadow-md rounded-lg px-4 pt-6 pb-8 mb-4">
            <FormElement target="Username" type="text" />
            <FormElement target="Email" type="text" />
            <FormElement target="Password" type="password" />

            <FormInfoText>
              <>
                Make sure it's at least 15 characters OR at least 8 characters
                including a number and a lowercase letter.{" "}
                <a className="underline" href="#">
                  Learn more
                </a>
              </>
            </FormInfoText>

            <FormButton text="Sign up for Github" />

            <FormInfoText>
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.{" "}
                <a className="underline" href="#">
                  unde omnis
                </a>
              </>
            </FormInfoText>
          </form>
        </div>
      </div>
    </div>
  );
};

HeroHeader.propTypes = {};

export default HeroHeader;
