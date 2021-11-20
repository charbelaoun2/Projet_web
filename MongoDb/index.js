const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://charbelAoun:123charbel123@cluster0.wr7ah.mongodb.net/myFirstDB?retryWrites=true&w=majority');

const Dog = mongoose.model('Dog', 


    {
        
        name: String ,
        age:Number
    
    
    }

    ,"dogs_neighbers"


);

const doggy1 = new Dog({ name: 'Bull',age:5 });
doggy1.save().then(dog => console.log(dog));


const doggy2 = new Dog({ name: 'DubberMan',age:3 });
doggy2.save().then(dog => console.log(dog));