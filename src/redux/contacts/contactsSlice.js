import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';
import {
  fetchContactsSuccessReducer,
  addContactSuccessReducer,
  deleteContactSuccessReducer,
  pendingReducer,
  fulfilledReducer,
  rejectedReducer,
} from './reducers';

const extraActions = [getContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
