class UserModel {
    constructor(
        user_name,
        birthday,
        gender, 
        country
    ) {
        this.user_name = user_name;
        this.birthday = birthday;
        this.gender = gender;
        this.country = country;
    }
}

module.exports = UserModel;