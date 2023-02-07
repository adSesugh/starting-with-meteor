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
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input name='name' type={'text'} onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input name='email' type={'email'} onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor='imageUrl'>Image Url</label>
                <input name='imageUrl' type={'imageUrl'} onChange={handleOnChange} />
            </div>
            {/* <div>
                <label htmlFor='imageUrl'>Image URL</label>
                <input type='file' name='imageUrl' onChange={handleOnChange} />
            </div> */}
            <button type='button' onClick={saveContact}>Save Contact</button>
        </form>
    )
}

export default ContactForm