type Reading = {
    startDate: Date
    endDate: Date
    wattsHour: number
}

type ModelInput = {
    Power: number
    Readings: Array<Reading>
}

type ModelResult = {
    Name: string
    Cost: number
    Description: string
}
