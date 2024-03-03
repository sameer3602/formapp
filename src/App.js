import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form className='mainform'>
        <label>First Name</label>
        <br/>
        <input
          type="text"
          placeholder='First name'
        />
        <br/>
        <label>Last Name</label>
        <br/>
        <input
          type="text"
          placeholder='Last name'
        />
        <br/>
        <label>Email</label>
        <br/>
        <input
          type="text"
          placeholder='Email'
        />
        <br/>
        <label>Country</label>
        <br/>
        <select id="Country" name="country">
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
        />
        <br/>
        <label>City</label>
        <br/>
        <input
          type="text"
        />
        <br/>
        <label>Postal Code</label>
        <br/>
        <input
          type="text"
          placeholder=' Enter Pin Code'
        />
        <br/>
        <br/>
        <label>By Email</label>
        <br/>
        <input
          type="checkbox"
        />
        <label className='radiolabel'>Comments</label>
        <p className='indent'>Get Notified when someones posts a comment on a posting.</p>
        
        <input
          type="checkbox"
        />
        <label className='radiolabel'>Candidates</label>
        <p className='indent'>Get Notified when a candidate applies for a job.</p>
        
        <input
          type="checkbox"
        />
        <label className='radiolabel'>Offers</label>
        <p className='indent'> Get Notified when candidate accepts or rejects an offer.</p>
        
        <br/>
        <p><b>Push Notifications</b><br/>These are delivered via SMS to your Mobile Phone.</p>
        <input
          type="radio"
          for="notify"
        />
        <label>Everything.</label>
        <br/>
        <input
          type="radio"
          for="notify"
        />
        <label>Same as Email.</label>
        <br/>
        <input
          type="radio"
          for="notify"
        />
        <label>No push Notifications.</label>
        <br/>
      </form>
    </div>
  );
}
export default App;
