import {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppDispatch} from "../../config/hooks";
import {logout} from "../../slices/authSlice";

export function Logout() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
      <Navigate to='/login' replace />
  )
}
