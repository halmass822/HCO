export const initialK9Data = [
    {
        badge: "123",
        officer_name: "John Doe",
        k9_name: "alpha",
        regionLong: "6G_Huron",
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
        regionLong: "6J_Middlesex",
        region: "6J",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567891@txt.ca",
        notes: "lucan"
    },
    {
        badge: "124",
        officer_name: "John Darcy",
        k9_name: "jack",
        regionLong: "6J_Middlesex",
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
        regionLong: "6E_Essex",
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
        regionLong: "6O_Norfolk",
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
        regionLong: "6C_Haldimand",
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
        regionLong: "6B_Brant",
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
        regionLong: "6S_Oxford",
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
        regionLong: "6I_southbruce",
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
        regionLong: "6P_elginchatham",
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
        regionLong: "6M_lambton",
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
        regionLong: "6N_perth",
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
        regionLong: "6L_greybruce",
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
        regionLong: "6T_wellington",
        region: "6T",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567803@txt.ca",
        notes: ""
    },
];

export const neighbouringCounties = {
    "6E": ["USA_Michigan", "6D", "6P"],
    "6D": ["6E", "6M", "6P", "6J"],
    "6P": ["6D", "6J", "6S", "6O"],
    "6O": ["6P", "6S", "6B", "6C"],
    "6C": ["6B", "6O", "5C"],
    "6B": ["5I", "5C", "6C", "6O", "6S"],
    "6S": ["6N", "5I", "6B", "6O", "6P", "6J"],
    "6J": ["6G", "6N", "6S", "6P", "6D", "6M"],
    "6M": ["USA_Michigan", "6G", "6J", "6P", "6D"],
    "6G": ["6I", "6L", "6T", "6N", "6J", "6M"],
    "6N": ["6G", "6T", "5I", "6S", "6J"],
    "5I": ["6T", "5C", "5B", "5F", "1S"],
    "5C": ["USA_Newyork", "6C", "6B", "5I"], //ADD 5B 5F
    "6T": ["6L", "5C", "5I", "6N", "6G"], //GET CENTRAL MAP
    "6L": ["6T", "6G", "6I"],
    "6I": ["6L", "6T", "6G"]
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