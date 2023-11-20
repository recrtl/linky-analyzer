const priceLowHC = 0.1464;
const priceLowHP = 0.1464;
const priceHighHC = 0.2460;
const priceHighHP = 0.7324;
export class zen_flex {
    constructor() {
        this.kwhLowHC = 0;
        this.kwhLowHP = 0;
        this.kwhHighHC = 0;
        this.kwhHighHP = 0;
    }
    RunModel(input) {
        input.Readings.forEach(x => this.countReading(x));
        const subscription = this.subPrice(input.Power) * 12;
        const totalLowHC = priceLowHC * this.kwhLowHC;
        const totalLowHP = priceLowHP * this.kwhLowHP;
        const totalHighHC = priceHighHC * this.kwhHighHC;
        const totalHighHP = priceHighHP * this.kwhHighHP;
        const total = totalLowHC + totalLowHP + totalHighHP + totalHighHC + subscription;
        const kwhTotal = this.kwhLowHC + this.kwhLowHP + this.kwhHighHP + this.kwhHighHC;
        return {
            Name: 'EDF zen flex',
            Cost: total,
            Description: `
| Libellé                      | Puissance consommée             | Prix kwH        | Total                       |
|------------------------------|---------------------------------|-----------------|-----------------------------|
| Jours éco HC                 | ${this.kwhLowHC.toFixed(0)}kWh  | ${priceLowHC}€  | ${totalLowHC.toFixed(2)}€   |
| Jours éco HP                 | ${this.kwhLowHP.toFixed(0)}kWh  | ${priceLowHP}€  | ${totalLowHP.toFixed(2)}€   |
| Jours Sobriété HC            | ${this.kwhHighHC.toFixed(0)}kWh | ${priceHighHC}€ | ${totalHighHC.toFixed(2)}€  |
| Jours Sobriété HP            | ${this.kwhHighHP.toFixed(0)}kWh | ${priceHighHP}€ | ${totalHighHP.toFixed(2)}€  |
| Abonnement ${input.Power}kVA |                                 |                 | ${subscription.toFixed(2)}€ |
| Total                        | ${kwhTotal.toFixed(0)}kWh       |                 | ${total.toFixed(2)}€        |

* _Les Heures creuses sont considérées de **20h à 8h** et **13h à 18h**._
* _Les jours bonus ne sont pas simulés._
* _Les jours sobriété sont simulés à partir des jours rouges tempo._
* _[Détail des tarifs.](https://particulier.edf.fr/content/dam/2-Actifs/Documents/Offres/Grille-prix-zen-flex.pdf)_
`
        };
    }
    subPrice(power) {
        if (power <= 6)
            return 13.03;
        if (power <= 9)
            return 16.55;
        if (power <= 12)
            return 19.97;
        if (power <= 15)
            return 23.24;
        if (power <= 18)
            return 26.48;
        if (power <= 24)
            return 33.28;
        if (power <= 30)
            return 39.46;
        if (power <= 36)
            return 45.72;
        return NaN;
    }
    countReading(reading) {
        const dateKey = reading.startDate.toISOString().split('T')[0];
        const hours = reading.startDate.getHours();
        const HC = hours < 8 || (hours >= 13 && hours < 18) || hours >= 20;
        const kwh = reading.wattsHour / 1000;
        if (highDays.has(dateKey)) {
            if (HC)
                this.kwhHighHC += kwh;
            else
                this.kwhHighHP += kwh;
        }
        else {
            if (HC)
                this.kwhLowHC += kwh;
            else
                this.kwhLowHP += kwh;
        }
    }
}
var highDays = new Set([
    "2023-03-01",
    "2023-01-19",
    "2023-01-17",
    "2023-01-18",
    "2023-01-23",
    "2023-01-20",
    "2023-01-26",
    "2023-01-27",
    "2023-01-24",
    "2023-01-25",
    "2023-01-30",
    "2023-01-31",
    "2023-02-06",
    "2023-02-09",
    "2023-02-08",
    "2023-02-07",
    "2023-02-10",
    "2022-12-13",
    "2022-12-12",
    "2022-12-08",
]);
//# sourceMappingURL=zen_flex.js.map