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

    if (isFirstNameVaild(firstName) == true && isLastNameValid == true && isAddressValid == true && isStateValid == true && isCityValid == true &&
        isZipCodeValid == true && isEmailValid == true && isPhoneNumberValid == true) {

        let newContact = new Contact(firstName, lastName, address, state, city, zipCode, email, phoneNumber);
        console.log("Contact Added Successfully");

        addressBook.push(newContact);

    } else {
        throw 'Contact Details Are Invalid';
    }

    function isFirstNameVaild(firstName){
        const firstNamePattern = /^[A-Z][a-zA-Z]{3,}/;
        return firstNamePattern.test(firstName);
    }

    function isLastNameValid(lastName){
        const lastNamePattern = /^[A-Z][a-zA-Z]{3,}/;
        return lastNamePattern.test(lastName);
    }

    function isAddressValid(address){
        const addressPattern = /^[A-Z][a-zA-Z0-9]{3,}/;
        return addressPattern.test(address);
    }

    function isStateValid(state){
        const statePattern = /^[A-Z][a-zA-Z]{3,}/;
        return statePattern.test(state);
    }

    function isCityValid(city){
        const cityPattern = /^[A-Z][a-zA-Z]{3,}/;
        return cityPattern.test(city);
    }

    function isZipCodeValid(zipCode){
        const zipCodePattern = /^[1-9]{1}[0-9]{5}/;
        return zipCodePattern.test(zipCode);
    }

    function isEmailValid(email){
        const emailPattern = /^[A-Za-z0-9]+(.[A-Za-z0-9]+)*@[^_\\W]+(.[^_\\W]+)?(?=(.[^_\\W]{3,}$|.[a-zA-Z]{2}$)).*$/;
        return emailPattern.test(email);
    }

    function isPhoneNumberValid(phoneNumber){
        const phoneNumberPattern = /^[1-9]{1}[0-9]{9}/;
        return phoneNumberPattern.test(phoneNumber);
    }

    function editContact(firstName, changingField, newValue) {
        if (addressBook.length == null) {
            console.log("Address Book Empty");
        } else {
            addressBook.forEach(newContact => {
                if (newContact.firstName == firstName) {
                    switch (changingField) {
                        case "firstName":
                            if(isFirstNameVaild(newValue)){
                                newContact.firstName = newValue;
                                console.log("First Name updated successfully");
                                return;
                            } 
                        case "lastName":
                            if(isLastNameVaild(newValue)){
                                newContact.lastName = newValue;
                                console.log("Last Name updated successfully");
                                return;
                            }
                        case "address":
                            if(isAddressValid(newValue)){
                                newContact.address = newValue;
                                console.log("Address updated successfully");
                                return;
                            }
                        case "state":
                            if(isStateValid(newValue)){
                                newContact.state = newValue;
                                console.log("State updated successfully");
                                return;
                            }
                        case "city":
                            if(isCityValid(newValue)){
                                newContact.city = newValue;
                                console.log("City updated successfully");
                                return;
                            }
                        case "zipCode":
                            if(isZipCodeValid(newValue)){
                                newContact.zipCode = newValue;
                                console.log("Zip Code updated successfully");
                                return;
                            }
                        case "email":
                            if(isEmailValid(newValue)){
                                newContact.email = newValue;
                                console.log("Email updated successfully");
                                return;
                            }
                        case "phoneNumber":
                            if(isPhoneNumberValid(newValue)){
                                newContact.phoneNumber = newValue;
                                console.log("Phone number updated successfully");
                                return;
                            }
                    }

                    console.log("Invalid entry");
                }
            });
        }
    }

    function deleteContact(first_Name) {
        if (addressBook.length == null) {
            console.log("Address Book Empty");
        } else {
            for (let i = 0; i < addressBook.length; i++) {
                if (addressBook[i].firstName == first_Name) {
                    addressBook.splice(i, 1);
                    console.log("Contact Deleted Successfully");
                }
            }
        }
    }

    function useFunction(option) {
        switch (option) {
            case "addContactDetails":
                addContactDetails("Naveen", "Kumar", "NewRoadStreet", "VWXYZ", "TamilNadu", "626987", "contact@naveen.com", "9876543210");
                addContactDetails("Hareesh", "Raj", "OldRoadStreet", "ZYXWV", "TamilNadu", "626145", "contact@hareesh.com", "9873216540");
                break;

            case "editContact":
                editContact("Naveen", "city", "ABCDE");
                break;

            case "deleteContact":
                deleteContact("Hareesh");
                break;
        }
    }

    useFunction("addContactDetails");
    useFunction("editContact");
    useFunction("deleteContact");
    
}