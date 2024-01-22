class AccountModel {
    constructor(
        user_name,
        password,
        create_at,
        refreshToken, 
        role_id,
    ) { 
        this.user_name = user_name;
        this.password = password;
        this.create_at = create_at;
        this.refreshToken = refreshToken;
        this.role_id = role_id;
    };
}