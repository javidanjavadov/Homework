const personalProfile = {
    firstName: 'Cavidan' ,
    lastName: 'Cavadov' ,
    age: 16 ,
    favoriteLanguage: 'English' ,   
 contactInfo: {
    email : 'javidan.javadov@gmail.com' ,
    phone : '+994503738788'
}
}
personalProfile['occupation'] = 'Developer';
personalProfile.contactInfo['address'] = '1245677 Street';
console.log(personalProfile);
console.log(personalProfile.firstName);
console.log(personalProfile.lastName);
console.log(personalProfile.age);
console.log(personalProfile.favoriteLanguage);
console.log(personalProfile.occupation);
console.log(personalProfile['contactInfo'].email);
console.log(personalProfile['contactInfo'].phone);
console.log(personalProfile['contactInfo'].address);


