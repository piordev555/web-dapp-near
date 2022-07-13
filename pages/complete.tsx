import * as React from 'react';

import Metatags from '../components/Metatags';
import { ProfileForm } from '../components/Auth/ProfileForm';

export default function CompleteProfile() {
  return (
    <main>
      <Metatags title="Complete Profile" description="Complete profile page" />
      <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading-xl text-center text-gray-900">
              COMPLETE PROFILE
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">lease fill in your details</p>
          </div>
          <ProfileForm />
        </div>
      </div>
    </main>
  );
}
