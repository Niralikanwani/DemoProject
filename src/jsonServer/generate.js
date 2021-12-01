module.exports =function(){
    var faker = require('faker');
    var _ = require('lodash');
    return {
        topics: _.times(20000, function (n){
            return {
                id: n,
                topicName: faker.name.findName(),
                userName: faker.internet.userName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                city: faker.address.city()
            }
        })
    }
}