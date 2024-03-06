import './App.css';
import { useState } from 'react';

function App() {
  const [formdata,setformdata]=useState( {firstname:"",lastname:"",country:"",email:"",street:"",city:"",postal:"",comments:false,candidates:false,offers:false,PushNotifications:""} );
  
  function Changehandler(event){
    const {name,value,type,checked}=event.target
    setformdata(preformdata=>{
      return{
        ...preformdata,
        [name]: type==="checkbox" ? checked:value
      }
    });
  }
  function submithandler(event){
    event.preventDefault();
    console.log(formdata);
    event.preventDefault(N)
  }
  return (
    <div>
      <fieldset>
        <legend className='heading'>Employee Details</legend>
      <form className='mainform' onSubmit={submithandler}>
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
          placeholder='name@gmail.com'
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
          placeholder='Nehru Place'
        />
        <br/>
        <label>City</label>
        <br/>
        <input
          type="text"
          onChange={Changehandler}
          name="city"
          value={formdata.city}
          placeholder='Delhi'
        />
        <br/>
        <label>Postal Code</label>
        <br/>
        <input
          type="text"
          placeholder='210301'
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
          name="comments"
          id="comments"
          checked={formdata.comments}
        />
        <label className='radiolabel' htmlFor="comments">Comments</label>
        <p className='indent'>Get Notified when someones posts a comment on a posting.</p>
        
        <input
          type="checkbox"
          onChange={Changehandler}
          name="candidates"
          id="candidates"
          checked={formdata.candidates}
        />
        <label htmlFor="candidates" className='radiolabel'>Candidates</label>
        <p className='indent'>Get Notified when a candidate applies for a job.</p>
        
        <input
          type="checkbox"
          onChange={Changehandler}
          name="offers"
          id="offers"
          checked={formdata.offers}
        />
        <label className='radiolabel' htmlFor="offers">Offers</label>
        <p className='indent'> Get Notified when candidate accepts or rejects an offer.</p>
        
        <br/>
        <p><b>Push Notifications</b><br/>These are delivered via SMS to your Mobile Phone.</p>
        <input
          type="radio"
          id="sms"
          name='PushNotifications'
          onChange={Changehandler}
          value="Everything"
        />
        <label htmlFor='sms'>Everything.</label>
        <br/>
        <input
          type="radio"
          id="Push_email"
          name="PushNotifications"
          onChange={Changehandler}
          value="Same as Email"
        />
        <label htmlFor='Push_email'>Same as Email.</label>
        <br/>
        <input
          type="radio"
          id="NoPushNotifications"
          name="PushNotifications"
          onChange={Changehandler}
          value="No Push Notifications"
        />
        <label htmlFor='NoPushNotifications'>No push Notifications.</label>
        <br/>
        <div className='submitbtn'>
          <button className='savebtn'>Save</button>
        </div>
      </form>
      </fieldset>
      
    </div>
  );
}
export default App;
