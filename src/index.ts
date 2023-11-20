/// <reference path="tempo.ts" />

import { tempo } from "./tempo.js";
import { total_online } from "./total_online.js";

interface Row {
    date: Date;
    wattsHour: number;
}

const inputElement = document.getElementById("formFile");
inputElement.addEventListener("change", handleFiles, false);

async function handleFiles() {
    const files: FileList = this.files; /* now you can work with the file list */
    console.log(files);

    const content = await files[0].text()
    // skip 3 first header lines
    const lines = content.split('\n').slice(3)

    let rows: Array<Row> = []
    for (const line of lines) {
        const columns = line.split(';')
        if (columns.length != 2) continue

        const dateRaw = columns[0]
        const date = new Date(dateRaw)

        let watts = parseInt(columns[1])
        if (isNaN(watts)) {
            watts = 0 // todo add warning for missing data
        }

        rows.push({
            date: date,
            wattsHour: watts / 2, // 30 minutes slots
        })
    }

    console.log(rows);

    const results = new Array<ModelResult>()
    results.push(computeModel(new tempo(), rows))
    results.push(computeModel(new total_online(), rows))

    displayResults(results)
}

type ModelResult = {
    Name: string
    Cost: number
}

interface Model {
    Name(): string
    GetKWPrice(date: Date): number
}

function computeModel(model: Model, rows: Array<Row>): ModelResult {
    let total = 0
    for (const row of rows) {
        total += row.wattsHour * model.GetKWPrice(row.date) / 1000
    }

    return {
        Name: model.Name(),
        Cost: total,
    }
}

function displayResults(results: Array<ModelResult>) {
    let html = `
        <table>
        <thead>
            <tr>
                <th data-field="name" data-sortable="true">Nom</th>
                <th data-field="price" data-sortable="true">Prix</th>
            </tr>
        </thead>
        <tbody>`

    for (const result of results) {
        html += `
            <tr>
                <td>${result.Name}</td>
                <td>${result.Cost.toFixed(0)}€</td>
            </tr>
            `
    }

    html += `
        </tbody>
        </table>`

    const div = document.getElementById('output')
    div.innerHTML = html
}

