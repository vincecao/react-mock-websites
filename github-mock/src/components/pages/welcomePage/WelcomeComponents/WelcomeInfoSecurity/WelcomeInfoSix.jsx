import React from "react";

const WelcomeInfoSix = () => {
  return (
    <div className="mx-3 md:mx-8 lg:mx-10 text-center p-3">
      <div className="md:flex md:flex-row-reverse items-center px-5">
        <div className="rounded-lg flex-1 p-5">
          <img
            src="assets/img/sample5.jpg"
            alt="sample"
            className="rounded-lg m-auto"
          />
        </div>

        <div className="flex-1 p-5">
          <div className="text-left my-5">
            <p className="text-lg font-semibold">Code security</p>
            <p className="text-sm">
              Prevent problems before they happen. Protected branches, signed
              commits, and required status checks protect your work and help you
              maintain a high standard for your code.
            </p>
          </div>
          <div className="text-left my-5">
            <p className="text-lg font-semibold">Access controlled</p>
            <p className="text-sm">
              Encourage teams to work together while limiting access to those
              who need it with granular permissions and authentication through
              SAML/SSO and LDAP.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="m-auto md:max-w-md flex border border-gray-400 rounded-lg">
          <div className="p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
          </div>
          <div className="text-left p-5 pl-0">
            <p className="text-lg font-semibold">Hosted where you need it</p>
            <p className="text-sm">
              Securely and reliably host your work on LoremHub using LoremHub
              Enterprise Cloud. Or deploy LoremHub Enterprise Server in your own
              data centers or in a private cloud using Amazon Web Services,
              Azure, or Google Cloud Platform.
            </p>
            <a className="text-blue-600 block mt-2" href="#">
              Compare plans
            </a>
            <a className="text-blue-600 block" href="#">
              Contact Sales for more information
            </a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WelcomeInfoSix;
