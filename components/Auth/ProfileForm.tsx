import * as React from 'react';

import { COUNTRIES } from './selector/countries';
import { CountrySelector } from './selector/selector';
import { FileInputPreview } from './fileInput/fileInput';

import { loginAsync } from './authSlice';

import { useAppDispatch } from '../../lib/hooks';

export function ProfileForm() {
  const dispatch = useAppDispatch();
  const countryRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = React.useState(false);
  const [country, setCountry] = React.useState('GB');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    dispatch(loginAsync({ email, password }));
  };

  return (
    <form className="mt-8 flex flex-col items-center" onSubmit={onSubmit}>
      <input type="hidden" name="remember" value="true" />
      <div>
        <FileInputPreview />
      </div>
      <div className="-space-y-px w-72 sm:w-80 rounded-md shadow-sm flex flex-col gap-4">
        <div>
          <label htmlFor="first-name" className="sr-only">
            First name
          </label>
          <input
            id="first-name"
            name="firstname"
            type="firstname"
            autoComplete="firstname"
            required
            className="w-full px-5 py-4 text-body-md placeholder-gray-500 border border-darkGrey rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="sr-only">
            Last name
          </label>
          <input
            id="last-name"
            name="lastname"
            type="lastname"
            autoComplete="lastname"
            required
            className="w-full px-5 py-4 text-body-md placeholder-gray-500 border border-darkGrey rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Last name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-5 py-4 text-body-md placeholder-gray-500 border border-darkGrey rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <CountrySelector
          id={'countries'}
          ref={countryRef}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={(val) => setCountry(val)}
          selectedValue={COUNTRIES.find((option) => option.value === country) as SelectMenuOption}
        />
        <div>
          <label htmlFor="address" className="sr-only">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="address"
            required
            className="w-full px-5 py-4 text-body-md placeholder-gray-500 border border-darkGrey rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Address"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary hover:bg-secondary text- text-white w-72 sm:w-80 mt-10 py-4 rounded-lg transition-all  delay-300"
      >
        Finish
      </button>
    </form>
  );
}
