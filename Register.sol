//SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

//creating a contract to register a user
contract Register{
    struct LandOwner{
        string id;
        string name;
        string email;
        string password;
        string phone;
        string dob;
}

    //creating an array to store the land owners
    LandOwner[] landOwners;

    //function to add land owner details
    function addLandOwner(string _id, string _name, string _email, string _password, string _phone, string _dob) public{
        LandOwner memory landOwner = LandOwner(_id, _name, _email, _password, _phone, _dob);
        landOwners.push(landOwner);
    }

    //function to get land owner details
    function getLandOwner(string _id) public view returns (LandOwner memory){
        for(uint i = 0; i < landOwners.length; i++){
            LandOwner memory landOwner = landOwners[i];

            //checking if the land owner id is same as the id passed
            if(landOwners[i].id == _id){
                return (landOwner.name, landOwner.email, landOwner.phone, landOwner.dob);
            }
        }
        //if the land owner id is not found
        //then the id is not registered
        return ("Not Registered", "Not Registered", "Not Registered", "Not Registered");
    }

}
