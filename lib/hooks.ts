import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { auth } from './firebase';
import type { AppDispatch, AppState } from './store';

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = React.useState(null);

  React.useEffect(() => {
    let unsubscribe;

    if (user) {
      // TODO: what is happening here??
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
}

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
