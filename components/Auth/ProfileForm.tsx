import * as React from 'react';
import { useState } from 'react';

import { COUNTRIES } from './selector/countries';
import { CountrySelector } from './selector/selector';
import { FileInputPreview } from './fileInput/fileInput';
import { Input } from 'components/items/elements';

import { loginAsync } from './authSlice';

import { useAppDispatch } from '../../lib/hooks';

export function ProfileForm() {
  const dispatch = useAppDispatch();
  const countryRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState('GB');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [address, setAddress] = useState('');

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
        <Input label="First name" value={firstName} onChange={(fname) => setFirstName(fname)} />
        <Input label="Last name" value={lastName} onChange={(lname) => setLastName(lname)} />
        <Input label="Email address" value={emailAddress} type="email" onChange={(email) => setEmailAddress(email)} />
        <CountrySelector
          id={'countries'}
          ref={countryRef}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={(val) => setCountry(val)}
          selectedValue={COUNTRIES.find((option) => option.value === country) as SelectMenuOption}
        />
        <Input label="Address" value={address} onChange={(address) => setAddress(address)} />
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
