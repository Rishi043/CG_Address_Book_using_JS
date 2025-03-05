// // Creating Class with name ContactDetails to store address-related details
// class ContactDetails {
//     constructor(firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.address = address;
//         this.city = city;
//         this.state = state;
//         this.zipCode = zipCode;
//         this.phoneNumber = phoneNumber;
//         this.email = email;
//     }
// }

// // Creating an instance of ContactDetails
// let contact = new ContactDetails(
//     "Deepak",
//     "Singh",
//     "House No. 45",
//     "Bhopal",
//     "Madhya Pradesh",
//     "462046",
//     "9691876648",
//     "singh017deepak@gmail.com"
// );

// // Printing the contact details
// console.log(contact); 

class AddressClass {
    constructor(first, last_names, address, city, state, zip, phone_number, email) {
        this.first = first;
        this.last_names = last_names;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone_number = phone_number;
        this.email = email;
    }
}
let add=new AddressClass("deepak","Singh","House no 45","Bhopal","Madhya Pradesh","462046","9691876648","singh017deepak@gmail.com");
console.log(add);
