export const initialK9Data = [
    {
        badge: "123",
        officer_name: "John Doe",
        k9_name: "alpha",
        regionLong: "6G Huron",
        region: "6G",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "124",
        officer_name: "John Dane",
        k9_name: "cyprus",
        regionLong: "6J Middlesex",
        region: "6J",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567891@txt.ca",
        notes: "lucan"
    },
    {
        badge: "125",
        officer_name: "John Darcy",
        k9_name: "jack",
        regionLong: "6J Middlesex",
        region: "6J",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567892@txt.ca",
        notes: "thamesford"
    },
    {
        badge: "126",
        officer_name: "John Deacon",
        k9_name: "vlad",
        regionLong: "6E Essex",
        region: "6E",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567893@txt.ca",
        notes: "lakeshore"
    },
    {
        badge: "127",
        officer_name: "John Quincy",
        k9_name: "runner",
        regionLong: "6O Norfolk",
        region: "6O",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567894@txt.ca",
        notes: "simcoe"
    },
    {
        badge: "128",
        officer_name: "John Haldimand",
        k9_name: "jericho",
        regionLong: "6C Haldimand",
        region: "6C",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567895@txt.ca",
        notes: ""
    },
    {
        badge: "129",
        officer_name: "John King",
        k9_name: "simmer",
        regionLong: "6B Brant",
        region: "6B",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567896@txt.ca",
        notes: ""
    },
    {
        badge: "130",
        officer_name: "John Oscar",
        k9_name: "samson",
        regionLong: "6S Oxford",
        region: "6S",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567897@txt.ca",
        notes: ""
    },
    {
        badge: "131",
        officer_name: "John Brigley",
        k9_name: "cujo",
        regionLong: "6I South Bruce",
        region: "6I",
        skillset: ["gsd", "explosives"],
        phone_number: "123 456-7890",
        page_at: "1234567898@txt.ca",
        notes: "tiverton"
    },
    {
        badge: "132",
        officer_name: "John Baxter",
        k9_name: "krampus",
        regionLong: "6P Elgin Chatham",
        region: "6P",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567899@txt.ca",
        notes: ""
    },
    {
        badge: "133",
        officer_name: "John Oak",
        k9_name: "dawg",
        regionLong: "6M Lambton",
        region: "6M",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567800@txt.ca",
        notes: ""
    },
    {
        badge: "134",
        officer_name: "John Perkins",
        k9_name: "loach",
        regionLong: "6N Perth",
        region: "6N",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567801@txt.ca",
        notes: ""
    },
    {
        badge: "135",
        officer_name: "John Lincoln",
        k9_name: "rex",
        regionLong: "6L Grey-Bruce",
        region: "6L",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567802@txt.ca",
        notes: ""
    },
    {
        badge: "136",
        officer_name: "John Wilkes",
        k9_name: "wellsley",
        regionLong: "6T Wellington",
        region: "6T",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567803@txt.ca",
        notes: ""
    },
];

export const k9Skillsets = ["gsd", "cadaver", "explosives"]

export const neighbouringCounties = {
    "6E Essex": ["USA_Michigan", "6D Chatham", "6P Elgin Chatham"],
    "6D Chatham": ["6E Essex", "6M Lambton", "6P Elgin Chatham", "6J Middlesex"],
    "6P Elgin Chatham": ["6D Chatham", "6J Middlesex", "6S Oxford", "6O Norfolk"],
    "6O Norfolk": ["6P Elgin Chatham", "6S Oxford", "6B Brant", "6C Haldimand"],
    "6C Haldimand": ["6B Brant", "6O Norfolk", "5C Burlington"],
    "6B Brant": ["5I South Bruce", "5C Burlington", "6C Haldimand", "6O Norfolk", "6S Oxford"],
    "6S Oxford": ["6N Perth", "5I South Bruce", "6B Brant", "6O Norfolk", "6P Elgin Chatham", "6J Middlesex"],
    "6J Middlesex": ["6G Huron", "6N Perth", "6S Oxford", "6P Elgin Chatham", "6D", "6M Lambton"],
    "6M Lambton": ["USA_Michigan", "6G Huron", "6J Middlesex", "6P Elgin Chatham", "6D"],
    "6G Huron": ["6I South Bruce", "6L Grey-Bruce", "6T Wellington", "6N Perth", "6J Middlesex", "6M Lambton"],
    "6N Perth": ["6G Huron", "6T Wellington", "5I South Bruce", "6S Oxford", "6J Middlesex"],
    "5I Mississauga": ["6T Wellington", "5C Burlington", "5B Aurora", "5F Toronto", "1S Caledon"],
    "5C Burlington": ["USA_Newyork", "6C Haldimand", "6B Brant", "5I Mississauga"], //ADD 5B 5F
    "6T Wellington": ["6L Grey-Bruce", "5C Burlington", "5I South Bruce", "6N Perth", "6G Huron"], //GET CENTRAL MAP
    "6L Grey-Bruce": ["6T", "6G Huron", "6I South Bruce"],
    "6I South Bruce": ["6L Grey-Bruce", "6T Wellington", "6G Huron"]
};

export const WRCounties = [
    "6E Essex",
    "6P Elgin Chatham",
    "6O Norfolk",
    "6C Haldimand",
    "6M Lambton",
    "6J Middlesex",
    "6S Oxford",
    "6B Brant",
    "6G Huron",
    "6N Perth",
    "6I South Bruce",
    "6T Wellington",
    "6L Grey-Bruce",
    "5I Mississauga",
    "5C Burlington",
    "5F Toronto",
    "5B Aurora",
];

export function parseCounty(inputRegionCode) {
        const countyFull = WRCounties.find((x) => x.slice(0,2) === inputRegionCode)
        if(countyFull) {
            return countyFull.slice(3);
        } else {
            return "[COUNTY]";
        }
}