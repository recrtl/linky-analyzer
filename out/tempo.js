var tempoColor;
(function (tempoColor) {
    tempoColor["Blue"] = "BLUE";
    tempoColor["White"] = "WHITE";
    tempoColor["Red"] = "RED";
})(tempoColor || (tempoColor = {}));
var tempoColorByDay = new Map();
function init() {
    parseSeason(tempoData2022_2023);
    parseSeason(tempoData2023_2024);
}
function parseSeason(input) {
    const data = JSON.parse(input);
    for (const property in data.values) {
        if (property.endsWith('-fallback'))
            continue;
        tempoColorByDay[property] = data.values[property];
    }
}
export class tempo {
    Name() {
        return 'EDF tempo';
    }
    GetKWPrice(date) {
        const dateKey = date.toISOString().split('T')[0];
        const hours = date.getHours();
        const HC = hours < 6 || hours >= 22;
        switch (tempoColorByDay[dateKey]) {
            case tempoColor.Blue:
                return HC ? 0.1056 : 0.1369;
            case tempoColor.White:
                return HC ? 0.1246 : 0.1654;
            case tempoColor.Red:
                return HC ? 0.1328 : 0.7324;
        }
    }
}
// C/C from https://www.services-rte.com/cms/open_data/v1/tempo?season=2023-2024
const tempoData2023_2024 = `
{
    "values": {
    "2023-11-11": "BLUE",
    "2023-11-10": "BLUE",
    "2023-11-01-fallback": "false",
    "2023-11-07-fallback": "false",
    "2023-10-01-fallback": "false",
    "2023-11-09": "BLUE",
    "2023-10-10-fallback": "false",
    "2023-09-11-fallback": "false",
    "2023-09-17-fallback": "false",
    "2023-09-08-fallback": "false",
    "2023-11-10-fallback": "false",
    "2023-10-26-fallback": "false",
    "2023-11-02": "BLUE",
    "2023-09-20-fallback": "false",
    "2023-11-01": "BLUE",
    "2023-11-04": "BLUE",
    "2023-11-03": "BLUE",
    "2023-09-02-fallback": "false",
    "2023-11-06": "BLUE",
    "2023-11-05": "BLUE",
    "2023-11-08": "BLUE",
    "2023-11-07": "BLUE",
    "2023-11-20": "BLUE",
    "2023-10-11-fallback": "false",
    "2023-09-12-fallback": "false",
    "2023-10-17-fallback": "false",
    "2023-11-17-fallback": "false",
    "2023-10-16-fallback": "false",
    "2023-09-30-fallback": "false",
    "2023-11-16-fallback": "false",
    "2023-11-13": "BLUE",
    "2023-09-18-fallback": "false",
    "2023-11-12": "BLUE",
    "2023-11-15": "BLUE",
    "2023-11-14": "BLUE",
    "2023-09-01-fallback": "false",
    "2023-11-17": "BLUE",
    "2023-11-16": "BLUE",
    "2023-11-11-fallback": "false",
    "2023-11-19": "BLUE",
    "2023-11-18": "BLUE",
    "2023-09-19-fallback": "false",
    "2023-09-16-fallback": "false",
    "2023-10-18-fallback": "false",
    "2023-09-25-fallback": "false",
    "2023-11-18-fallback": "false",
    "2023-10-24-fallback": "false",
    "2023-09-22-fallback": "false",
    "2023-11-09-fallback": "false",
    "2023-10-09-fallback": "false",
    "2023-10-30-fallback": "false",
    "2023-10-15-fallback": "false",
    "2023-11-15-fallback": "false",
    "2023-10-21-fallback": "false",
    "2023-09-03-fallback": "false",
    "2023-10-02-fallback": "false",
    "2023-10-13-fallback": "false",
    "2023-09-08": "BLUE",
    "2023-09-27-fallback": "false",
    "2023-09-09": "BLUE",
    "2023-09-06": "BLUE",
    "2023-09-07": "BLUE",
    "2023-09-04": "BLUE",
    "2023-09-05": "BLUE",
    "2023-10-07-fallback": "false",
    "2023-09-02": "BLUE",
    "2023-09-03": "BLUE",
    "2023-09-01": "BLUE",
    "2023-11-02-fallback": "false",
    "2023-11-04-fallback": "false",
    "2023-10-04-fallback": "false",
    "2023-11-13-fallback": "false",
    "2023-09-19": "BLUE",
    "2023-10-29-fallback": "false",
    "2023-09-17": "BLUE",
    "2023-09-14-fallback": "false",
    "2023-09-18": "BLUE",
    "2023-09-15": "BLUE",
    "2023-09-16": "BLUE",
    "2023-09-13": "BLUE",
    "2023-09-14": "BLUE",
    "2023-09-11": "BLUE",
    "2023-09-12": "BLUE",
    "2023-09-10": "BLUE",
    "2023-09-05-fallback": "false",
    "2023-10-05-fallback": "false",
    "2023-09-06-fallback": "false",
    "2023-11-05-fallback": "false",
    "2023-10-10": "BLUE",
    "2023-09-23-fallback": "false",
    "2023-09-29-fallback": "false",
    "2023-10-23-fallback": "false",
    "2023-10-08": "BLUE",
    "2023-10-09": "BLUE",
    "2023-09-28": "BLUE",
    "2023-09-29": "BLUE",
    "2023-09-26": "BLUE",
    "2023-09-27": "BLUE",
    "2023-09-24": "BLUE",
    "2023-10-22-fallback": "false",
    "2023-09-25": "BLUE",
    "2023-10-28-fallback": "false",
    "2023-09-22": "BLUE",
    "2023-10-01": "BLUE",
    "2023-09-23": "BLUE",
    "2023-10-02": "BLUE",
    "2023-09-20": "BLUE",
    "2023-10-03": "BLUE",
    "2023-09-21": "BLUE",
    "2023-10-04": "BLUE",
    "2023-10-05": "BLUE",
    "2023-10-06": "BLUE",
    "2023-09-24-fallback": "false",
    "2023-10-07": "BLUE",
    "2023-09-10-fallback": "false",
    "2023-10-20": "BLUE",
    "2023-10-21": "BLUE",
    "2023-09-04-fallback": "false",
    "2023-10-27-fallback": "false",
    "2023-09-13-fallback": "false",
    "2023-09-07-fallback": "false",
    "2023-10-19": "BLUE",
    "2023-11-06-fallback": "false",
    "2023-10-03-fallback": "false",
    "2023-11-03-fallback": "false",
    "2023-11-12-fallback": "false",
    "2023-10-11": "BLUE",
    "2023-10-12": "BLUE",
    "2023-10-13": "BLUE",
    "2023-10-12-fallback": "false",
    "2023-10-14": "BLUE",
    "2023-10-15": "BLUE",
    "2023-10-06-fallback": "false",
    "2023-10-16": "BLUE",
    "2023-09-30": "BLUE",
    "2023-09-28-fallback": "false",
    "2023-10-17": "BLUE",
    "2023-10-18": "BLUE",
    "2023-11-08-fallback": "false",
    "2023-11-14-fallback": "false",
    "2023-10-31-fallback": "false",
    "2023-10-30": "BLUE",
    "2023-10-31": "BLUE",
    "2023-10-14-fallback": "false",
    "2023-09-26-fallback": "false",
    "2023-10-08-fallback": "false",
    "2023-11-19-fallback": "false",
    "2023-10-19-fallback": "false",
    "2023-10-20-fallback": "false",
    "2023-09-21-fallback": "false",
    "2023-10-22": "BLUE",
    "2023-09-15-fallback": "false",
    "2023-10-25-fallback": "false",
    "2023-10-23": "BLUE",
    "2023-11-20-fallback": "false",
    "2023-10-24": "BLUE",
    "2023-10-25": "BLUE",
    "2023-10-26": "BLUE",
    "2023-10-27": "BLUE",
    "2023-10-28": "BLUE",
    "2023-09-09-fallback": "false",
    "2023-10-29": "BLUE"
    }
    }
`;
const tempoData2022_2023 = `
{
    "values": {
    "2023-01-12-fallback": "false",
    "2023-03-12-fallback": "false",
    "2023-02-12-fallback": "false",
    "2023-02-09-fallback": "false",
    "2023-04-09-fallback": "false",
    "2023-03-09-fallback": "false",
    "2023-08-20-fallback": "false",
    "2023-01-09-fallback": "false",
    "2023-03-17-fallback": "false",
    "2023-01-17-fallback": "false",
    "2023-06-17-fallback": "false",
    "2023-02-17-fallback": "false",
    "2023-07-17-fallback": "false",
    "2023-08-17-fallback": "false",
    "2022-11-05-fallback": "false",
    "2023-05-12-fallback": "false",
    "2023-04-12-fallback": "false",
    "2022-12-05-fallback": "false",
    "2022-10-05-fallback": "false",
    "2022-09-25-fallback": "false",
    "2023-08-12-fallback": "false",
    "2023-05-17-fallback": "false",
    "2023-07-12-fallback": "false",
    "2023-06-12-fallback": "false",
    "2023-04-17-fallback": "false",
    "2022-12-25-fallback": "false",
    "2022-11-25-fallback": "false",
    "2022-10-25-fallback": "false",
    "2023-03-25-fallback": "false",
    "2023-04-25-fallback": "false",
    "2023-05-25-fallback": "false",
    "2023-07-25-fallback": "false",
    "2023-08-25-fallback": "false",
    "2023-06-25-fallback": "false",
    "2022-09-17-fallback": "false",
    "2023-05-20-fallback": "false",
    "2023-06-20-fallback": "false",
    "2023-04-20-fallback": "false",
    "2023-07-20-fallback": "false",
    "2023-03-20-fallback": "false",
    "2022-11-20-fallback": "false",
    "2022-10-20-fallback": "false",
    "2022-09-09-fallback": "false",
    "2022-12-20-fallback": "false",
    "2023-02-25-fallback": "false",
    "2023-01-25-fallback": "false",
    "2023-01-01": "BLUE",
    "2023-01-20-fallback": "false",
    "2023-02-20-fallback": "false",
    "2023-02-24-fallback": "false",
    "2023-04-24-fallback": "false",
    "2022-10-21-fallback": "false",
    "2023-06-05-fallback": "false",
    "2022-10-18-fallback": "false",
    "2023-08-05-fallback": "false",
    "2022-10-09-fallback": "false",
    "2023-07-29-fallback": "false",
    "2023-05-29-fallback": "false",
    "2023-03-29-fallback": "false",
    "2023-01-29-fallback": "false",
    "2022-12-18-fallback": "false",
    "2022-09-18-fallback": "false",
    "2022-10-12-fallback": "false",
    "2023-08-24-fallback": "false",
    "2023-01-16-fallback": "false",
    "2023-06-24-fallback": "false",
    "2023-04-05-fallback": "false",
    "2022-12-12-fallback": "false",
    "2023-02-05-fallback": "false",
    "2022-11-17-fallback": "false",
    "2023-07-13-fallback": "false",
    "2022-11-13-fallback": "false",
    "2023-05-04-fallback": "false",
    "2023-03-04-fallback": "false",
    "2022-09-05-fallback": "false",
    "2023-07-04-fallback": "false",
    "2023-01-04-fallback": "false",
    "2023-01-13-fallback": "false",
    "2022-09-20-fallback": "false",
    "2023-03-13-fallback": "false",
    "2023-05-13-fallback": "false",
    "2022-11-04-fallback": "false",
    "2022-11-26-fallback": "false",
    "2023-08-09-fallback": "false",
    "2023-06-09-fallback": "false",
    "2022-12-09-fallback": "false",
    "2023-08-21-fallback": "false",
    "2022-12-21-fallback": "false",
    "2023-06-21-fallback": "false",
    "2023-02-21-fallback": "false",
    "2023-01-21-fallback": "false",
    "2023-02-17": "BLUE",
    "2023-02-16": "WHITE",
    "2023-02-15": "WHITE",
    "2023-02-14": "WHITE",
    "2023-02-19": "BLUE",
    "2023-02-18": "BLUE",
    "2023-02-20": "BLUE",
    "2023-01-03-fallback": "false",
    "2022-11-24-fallback": "false",
    "2023-03-18-fallback": "false",
    "2023-02-24": "WHITE",
    "2022-09-06-fallback": "false",
    "2023-02-23": "WHITE",
    "2023-02-22": "WHITE",
    "2023-02-21": "BLUE",
    "2022-10-24-fallback": "false",
    "2023-08-11-fallback": "false",
    "2023-02-18-fallback": "false",
    "2022-12-29-fallback": "false",
    "2022-12-06-fallback": "false",
    "2022-11-29-fallback": "false",
    "2023-02-28": "WHITE",
    "2023-02-27": "WHITE",
    "2023-02-26": "BLUE",
    "2023-02-25": "BLUE",
    "2023-04-11-fallback": "false",
    "2022-11-06-fallback": "false",
    "2023-06-18-fallback": "false",
    "2023-05-11-fallback": "false",
    "2022-09-24-fallback": "false",
    "2023-04-28-fallback": "false",
    "2023-03-28-fallback": "false",
    "2023-07-18-fallback": "false",
    "2023-03-03": "WHITE",
    "2023-03-02": "RED",
    "2023-03-01": "RED",
    "2023-08-01-fallback": "false",
    "2023-01-11-fallback": "false",
    "2022-12-19-fallback": "false",
    "2023-05-01-fallback": "false",
    "2022-12-16-fallback": "false",
    "2023-04-01-fallback": "false",
    "2022-11-16-fallback": "false",
    "2022-11-01-fallback": "false",
    "2023-03-07": "WHITE",
    "2023-03-06": "WHITE",
    "2023-03-05": "BLUE",
    "2023-03-04": "BLUE",
    "2023-03-09": "BLUE",
    "2022-11-19-fallback": "false",
    "2023-03-08": "BLUE",
    "2023-02-16-fallback": "false",
    "2023-03-10": "BLUE",
    "2023-05-31-fallback": "false",
    "2023-03-14": "BLUE",
    "2023-03-13": "BLUE",
    "2023-03-12": "BLUE",
    "2022-10-22-fallback": "false",
    "2023-03-11": "BLUE",
    "2023-05-16-fallback": "false",
    "2023-01-01-fallback": "false",
    "2022-10-01-fallback": "false",
    "2022-09-26-fallback": "false",
    "2023-06-16-fallback": "false",
    "2022-09-21-fallback": "false",
    "2023-03-18": "BLUE",
    "2023-03-17": "BLUE",
    "2023-03-16": "BLUE",
    "2023-01-31-fallback": "false",
    "2023-03-15": "BLUE",
    "2023-02-03-fallback": "false",
    "2023-03-19": "BLUE",
    "2023-07-08-fallback": "false",
    "2023-03-21": "BLUE",
    "2023-03-20": "BLUE",
    "2023-06-08-fallback": "false",
    "2023-03-25": "BLUE",
    "2023-03-24": "BLUE",
    "2023-03-23": "BLUE",
    "2022-12-08-fallback": "false",
    "2022-11-14-fallback": "false",
    "2023-03-22": "BLUE",
    "2023-05-03-fallback": "false",
    "2023-03-08-fallback": "false",
    "2022-10-14-fallback": "false",
    "2023-02-08-fallback": "false",
    "2023-06-03-fallback": "false",
    "2023-01-04": "BLUE",
    "2023-01-05": "BLUE",
    "2023-01-02": "BLUE",
    "2023-01-03": "BLUE",
    "2023-01-08": "BLUE",
    "2023-01-09": "BLUE",
    "2023-05-24-fallback": "false",
    "2023-01-06": "BLUE",
    "2023-01-07": "BLUE",
    "2023-07-05-fallback": "false",
    "2023-01-06-fallback": "false",
    "2022-09-03-fallback": "false",
    "2023-08-14-fallback": "false",
    "2023-03-15-fallback": "false",
    "2023-01-11": "BLUE",
    "2023-01-12": "BLUE",
    "2022-11-27-fallback": "false",
    "2023-01-10": "BLUE",
    "2023-01-24-fallback": "false",
    "2023-06-29-fallback": "false",
    "2023-06-23-fallback": "false",
    "2023-01-15": "BLUE",
    "2023-05-06-fallback": "false",
    "2023-01-16": "WHITE",
    "2023-01-13": "BLUE",
    "2022-11-11-fallback": "false",
    "2023-01-14": "BLUE",
    "2023-01-19": "RED",
    "2023-01-17": "RED",
    "2023-01-18": "RED",
    "2022-09-13-fallback": "false",
    "2022-09-19-fallback": "false",
    "2023-01-22": "BLUE",
    "2023-01-23": "RED",
    "2023-01-20": "RED",
    "2023-01-21": "WHITE",
    "2023-03-05-fallback": "false",
    "2023-02-23-fallback": "false",
    "2022-10-17-fallback": "false",
    "2023-04-04-fallback": "false",
    "2023-04-07-fallback": "false",
    "2022-12-13-fallback": "false",
    "2023-06-10-fallback": "false",
    "2023-06-13-fallback": "false",
    "2022-10-07-fallback": "false",
    "2022-12-10-fallback": "false",
    "2023-08-07-fallback": "false",
    "2023-08-04-fallback": "false",
    "2023-01-26": "RED",
    "2023-01-27": "RED",
    "2023-01-24": "RED",
    "2023-01-25": "RED",
    "2023-01-28": "WHITE",
    "2023-01-29": "BLUE",
    "2023-01-30": "RED",
    "2023-02-02": "WHITE",
    "2023-02-13-fallback": "false",
    "2023-02-01": "WHITE",
    "2022-09-29-fallback": "false",
    "2023-01-31": "RED",
    "2023-07-28-fallback": "false",
    "2023-02-10-fallback": "false",
    "2022-10-04-fallback": "false",
    "2023-06-26-fallback": "false",
    "2023-02-26-fallback": "false",
    "2023-02-06": "RED",
    "2023-02-05": "BLUE",
    "2023-02-04": "WHITE",
    "2022-11-09-fallback": "false",
    "2023-03-02-fallback": "false",
    "2023-02-03": "WHITE",
    "2023-02-09": "RED",
    "2023-05-09-fallback": "false",
    "2023-02-08": "RED",
    "2023-02-07": "RED",
    "2022-09-16-fallback": "false",
    "2022-11-21-fallback": "false",
    "2023-07-15-fallback": "false",
    "2023-02-13": "WHITE",
    "2023-02-12": "BLUE",
    "2023-05-21-fallback": "false",
    "2023-02-11": "WHITE",
    "2023-02-10": "RED",
    "2022-12-26-fallback": "false",
    "2023-01-27-fallback": "false",
    "2023-05-30-fallback": "false",
    "2023-03-30-fallback": "false",
    "2023-06-30-fallback": "false",
    "2023-05-27-fallback": "false",
    "2023-05-06": "BLUE",
    "2022-12-13": "RED",
    "2023-07-27-fallback": "false",
    "2023-06-27-fallback": "false",
    "2023-05-07": "BLUE",
    "2022-12-12": "RED",
    "2023-05-08": "BLUE",
    "2022-12-11": "BLUE",
    "2023-05-09": "BLUE",
    "2023-04-30-fallback": "false",
    "2022-12-10": "WHITE",
    "2023-05-13": "BLUE",
    "2022-12-06": "WHITE",
    "2023-05-14": "BLUE",
    "2022-12-05": "WHITE",
    "2023-05-15": "BLUE",
    "2022-12-04": "BLUE",
    "2022-10-15-fallback": "false",
    "2023-07-02-fallback": "false",
    "2023-05-16": "BLUE",
    "2023-05-02-fallback": "false",
    "2022-12-03": "BLUE",
    "2023-05-10": "BLUE",
    "2022-12-09": "WHITE",
    "2023-05-11": "BLUE",
    "2022-12-08": "RED",
    "2023-06-02-fallback": "false",
    "2023-05-12": "BLUE",
    "2022-12-07": "WHITE",
    "2023-04-27-fallback": "false",
    "2023-01-30-fallback": "false",
    "2023-03-27-fallback": "false",
    "2023-02-27-fallback": "false",
    "2023-08-02-fallback": "false",
    "2022-11-23-fallback": "false",
    "2022-12-23-fallback": "false",
    "2022-11-30": "WHITE",
    "2023-05-17": "BLUE",
    "2022-12-02": "WHITE",
    "2023-05-18": "BLUE",
    "2022-12-01": "WHITE",
    "2023-05-19": "BLUE",
    "2023-01-22-fallback": "false",
    "2023-05-24": "BLUE",
    "2022-11-26": "BLUE",
    "2023-05-25": "BLUE",
    "2022-11-27": "BLUE",
    "2023-05-26": "BLUE",
    "2022-11-24": "BLUE",
    "2023-05-27": "BLUE",
    "2022-11-25": "BLUE",
    "2023-05-20": "BLUE",
    "2023-05-21": "BLUE",
    "2023-05-22": "BLUE",
    "2022-11-28": "BLUE",
    "2023-05-23": "BLUE",
    "2022-11-29": "WHITE",
    "2022-09-07-fallback": "false",
    "2023-07-30-fallback": "false",
    "2023-08-30-fallback": "false",
    "2022-10-23-fallback": "false",
    "2023-08-19-fallback": "false",
    "2023-07-19-fallback": "false",
    "2022-09-02-fallback": "false",
    "2023-06-19-fallback": "false",
    "2023-07-22-fallback": "false",
    "2023-04-19-fallback": "false",
    "2022-12-31": "BLUE",
    "2022-12-30": "BLUE",
    "2023-05-19-fallback": "false",
    "2023-03-19-fallback": "false",
    "2023-08-22-fallback": "false",
    "2023-05-28": "BLUE",
    "2023-05-29": "BLUE",
    "2023-06-04": "BLUE",
    "2022-12-28": "BLUE",
    "2022-10-31-fallback": "false",
    "2023-06-03": "BLUE",
    "2022-12-27": "BLUE",
    "2023-06-06": "BLUE",
    "2022-12-26": "BLUE",
    "2023-06-05": "BLUE",
    "2023-04-22-fallback": "false",
    "2023-02-22-fallback": "false",
    "2022-12-25": "BLUE",
    "2023-05-31": "BLUE",
    "2022-09-23-fallback": "false",
    "2023-06-02": "BLUE",
    "2023-06-01": "BLUE",
    "2023-03-22-fallback": "false",
    "2022-12-29": "BLUE",
    "2023-06-22-fallback": "false",
    "2023-05-30": "BLUE",
    "2022-12-31-fallback": "false",
    "2023-05-22-fallback": "false",
    "2023-02-14-fallback": "false",
    "2023-03-14-fallback": "false",
    "2023-01-14-fallback": "false",
    "2022-12-03-fallback": "false",
    "2023-04-14-fallback": "false",
    "2022-11-03-fallback": "false",
    "2023-06-14-fallback": "false",
    "2022-12-20": "BLUE",
    "2023-07-14-fallback": "false",
    "2023-05-14-fallback": "false",
    "2022-10-03-fallback": "false",
    "2023-06-08": "WHITE",
    "2022-12-24": "BLUE",
    "2023-06-07": "WHITE",
    "2022-12-23": "BLUE",
    "2022-09-15-fallback": "false",
    "2022-12-22": "BLUE",
    "2023-06-09": "WHITE",
    "2022-12-21": "BLUE",
    "2023-06-15": "BLUE",
    "2022-12-17": "WHITE",
    "2023-08-27-fallback": "false",
    "2023-06-14": "BLUE",
    "2022-12-16": "WHITE",
    "2023-06-17": "BLUE",
    "2023-01-19-fallback": "false",
    "2022-12-15": "WHITE",
    "2023-06-16": "BLUE",
    "2022-12-14": "RED",
    "2023-06-11": "BLUE",
    "2023-02-19-fallback": "false",
    "2023-06-10": "BLUE",
    "2023-06-13": "BLUE",
    "2022-12-19": "BLUE",
    "2023-06-12": "WHITE",
    "2022-12-18": "BLUE",
    "2022-09-10-fallback": "false",
    "2023-03-29": "BLUE",
    "2023-03-28": "BLUE",
    "2023-03-27": "BLUE",
    "2023-03-26": "BLUE",
    "2022-12-30-fallback": "false",
    "2022-10-30-fallback": "false",
    "2022-11-01": "BLUE",
    "2023-04-15-fallback": "false",
    "2022-10-30": "BLUE",
    "2022-10-31": "BLUE",
    "2023-04-01": "BLUE",
    "2022-10-25": "BLUE",
    "2023-04-02": "BLUE",
    "2023-03-31": "BLUE",
    "2023-02-06-fallback": "false",
    "2022-12-27-fallback": "false",
    "2022-10-26": "BLUE",
    "2023-04-03": "BLUE",
    "2023-03-30": "BLUE",
    "2022-10-23": "BLUE",
    "2023-04-04": "WHITE",
    "2022-12-02-fallback": "false",
    "2022-10-24": "BLUE",
    "2022-10-29": "BLUE",
    "2023-02-15-fallback": "false",
    "2022-10-27": "BLUE",
    "2022-10-28": "BLUE",
    "2022-10-27-fallback": "false",
    "2023-05-23-fallback": "false",
    "2023-04-09": "BLUE",
    "2022-10-11-fallback": "false",
    "2022-09-30-fallback": "false",
    "2023-04-05": "WHITE",
    "2022-12-11-fallback": "false",
    "2022-10-21": "BLUE",
    "2023-04-06": "WHITE",
    "2023-04-06-fallback": "false",
    "2022-10-22": "BLUE",
    "2023-04-07": "WHITE",
    "2023-07-23-fallback": "false",
    "2023-04-08": "BLUE",
    "2022-10-20": "BLUE",
    "2023-04-12": "BLUE",
    "2022-10-14": "BLUE",
    "2023-04-13": "WHITE",
    "2022-10-15": "BLUE",
    "2023-04-14": "BLUE",
    "2022-10-12": "BLUE",
    "2023-04-15": "BLUE",
    "2022-10-13": "BLUE",
    "2022-10-18": "BLUE",
    "2022-10-28-fallback": "false",
    "2022-10-19": "BLUE",
    "2023-04-10": "BLUE",
    "2022-10-16": "BLUE",
    "2023-04-11": "BLUE",
    "2023-01-23-fallback": "false",
    "2022-10-17": "BLUE",
    "2023-06-06-fallback": "false",
    "2022-09-30": "BLUE",
    "2023-08-06-fallback": "false",
    "2023-03-23-fallback": "false",
    "2023-07-10-fallback": "false",
    "2022-11-10-fallback": "false",
    "2023-05-07-fallback": "false",
    "2022-09-08-fallback": "false",
    "2023-05-10-fallback": "false",
    "2023-07-07-fallback": "false",
    "2023-03-07-fallback": "false",
    "2022-11-07-fallback": "false",
    "2022-09-14-fallback": "false",
    "2023-01-07-fallback": "false",
    "2022-12-28-fallback": "false",
    "2023-04-16": "BLUE",
    "2022-11-22": "BLUE",
    "2022-09-11-fallback": "false",
    "2023-04-17": "BLUE",
    "2022-11-23": "BLUE",
    "2023-04-18": "BLUE",
    "2022-11-20": "BLUE",
    "2023-04-19": "BLUE",
    "2022-11-21": "BLUE",
    "2023-04-23": "BLUE",
    "2022-11-15": "BLUE",
    "2023-04-24": "BLUE",
    "2022-11-16": "BLUE",
    "2023-04-25": "WHITE",
    "2022-11-13": "BLUE",
    "2023-04-26": "WHITE",
    "2022-11-14": "BLUE",
    "2023-01-10-fallback": "false",
    "2022-11-19": "BLUE",
    "2023-06-28-fallback": "false",
    "2023-04-20": "BLUE",
    "2023-04-21": "BLUE",
    "2022-11-17": "BLUE",
    "2023-04-22": "BLUE",
    "2022-11-18": "BLUE",
    "2023-03-10-fallback": "false",
    "2023-08-28-fallback": "false",
    "2023-07-26-fallback": "false",
    "2023-03-26-fallback": "false",
    "2022-09-27-fallback": "false",
    "2023-02-02-fallback": "false",
    "2022-12-15-fallback": "false",
    "2023-04-27": "BLUE",
    "2022-11-11": "BLUE",
    "2023-04-28": "BLUE",
    "2022-11-12": "BLUE",
    "2023-04-29": "BLUE",
    "2023-01-26-fallback": "false",
    "2023-04-02-fallback": "false",
    "2022-11-10": "BLUE",
    "2023-05-02": "BLUE",
    "2022-11-04": "BLUE",
    "2023-05-03": "BLUE",
    "2022-11-05": "BLUE",
    "2023-05-04": "BLUE",
    "2022-11-02": "BLUE",
    "2023-05-05": "BLUE",
    "2022-11-03": "BLUE",
    "2022-10-02-fallback": "false",
    "2023-04-30": "BLUE",
    "2022-11-08": "BLUE",
    "2022-11-09": "BLUE",
    "2023-06-15-fallback": "false",
    "2022-11-06": "BLUE",
    "2023-05-01": "BLUE",
    "2022-11-07": "BLUE",
    "2023-08-15-fallback": "false",
    "2023-05-26-fallback": "false",
    "2023-04-21-fallback": "false",
    "2023-03-21-fallback": "false",
    "2022-12-24-fallback": "false",
    "2023-08-07": "BLUE",
    "2023-05-18-fallback": "false",
    "2022-09-03": "BLUE",
    "2023-08-08": "BLUE",
    "2022-09-04": "BLUE",
    "2023-08-08-fallback": "false",
    "2023-08-05": "BLUE",
    "2022-09-05": "BLUE",
    "2023-08-06": "BLUE",
    "2022-09-06": "BLUE",
    "2023-08-03": "BLUE",
    "2022-09-07": "BLUE",
    "2023-08-04": "BLUE",
    "2023-07-11-fallback": "false",
    "2022-09-08": "BLUE",
    "2023-08-01": "BLUE",
    "2023-04-18-fallback": "false",
    "2022-09-09": "BLUE",
    "2023-08-02": "BLUE",
    "2023-07-30": "BLUE",
    "2023-07-31": "BLUE",
    "2023-01-18-fallback": "false",
    "2022-09-01": "BLUE",
    "2022-09-02": "BLUE",
    "2023-02-11-fallback": "false",
    "2022-10-29-fallback": "false",
    "2023-03-11-fallback": "false",
    "2022-09-01-fallback": "false",
    "2023-06-11-fallback": "false",
    "2022-10-06-fallback": "false",
    "2023-08-09": "BLUE",
    "2023-08-18": "BLUE",
    "2023-08-19": "BLUE",
    "2023-08-16": "BLUE",
    "2023-08-17": "BLUE",
    "2023-08-14": "BLUE",
    "2023-08-15": "BLUE",
    "2023-02-28-fallback": "false",
    "2023-08-18-fallback": "false",
    "2023-08-12": "BLUE",
    "2023-08-13": "BLUE",
    "2023-08-10": "BLUE",
    "2023-08-11": "BLUE",
    "2023-01-28-fallback": "false",
    "2023-07-16-fallback": "false",
    "2023-03-01-fallback": "false",
    "2023-08-16-fallback": "false",
    "2023-04-16-fallback": "false",
    "2023-07-01-fallback": "false",
    "2023-03-16-fallback": "false",
    "2022-12-01-fallback": "false",
    "2022-10-19-fallback": "false",
    "2022-10-16-fallback": "false",
    "2022-10-10": "BLUE",
    "2022-10-11": "BLUE",
    "2023-06-01-fallback": "false",
    "2023-08-29": "BLUE",
    "2022-10-03": "BLUE",
    "2022-09-25": "BLUE",
    "2022-10-04": "BLUE",
    "2022-09-26": "BLUE",
    "2023-08-27": "BLUE",
    "2023-07-31-fallback": "false",
    "2022-10-01": "BLUE",
    "2022-09-27": "BLUE",
    "2023-08-28": "BLUE",
    "2022-10-02": "BLUE",
    "2022-09-28": "BLUE",
    "2023-08-31-fallback": "false",
    "2023-08-25": "BLUE",
    "2022-10-07": "BLUE",
    "2022-09-29": "BLUE",
    "2023-08-26": "BLUE",
    "2022-10-08": "BLUE",
    "2023-08-23": "BLUE",
    "2022-10-05": "BLUE",
    "2023-08-24": "BLUE",
    "2022-10-06": "BLUE",
    "2023-08-21": "BLUE",
    "2022-11-22-fallback": "false",
    "2023-08-22": "BLUE",
    "2022-10-09": "BLUE",
    "2023-08-20": "BLUE",
    "2022-09-20": "BLUE",
    "2022-09-21": "BLUE",
    "2022-09-22": "BLUE",
    "2022-12-22-fallback": "false",
    "2022-09-23": "BLUE",
    "2023-02-01-fallback": "false",
    "2022-09-24": "BLUE",
    "2023-07-03-fallback": "false",
    "2023-01-08-fallback": "false",
    "2023-08-03-fallback": "false",
    "2023-03-31-fallback": "false",
    "2022-11-08-fallback": "false",
    "2022-09-14": "BLUE",
    "2022-09-15": "BLUE",
    "2022-09-16": "BLUE",
    "2022-09-17": "BLUE",
    "2023-05-08-fallback": "false",
    "2023-03-03-fallback": "false",
    "2022-12-14-fallback": "false",
    "2022-09-18": "BLUE",
    "2022-09-19": "BLUE",
    "2023-04-03-fallback": "false",
    "2023-08-30": "BLUE",
    "2023-04-08-fallback": "false",
    "2023-08-31": "BLUE",
    "2022-09-04-fallback": "false",
    "2022-09-10": "BLUE",
    "2022-09-11": "BLUE",
    "2022-10-08-fallback": "false",
    "2022-09-12": "BLUE",
    "2022-09-13": "BLUE",
    "2023-03-24-fallback": "false",
    "2022-09-28-fallback": "false",
    "2023-06-19": "BLUE",
    "2023-06-18": "BLUE",
    "2022-11-30-fallback": "false",
    "2022-11-02-fallback": "false",
    "2023-06-26": "BLUE",
    "2023-06-25": "BLUE",
    "2023-06-28": "BLUE",
    "2023-06-27": "BLUE",
    "2023-06-22": "BLUE",
    "2023-06-21": "BLUE",
    "2023-06-24": "BLUE",
    "2023-06-23": "BLUE",
    "2022-11-18-fallback": "false",
    "2023-01-15-fallback": "false",
    "2023-06-20": "BLUE",
    "2023-04-23-fallback": "false",
    "2023-08-29-fallback": "false",
    "2023-04-29-fallback": "false",
    "2022-09-12-fallback": "false",
    "2023-08-23-fallback": "false",
    "2023-06-29": "BLUE",
    "2023-05-05-fallback": "false",
    "2023-03-06-fallback": "false",
    "2023-07-05": "BLUE",
    "2023-07-04": "BLUE",
    "2023-07-07": "BLUE",
    "2023-07-06": "BLUE",
    "2023-07-01": "BLUE",
    "2022-11-12-fallback": "false",
    "2023-07-24-fallback": "false",
    "2023-07-03": "BLUE",
    "2023-07-02": "BLUE",
    "2023-06-30": "BLUE",
    "2022-12-17-fallback": "false",
    "2023-01-05-fallback": "false",
    "2023-07-06-fallback": "false",
    "2023-08-13-fallback": "false",
    "2023-08-10-fallback": "false",
    "2023-06-04-fallback": "false",
    "2023-02-04-fallback": "false",
    "2022-10-13-fallback": "false",
    "2022-11-28-fallback": "false",
    "2023-07-09": "BLUE",
    "2023-07-08": "BLUE",
    "2023-05-28-fallback": "false",
    "2023-02-07-fallback": "false",
    "2023-07-16": "BLUE",
    "2023-07-15": "BLUE",
    "2023-07-18": "BLUE",
    "2023-07-17": "BLUE",
    "2023-07-12": "BLUE",
    "2023-07-11": "BLUE",
    "2023-07-14": "BLUE",
    "2023-07-13": "BLUE",
    "2022-12-04-fallback": "false",
    "2023-04-13-fallback": "false",
    "2022-12-07-fallback": "false",
    "2023-07-10": "BLUE",
    "2023-04-10-fallback": "false",
    "2023-06-07-fallback": "false",
    "2022-10-10-fallback": "false",
    "2022-10-26-fallback": "false",
    "2023-07-09-fallback": "false",
    "2023-08-26-fallback": "false",
    "2022-11-15-fallback": "false",
    "2023-07-19": "BLUE",
    "2023-07-27": "BLUE",
    "2023-05-15-fallback": "false",
    "2023-07-26": "BLUE",
    "2023-07-29": "BLUE",
    "2023-07-28": "BLUE",
    "2023-07-23": "BLUE",
    "2023-07-22": "BLUE",
    "2023-07-25": "BLUE",
    "2023-07-24": "BLUE",
    "2023-07-21": "BLUE",
    "2023-07-20": "BLUE",
    "2023-01-02-fallback": "false",
    "2023-04-26-fallback": "false",
    "2023-07-21-fallback": "false",
    "2022-09-22-fallback": "false"
    }
}`;
init();
//# sourceMappingURL=tempo.js.map