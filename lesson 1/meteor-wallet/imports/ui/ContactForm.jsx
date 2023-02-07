import React, { useState } from 'react'
import { ContactsCollection } from '../api/ContactsCollection';

const ContactForm = () => {
    const [form, setForm] = useState();

    const saveContact = e => {
        e.preventDefault();
        ContactsCollection.insert(form)
    }

    const handleOnChange = e => {
        const { name, value } = e.target;
        setForm({...form, [name]:value})
    }

    return (
        <form className='flex flex-col space-y-4 w-full items-center'>
            <table className='py-4'>
                <tr className=''>
                    <td><label htmlFor='name' className=''>Name</label></td>
                    <td><input className='' name='name' type={'text'} onChange={handleOnChange} /></td>
                </tr>
                <tr>
                    <td><label htmlFor='email' className=''>Email Address</label></td>
                    <td><input className='' name='email' type={'email'} onChange={handleOnChange} /></td>
                </tr>
                <tr>
                    <td><label htmlFor='imageUrl' className=''>Image URL</label></td>
                    <td><input className='' name='name' type={'text'} onChange={handleOnChange} /></td>
                </tr>
            </table>
            <button className='bg-purple-800 text-white rounded-md px-4 py-1' type='button' onClick={saveContact}>Save Contact</button>
        </form>
    )
}

export default ContactForm