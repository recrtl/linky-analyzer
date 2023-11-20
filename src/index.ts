/// <reference path="tempo.ts" />

import { tempo } from "./tempo.js";
import { total_online } from "./total_online.js";
import { zen_flex } from "./zen_flex.js";

interface imarked {
    parse(markdown: string): string
}
declare var marked: imarked;

function getFormFile(): HTMLInputElement { return <HTMLInputElement>document.getElementById("formFile") }
function getFormPower(): HTMLInputElement { return <HTMLInputElement>document.getElementById("formPower") }

getFormFile().addEventListener("change", onFormChange, false);
getFormPower().addEventListener("change", onFormChange, false);

async function onFormChange() {
    const files: FileList = getFormFile().files; /* now you can work with the file list */
    if (files.length == 0) return

    const content = await files[0].text()
    // skip 3 first header lines
    const lines = content.split('\n').slice(3)

    const modelInput: ModelInput = {
        Power: parseFloat(getFormPower().value),
        Readings: []
    }

    const missingDates = new Set<string>()

    let previousDate: Date
    for (let i = 0; i < lines.length; i++) {
        const columns = lines[i].split(';')
        if (columns.length != 2) continue

        const dateRaw = columns[0]
        const date = new Date(dateRaw)

        let watts = parseInt(columns[1])
        if (isNaN(watts)) {
            watts = 0
            missingDates.add(date.toISOString().split('T')[0])
        }

        if (i != 0) {
            const durationHours = (date.getTime() - previousDate.getTime()) / (1000 * 60 * 60)
            modelInput.Readings.push({
                startDate: previousDate,
                endDate: date,
                wattsHour: watts * durationHours,
            })
        }

        previousDate = date
    }

    displayInputData(modelInput, missingDates)

    const results = new Array<ModelResult>()
    results.push(new tempo().RunModel(modelInput))
    results.push(new zen_flex().RunModel(modelInput))
    results.push(new total_online().RunModel(modelInput))
    displayResults(results)
}

interface Model {
    RunModel(input: ModelInput): ModelResult
}

function displayInputData(modelInput: ModelInput, missingDates: Set<string>) {
    let description = `
Votre fichier couvre du ${modelInput.Readings[0].startDate.toLocaleDateString()} au ${modelInput.Readings.slice(-1)[0].startDate.toLocaleDateString()}.
    `

    if (missingDates.size > 0) {
        description += `

**Note:** les dates suivantes sont manquantes du fichier: ${Array.from(missingDates).join(', ')}`
    }

    let html = marked.parse(description)

    const div = document.getElementById('input')
    div.innerHTML = html
}

function displayResults(results: Array<ModelResult>) {
    let html = `
        <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th data-field="name">Nom</th>
                <th data-field="price">Prix</th>
                <th data-field="price">Détails</th>
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
