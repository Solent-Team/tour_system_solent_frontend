import React, { useState } from 'react';

const PurchasePage = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handlePackageSelection = (packageName) => {
    setSelectedPackage(packageName);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePurchase = () => {
    // Perform validation on the form inputs
    if (!selectedPackage || !name || !email || !address) {
      alert('Please fill in all the required information.');
      return;
    }

    // Logic for handling the purchase, e.g., submitting the order or redirecting to a payment gateway
    console.log('Purchase completed!');
    console.log('Selected Package:', selectedPackage);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);

    // Reset the form
    setSelectedPackage('');
    setName('');
    setEmail('');
    setAddress('');
  };

  return (
    <div>
      <h2>Step 1: Select a Package</h2>
      <ul>
        <li>
          <button onClick={() => handlePackageSelection('Package Sri Lanka Safari Tour')}>
            Package Sri Lanka Safari Tour
          </button>
        </li>
        <li>
          <button onClick={() => handlePackageSelection('Package Popular in Sri Lanka')}>
            Package Popular in Sri Lanka
          </button>
        </li>
        <li>
          <button onClick={() => handlePackageSelection('Package Family Trip to Sri Lanka')}>
            Package Family Trip to Sri Lanka
          </button>
        </li>
        <li>
          <button onClick={() => handlePackageSelection('Package D')}>
            Package Discover Sri Lanka
          </button>
        </li>
        <li>
          <button onClick={() => handlePackageSelection('Package Discover Sri Lanka')}>
            Package Honeymoon in Sri Lanka
          </button>
        </li>
        <li>
          <button onClick={() => handlePackageSelection('Package Jaffna Tour with your family')}>
            Package Jaffna Tour with your family
          </button>
        </li>
        <li>
          <button onClick={() => handlePackageSelection('Package Colombo Tour with your family')}>
            Package Colombo Tour with your family
          </button>
        </li>
        <li>
          <button onClick={() => handlePackageSelection('Package Kandy Tour with your family')}>
            Package Kandy Tour with your family
          </button>
        </li>
      </ul>

      {selectedPackage && (
        <div>
          <h2>Step 2: Provide Your Information</h2>
          <form>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
              Address:
              <input type="text" value={address} onChange={handleAddressChange} />
            </label>
            <br />
         
          </form>
        </div>
      )}

      {selectedPackage && name && email && address && (
        <div>
          <h2>Step 3: Review Your Order</h2>
          <p>Selected Package: {selectedPackage}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
          
        </div>
      )}

      {selectedPackage && name && email && address && (
        <div>
          <h2>Step 4: Make Payment</h2>
          <p>Payment methods:</p>
          <ul>
            <li>Credit Card</li>
            <li>PayPal</li>
            <li>Bank Transfer</li>
          </ul>
          
        </div>
      )}

      {selectedPackage && name && email && address && (
        <div>
          <h2>Step 5: Receive Booking Confirmation</h2>
          <p>Your booking has been confirmed!</p>
          <p>Package: {selectedPackage}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
        </div>
      )}

      {selectedPackage && name && email && address && (
        <div>
          <h2>Step 6: Enjoy Your Trip!</h2>
          <p>Have a fantastic journey!</p>
        </div>
      )}
    </div>
  );
};

export default PurchasePage;
