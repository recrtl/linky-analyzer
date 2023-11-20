/// <reference path="tempo.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { tempo } from "./tempo.js";
import { total_online } from "./total_online.js";
import { zen_flex } from "./zen_flex.js";
const inputElement = document.getElementById("formFile");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const files = this.files; /* now you can work with the file list */
        console.log(files);
        const content = yield files[0].text();
        // skip 3 first header lines
        const lines = content.split('\n').slice(3);
        const modelInput = {
            Power: 6,
            Readings: []
        };
        let previousDate;
        for (let i = 0; i < lines.length; i++) {
            const columns = lines[i].split(';');
            if (columns.length != 2)
                continue;
            const dateRaw = columns[0];
            const date = new Date(dateRaw);
            let watts = parseInt(columns[1]);
            if (isNaN(watts)) {
                watts = 0; // todo add warning for missing data
            }
            if (i != 0) {
                const durationHours = (date.getTime() - previousDate.getTime()) / (1000 * 60 * 60);
                modelInput.Readings.push({
                    startDate: previousDate,
                    endDate: date,
                    wattsHour: watts * durationHours,
                });
            }
            previousDate = date;
        }
        const results = new Array();
        results.push(new tempo().RunModel(modelInput));
        results.push(new zen_flex().RunModel(modelInput));
        results.push(new total_online().RunModel(modelInput));
        displayResults(results);
    });
}
function displayResults(results) {
    let html = `
        <table>
        <thead>
            <tr>
                <th data-field="name" data-sortable="true">Nom</th>
                <th data-field="price" data-sortable="true">Prix</th>
                <th data-field="price" data-sortable="true">Détails</th>
            </tr>
        </thead>
        <tbody>`;
    for (const result of results) {
        const description = marked.parse(result.Description);
        html += `
            <tr>
                <td>${result.Name}</td>
                <td>${result.Cost.toFixed(0)}€</td>
                <td>${description}</td>
            </tr>
            `;
    }
    html += `
        </tbody>
        </table>`;
    const div = document.getElementById('output');
    div.innerHTML = html;
}
//# sourceMappingURL=index.js.map