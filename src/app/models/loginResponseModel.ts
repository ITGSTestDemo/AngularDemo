export class LoginResponselist {
    constructor(
        public loginId: string,
        public createdAt: Date,
        public emailId: string,
        public password: string,
        public salt: string,
        public expiryDate: Date
    ) { }
}

export class LoginResponseModel {
    constructor(
        public loginList: Array<LoginResponselist>
    ) { }
}
