import * as React from 'react';

import Metatags from '../components/Metatags';
import { LoginForm } from '../components/Auth/LoginForm';

export default function Enter() {

  return (
    <main>
      <Metatags title="Enter" description="Sign up for this amazing app!" />
      <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-auto h-12 mx-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 border-[#EFEFEF]">Sign in to your account</h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Or
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
