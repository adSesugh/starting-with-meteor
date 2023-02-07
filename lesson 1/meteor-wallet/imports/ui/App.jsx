import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export const App = () => (
  <div className='flex flex-col h-screen bg-violet-300 w-full'>
    <div className='flex justify-center mx-8'>
      <h1 className='border border-gray-200 px-4 py-6 text-2xl text-gray-600 text-center w-full'>Meteor Wallet</h1>
    </div>
    <div className='flex flex-col justify-center items-center py-10'>
      <h6>Add Contact User</h6>
      <ContactForm />
    </div>
    <ContactList />
  </div>
);
