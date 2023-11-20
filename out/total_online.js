const kwPrice = 0.2276;
export class total_online {
    RunModel(input) {
        let total = 0;
        for (const row of input.Readings) {
            total += row.wattsHour * kwPrice / 1000;
        }
        return {
            Name: 'Total offre online',
            Cost: total + this.subPrice(input.Power) * 12,
            Description: ''
        };
    }
    subPrice(power) {
        if (power <= 3)
            return 7.84;
        if (power <= 4)
            return 8.61;
        if (power <= 5)
            return 9.38;
        if (power <= 6)
            return 10.16;
        if (power <= 7)
            return 11.00;
        if (power <= 8)
            return 11.84;
        if (power <= 9)
            return 12.69;
        if (power <= 10)
            return 13.55;
        if (power <= 11)
            return 14.41;
        if (power <= 12)
            return 15.28;
        if (power <= 13)
            return 16.07;
        if (power <= 14)
            return 16.86;
        if (power <= 15)
            return 17.66;
        if (power <= 16)
            return 18.44;
        if (power <= 17)
            return 19.22;
        if (power <= 18)
            return 20.01;
        if (power <= 19)
            return 20.90;
        if (power <= 20)
            return 21.79;
        if (power <= 21)
            return 22.68;
        if (power <= 22)
            return 23.57;
        if (power <= 23)
            return 24.46;
        if (power <= 24)
            return 25.36;
        if (power <= 25)
            return 26.09;
        if (power <= 26)
            return 26.82;
        if (power <= 27)
            return 27.55;
        if (power <= 28)
            return 28.28;
        if (power <= 29)
            return 29.01;
        if (power <= 30)
            return 29.76;
        if (power <= 31)
            return 30.66;
        if (power <= 32)
            return 31.56;
        if (power <= 33)
            return 32.46;
        if (power <= 34)
            return 33.36;
        if (power <= 35)
            return 34.26;
        if (power <= 36)
            return 35.13;
        return NaN;
    }
}
//# sourceMappingURL=total_online.js.map