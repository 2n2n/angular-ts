interface User {
    username: string;
    password: string;
    confirmPassword?: string;
}

let user: User;


user = { username: 'max', password: 'supersecret' };

interface CanDrive {
    accelerate(speed: number): void;
}

let car: CanDrive = {
    accelerate: function( speed: number ) {
        // ...
    }
}