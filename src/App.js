import './App.css';
import { useState } from 'react';

function App() {
  const [formdata,setformdata]=useState( {firstname:"",lastname:"",country:"",email:"",street:"",city:"",postal:"",isvisible:true} );
  console.log(formdata);
  function Changehandler(event){
    const {name,value,type,checked}=event.target
    setformdata(preformdata=>{
      return{
        ...preformdata,
        [name]: type==="checkbox" ? checked:value
      }
    });
  }
  // function submithandler(event){
  //   event.preventdefault();

  // }
  return (
    <div>
      <form className='mainform'>
        <label>First Name</label>
        <br/>
        <input
          type="text"
          placeholder='First name'
          onChange={Changehandler}
          name="firstname"
          value={formdata.firstname}
        />
        <br/>
        <label>Last Name</label>
        <br/>
        <input
          type="text"
          placeholder='Last name'
          onChange={Changehandler}
          name="lastname"
          value={formdata.lastname}
        />
        <br/>
        <label>Email</label>
        <br/>
        <input
          type="text"
          placeholder='Email'
          onChange={Changehandler}
          name="email"
          value={formdata.email}
        />
        <br/>
        <label>Country</label>
        <br/>
        <select id="Country" name="country" onChange={Changehandler} value={formdata.country}>
          <option for="India" >India</option>
          <option for="USA">USA</option>
          <option for="UK">UK</option>
          <option for="China">China</option>
        </select>
        <br/>
        <label>Street Address</label>
        <br/>
        <input
          type="text"
          onChange={Changehandler}
          name="street"
          value={formdata.street}
        />
        <br/>
        <label>City</label>
        <br/>
        <input
          type="text"
          onChange={Changehandler}
          name="city"
          value={formdata.city}
        />
        <br/>
        <label>Postal Code</label>
        <br/>
        <input
          type="text"
          placeholder=' Enter Pin Code'
          onChange={Changehandler}
          name="postal"
          value={formdata.postal}
        />
        <br/>
        <br/>
        <label>By Email</label>
        <br/>
        <input
          type="checkbox"
          onChange={Changehandler}
          name="isvisible"
          id="isvisible"
          checked={formdata.isvisible}
        />
        <label className='radiolabel' htmlFor="isvisible">Comments</label>
        <p className='indent'>Get Notified when someones posts a comment on a posting.</p>
        
        <input
          type="checkbox"
          onChange={Changehandler}
          name="isvisible"
          id="isvisible"
          checked={formdata.isvisible}
        />
        <label htmlFor="isvisible" className='radiolabel'>Candidates</label>
        <p className='indent'>Get Notified when a candidate applies for a job.</p>
        
        <input
          type="checkbox"
          onChange={Changehandler}
          name="isvisible"
          id="isvisible"
          checked={formdata.isvisible}
        />
        <label className='radiolabel' htmlFor="isvisible">Offers</label>
        <p className='indent'> Get Notified when candidate accepts or rejects an offer.</p>
        
        <br/>
        <p><b>Push Notifications</b><br/>These are delivered via SMS to your Mobile Phone.</p>
        <input
          type="radio"
          id="sms"
        />
        <label htmlFor='sms'>Everything.</label>
        <br/>
        <input
          type="radio"
          id="Everything"
        />
        <label For='Everything'>Same as Email.</label>
        <br/>
        <input
          type="radio"
          id="email"
        />
        <label For='email'>No push Notifications.</label>
        <br/>
        <div className='submitbtn'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default App;
