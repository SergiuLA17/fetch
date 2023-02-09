export class Car {
    private car_name: string;
    constructor(name: string) {
        this.car_name = name;
    }

    get carName(): string {
        return this.car_name;
    }

    set carName(value: string) {
        this.car_name = value;
    }
}