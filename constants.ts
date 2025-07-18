import { CountyData, TrendData, CorporateLandlord, RacialData, LegalRepresentation, JudicialProfile } from "./types";

// Professional, uniform SVG silhouette for judges to avoid stock photos.
const judgeSilhouette = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBkPSJNMjMyIDU2YTYgNiAwIDAgMS02IDZoLTEyLjQyYTQ4LjE5IDQ4LjE5IDAgMCAwLTM5Ljc2LTIwLjA5IDQ4IDQ4IDAgMCAwLTQ4LjQ0IDQ3LjYzIDYgNiAwIDAgMS0xMiAwbC0xLjItNC43MmE2IDYgMCAwIDEtMy4zNS00LjM5YTYgNiAwIDAgMSAuNjgtNS45Mmw4LjM3LTIxYTYgNiAwIDAgMSAxMS4xMyA0LjQ0bC02LjM0IDE1Ljg2YTYwIDYwIDAgMCAxIDU5LjE3LTU5LjgxQTYwLjIzIDYwLjIzIDAgMCAxIDE5MiAyN2E2MCA2MCAwIDAgMSA1My4yNSA3NC4yN0EyMDQuNDUgMjA0LjQ1IDAgMCAxIDI0NiAxODRhNiA2IDAgMCAxLTUgNy4xN2wtOS4zNCAyMy4zNGExNiAxNiAwIDAgMS0xNS4xNiAxMC40OUgxNDRhMTYgMTYgMCAwIDEgMC0zMmgzMy4zN2ExNiAxNiAwIDAgMCAxNS4xNi0xMC40OWw0LjM0LTEwLjg2QTQ3Ljg5IDQ3Ljg5IDAgMCAwIDE4NCAxMDZhNiA2IDAgMCAxIDAtMTIgNDggNDggMCAwIDAtLjU4IDcuNDggNiA2IDAgMCAxLTExLjcxLTMuMDZBMzYuMDYgMzYuMDYgMCAwIDEgMTcyIDgwYTM2IDM2IDAgMCAwLTcxLjQxIDQuNjVsLTEuNjMgNi41MWE2IDYgMCAwIDEtMTEuNi0yLjlsMS42My02LjUxQTQ4IDQ4IDAgMCAxIDEyOC40MiA0NGE0OC4xOSA0OC4xOSAwIDAgMSA0Ny44MiAyMC4wOUE2IDYgMCAwIDEgMTg0IDYyYTQ3Ljg5IDQ3Ljg5IDAgMCAwIDQwIDQ2LjE4VjEwNmE2IDYgMCAwIDEgMy4zNyA1LjQ4IDYgNiAwIDAgMS0xLjA5IDMuMzlsLTkuMzMgMjMuMzRhNCA0IDAgMCAwIDMuNzkgNS4xMWw5LjM0LTIzLjM0QTQuMjUgNC4yNSAwIDAgMSAyMjggMTUwYTQ1Ljc1IDQ1Ljc1IDAgMCAwIDItMTQuNTIgNTkuNzIgNTkuNzIgMCAwIDAtLjI2LTUuNTlBMzYgMzYgMCAwIDAgMTkyIDM5YTM1Ljc4IDM1Ljc4IDAgMCAwLTMwLjY5IDE2LjI3bC0uNDYuNzVhNiA2IDAgMCAxLTkuNzEtNS43MmwzLjU4LTEuNzVhMTIgMTIgMCAwIDAgNi4zOS0xMC4yN0E0OCA0OCAwIDAgMCAxMjIgMjEuNWE0Ny41OSA0Ny41OSAwIDAgMC00MS40MSAyMy4xN2MtLjA4LjE2LS4xNS4zMy0uMjIuNDlsLTYuMjUgMTUuNjNhMTcuOTMgMTcuOTMgMCAwIDAtMi4wNSA2Ljk1bDEuMjEgNC44M2E2IDYgMCAwIDEgMy4xNiA1LjEyaDBhMzYuMDYgMzYuMDYgMCAwIDEgLjQzLTYuNTdBMzYgMzYgMCAwIDAgODggMTAwYTYgNiAwIDAgMS0xMiAwIDQ4IDQ4IDAgMCAxIDQ4LTQ4aDBhNiA2IDAgMCAxIDYgNmMwIDEuNDEtLjYgMi43MS0xLjU4IDMuNzNhNiA2IDAgMCAxLTguNDIgMGwtMTYtMTZhNiA2IDAgMSAxIDguNDgtOC40OGwxMy4xNyAxMy4xN2E2IDYgMCAwIDEtMy4xNyA5LjkyQTQ3LjY5IDQ3LjY5IDAgMCAwIDMyLjU5IDEyM0EzNi4wNSA٣Ni4wNSAwIDAgMCAyNCAxNTJ2NjRhNiA2IDAgMCAxLTEyIDB2LTY0YTQ4IDQ4IDAgMCAxIDQ4LTQ4aDEzLjgyYTYgNiAwIDAgMSAwIDEySDEwOGEzNiAzNiAwIDAgMCAwIDcybDEyLjIzIDMyLjE5YTYgNiAwIDAgMS0xLjM2IDYuNTNsLTEuNzMgMi4xN2E2IDYgMCAxIDEgMC0uMDEiIGZpbGw9IiM4MDgwODAiPjwvcGF0aD48L3N2Zz4=`;

export const EVICTION_DATA = {
    totalFilings: 348215,
    dailyRate: 152,
    familiesAffected: 174107,
    countyData: [
        {name: "Marion", filings: 98453, rate: 3.8, risk: "Critical", lat: 39.7910, lng: -86.1480, population: 964582, dataQuality: "Complete", sourceNotes: "Includes Superior and Township courts data."},
        {name: "Lake", filings: 42821, rate: 3.2, risk: "High", lat: 41.5849, lng: -87.3396, population: 485493, dataQuality: "Complete"},
        {name: "Allen", filings: 31238, rate: 2.6, risk: "Moderate", lat: 41.0802, lng: -85.1394, population: 385410, dataQuality: "Complete"},
        {name: "St. Joseph", filings: 28147, rate: 2.9, risk: "High", lat: 41.6764, lng: -86.2520, population: 272912, dataQuality: "Complete"},
        {name: "Vanderburgh", filings: 24872, rate: 3.4, risk: "High", lat: 37.9748, lng: -87.5558, population: 180136, dataQuality: "Partial", sourceNotes: "Missing some small claims court data pre-2021."},
        {name: "Hamilton", filings: 18654, rate: 1.8, risk: "Low", lat: 40.0494, lng: -86.0158, population: 347467, dataQuality: "Complete"},
        {name: "Tippecanoe", filings: 16791, rate: 2.1, risk: "Moderate", lat: 40.4167, lng: -86.8753, population: 186251, dataQuality: "Complete"}
    ] as CountyData[],
    racialData: {
        white: { rate: 1.9, disparity: 1.0 },
        black: { rate: 3.4, disparity: 1.79 },
        hispanic: { rate: 4.4, disparity: 2.31 },
        other: { rate: 3.2, disparity: 1.68 }
    } as RacialData,
    legalRepresentation: {
        landlords: 69.8,
        tenants: 1.1,
        unrepresented: 29.1
    } as LegalRepresentation,
    trendData: {
        labels: ['Jan \'22', 'Jul \'22', 'Jan \'23', 'Jul \'23', 'Jan \'24', 'Jul \'24', 'Jan \'25', 'Jul \'25', 'Predicted Aug', 'Predicted Sep'],
        actual: [14983, 18231, 14102, 16348, 13477, 15582, 14821, 16259, null, null],
        predicted: [null, null, null, null, null, null, null, 16259, 19140, 20310]
    } as TrendData,
    corporateLandlords: [
        {name: "Birge & Held", filings: 1247, rate: 59.4},
        {name: "Aion Partners", filings: 892, rate: 54.1},
        {name: "Covenant Capital", filings: 756, rate: 63.0},
        {name: "Indy Property Ventures", filings: 634, rate: 64.7},
        {name: "Midwest Realty Group", filings: 589, rate: 51.2}
    ] as CorporateLandlord[],
};

export const JUDICIAL_DATA: JudicialProfile[] = [
    {
        name: "Judge John M.T. Chavis II",
        jurisdiction: "Marion County Superior Court",
        zone: "Red",
        imageUrl: judgeSilhouette,
        summary: "Direct financial conflicts of interest from a primary eviction law firm create a severe appearance of impropriety, placing this judge in the highest ethical risk category.",
        findings: [
            { type: "Financial", summary: "Accepted campaign contributions from Thrasher Buschmann & Voelkel P.C., a prominent eviction law firm." },
            { type: "Ethical", summary: "Creates a direct structural coupling between the judge's political career and the financial success of a frequent litigant, breaching Rule 1.2 & 2.11." },
            { type: "Statistical", summary: "Landlord win rate in cases involving top donors is 8% higher than in non-donor cases." },
        ],
    },
    {
        name: "Judge Heather A. Welch",
        jurisdiction: "Marion County Superior Court",
        zone: "Yellow",
        imageUrl: judgeSilhouette,
        summary: "Financial alignment with broader real estate industry interests through PAC contributions erodes public trust in judicial neutrality.",
        findings: [
            { type: "Financial", summary: "Accepted campaign contributions from the Indiana REALTORS PAC." },
            { type: "Ethical", summary: "Aligns the judge financially with the goals of the real estate industry, creating an appearance of systemic alignment that can erode public trust (Rule 2.4)." },
            { type: "Procedural", summary: "Observed granting continuances at a higher rate for landlords represented by industry-aligned attorneys." },
        ],
    },
    {
        name: "Judge Linda E. Brown",
        jurisdiction: "Pike Township Small Claims Court",
        zone: "Accountability Concern",
        imageUrl: judgeSilhouette,
        summary: "Avoidance of public accountability mechanisms by declining judicial retention interviews, undermining a key public oversight process.",
        findings: [
            { type: "Ethical", summary: "Chose not to participate in retention interviews before the Marion County Judicial Selection Committee in 2024, yet was still recommended for retention." },
            { type: "Procedural", summary: "This behavior signals a disregard for public accountability, reinforcing perceptions of a system insulated from the citizens it serves (violates the spirit of Rule 1.2)." },
        ],
    }
];
