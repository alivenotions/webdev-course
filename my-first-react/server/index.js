const response = [
    {
        "machine": "Vial Machine 14"
    },
    {
        "machine": "Vial Machine 15"
    },
    {
        "machine": "Vial Machine 10"
    },
    {
        "machine": "Vial Machine 17"
    },
    {
        "machine": "Vial Machine 11"
    },
    {
        "machine": "Vial Machine 19"
    },
    {
        "machine": "Vial Machine 18"
    },
    {
        "machine": "Vial Machine 16"
    },
    {
        "machine": "Vial Machine 9"
    },
    {
        "machine": "Vial Machine 12"
    },
    {
        "machine": "Vial Machine 4"
    },
    {
        "machine": "Vial Machine 5"
    },
    {
        "machine": "Vial Machine 6"
    },
    {
        "machine": "Vial Machine 7"
    },
    {
        "machine": "Vial Machine 13"
    },
    {
        "machine": "Vial Machine 1"
    },
    {
        "machine": "Vial Machine 2"
    },
    {
        "machine": "Vial Machine 3"
    },
    {
        "machine": "Vial Machine 8"
    }
]

response.map(elem => MachineItem(elem.machine))

const MachineItem = (machine) => <div className="machine-item">{machine}</div>