/// <reference path="tempo.ts" />

import { tempo } from "./tempo.js";

interface Row {
    date: Date;
    watts: number;
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

        rows.push({
            date: date,
            watts: parseInt(columns[1])
        })
    }

    console.log(rows);

    const t = new tempo()

    let tempoTotal = 0
    for (const row of rows) {
        if (Number.isNaN(row.watts)) {
            console.log(row)
        }
        tempoTotal += row.watts * t.GetKWPrice(row.date) / 1000
        // console.log(tempoTotal)
    }
    console.log(tempoTotal)
}