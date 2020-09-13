import React, { useState } from "react";
import FormElement from "../../../../layout/HeroHeader/Form/FormElement";
import FormInfoText from "../../../../layout/HeroHeader/Form/FormInfoText";
import FormButton from "../../../../layout/HeroHeader/Form/FormButton";

const WelcomeFooterFormSection = () => {
  return (
    <div className="bg-gray-900 py-10 px-3 md:px-0">
      <div className="m-auto md:px-8 text-white w-full max-w-6xl">
        <p className="text-xl md:text-3xl px-5 text-center">
          Get started for free — join the millions of developers already using
          LoremHub to share their code, work together, and build amazing things.
        </p>
        <form className="w-full text-white pt-6 pb-8 mb-4">
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <div className="w-full px-2">
              <FormElement
                target="Username"
                type="text"
                placeholder="Pick a username"
              />
            </div>
            <div className="w-full px-2">
              <FormElement
                target="Email"
                type="text"
                placeholder="Your email address"
              />
            </div>
            <div className="w-full px-2">
              <FormElement
                target="Password"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <div className="w-full px-2">
              <FormButton text="Sign up for LoremHub" />
            </div>
          </div>
          <div className="text-gray-600">
            <FormInfoText>
              <>
                By clicking “Sign up for GitHub”, you agree to our{" "}
                <a className="text-white" href="#">
                  terms of service
                </a>{" "}
                and{" "}
                <a className="text-white" href="#">
                  privacy statement
                </a>
                . We’ll occasionally send you account related emails.
              </>
            </FormInfoText>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WelcomeFooterFormSection;
