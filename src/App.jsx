import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {
      name, email
    }
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <>
      <div className='w-3/4 mx-auto'>
        <div className='mb-3'><h1 className='text-4xl font-bold'>Hello world!</h1></div>
        <form onSubmit={handleAddUser} className='flex flex-col gap-2 space-y-3' action="" >
          <div className='flex flex-col items-start space-y-2'>
            <label htmlFor='name' className='font-bold text-xl'>Your name :</label>
            <input type="text" name='name' id='name' placeholder='name' className='border-2 p-2 mb-2 rounded-lg w-full' />
          </div>
          <div className='flex flex-col items-start space-y-2'>
            <label htmlFor='email' className='font-bold text-xl'>Your Email : </label>
            <input type="email" name='email' id='email' placeholder='email' className='border-2 p-2 mb-2 rounded-lg w-full' />
          </div>
          <div>
            <input type="submit" value="submit" name='submit' id='submit' className=' btn btn-sm border-2 p-2 mb-2 w-full' />
          </div>
        </form>
        <div>
          <Link to="/users" className='btn btn-primary btn-sm'>see Users</Link>
        </div>
      </div>
    </>
  )
}

export default App
