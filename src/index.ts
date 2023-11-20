/// <reference path="tempo.ts" />

import { tempo } from "./tempo.js";
import { total_online } from "./total_online.js";
import { zen_flex } from "./zen_flex.js";

interface imarked {
    parse(markdown: string): string
}
declare var marked: imarked;

const inputElement = document.getElementById("formFile");
inputElement.addEventListener("change", handleFiles, false);

async function handleFiles() {
    const files: FileList = this.files; /* now you can work with the file list */
    console.log(files);

    const content = await files[0].text()
    // skip 3 first header lines
    const lines = content.split('\n').slice(3)

    const modelInput: ModelInput = {
        Power: 6, // todo
        Readings: []
    }

    for (const line of lines) {
        const columns = line.split(';')
        if (columns.length != 2) continue

        const dateRaw = columns[0]
        const date = new Date(dateRaw)

        let watts = parseInt(columns[1])
        if (isNaN(watts)) {
            watts = 0 // todo add warning for missing data
        }

        modelInput.Readings.push({
            date: date,
            wattsHour: watts / 2, // 30 minutes slots
        })
    }

    const results = new Array<ModelResult>()
    results.push(new tempo().RunModel(modelInput))
    results.push(new zen_flex().RunModel(modelInput))
    results.push(new total_online().RunModel(modelInput))
    displayResults(results)
}

interface Model {
    RunModel(input: ModelInput): ModelResult
}

function displayResults(results: Array<ModelResult>) {

    let html = `
        <table>
        <thead>
            <tr>
                <th data-field="name" data-sortable="true">Nom</th>
                <th data-field="price" data-sortable="true">Prix</th>
                <th data-field="price" data-sortable="true">Détails</th>
            </tr>
        </thead>
        <tbody>`

    for (const result of results) {
        const description = marked.parse(result.Description)

        html += `
            <tr>
                <td>${result.Name}</td>
                <td>${result.Cost.toFixed(0)}€</td>
                <td>${description}</td>
            </tr>
            `
    }

    html += `
        </tbody>
        </table>`

    const div = document.getElementById('output')
    div.innerHTML = html
}

