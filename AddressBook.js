var addressBook = new Array();

class Contact {
    firstName
    lastName
    address
    state
    city
    zipCode
    email
    phoneNumber

    constructor(firstName, lastName, address, state, city, zipCode, email, phoneNumber) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.state = state
        this.city = city
        this.zipCode = zipCode
        this.email = email
        this.phoneNumber = phoneNumber
    }
}

function addContactDetails(firstName, lastName, address, state, city, zipCode, email, phoneNumber) {

    const firstNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let isFirstNameVaild = firstNamePattern.test(firstName);

    const lastNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let isLastNameValid = lastNamePattern.test(lastName);

    const addressPattern = /^[A-Z][a-zA-Z0-9]{3,}/;
    let isAddressValid = addressPattern.test(address);

    const statePattern = /^[A-Z][a-zA-Z]{3,}/;
    let isStateValid = statePattern.test(state);

    const cityPattern = /^[A-Z][a-zA-Z]{3,}/;
    let isCityValid = cityPattern.test(city);

    const zipCodePattern = /^[1-9]{1}[0-9]{5}/;
    let isZipCodeValid = zipCodePattern.test(zipCode);

    const emailPattern = /^[A-Za-z0-9]+(.[A-Za-z0-9]+)*@[^_\\W]+(.[^_\\W]+)?(?=(.[^_\\W]{3,}$|.[a-zA-Z]{2}$)).*$/;
    let isEmailValid = emailPattern.test(email);

    const phoneNumberPattern = /^[1-9]{1}[0-9]{9}/;
    let isPhoneNumberValid = phoneNumberPattern.test(phoneNumber);

    if (isFirstNameVaild == true && isLastNameValid == true && isAddressValid == true && isStateValid == true && isCityValid == true &&
        isZipCodeValid == true && isEmailValid == true && isPhoneNumberValid == true) {

        let newContact = new Contact(firstName, lastName, address, state, city, zipCode, email, phoneNumber);
        console.log("Contact Added Successfully");

        addressBook.push(newContact);

    } else {
        throw 'Contact Details Are Invalid';
    }


    function useFunction(option) {
        switch (option) {
            case "addContactDetails":
   
                addContactDetails("Naveen", "Kumar", "NewRoadStreet", "XYZ", "TamilNadu", "626987", "contact@naveen.com", "9876543210");
                addContactDetails("Hareesh", "Raj", "OldRoadStreet", "ZYX", "TamilNadu", "626145", "contact@hareesh.com", "9873216540");
   
                console.log(addressBook);
                break;
        }
    }

    useFunction("addContactDetails");
    
}