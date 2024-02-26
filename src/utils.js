export const initialK9Data = [
    {
        badge: "123",
        officer_name: "John Doe",
        k9_name: "alpha",
        regionLong: "6g_huron",
        region: "6g",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "124",
        officer_name: "John Dane",
        k9_name: "cyprus",
        regionLong: "6j_middlesex",
        region: "6j",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "lucan"
    },
    {
        badge: "124",
        officer_name: "John Darcy",
        k9_name: "jack",
        regionLong: "6j_middlesex",
        region: "6j",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "thamesford"
    },
    {
        badge: "126",
        officer_name: "John Deacon",
        k9_name: "vlad",
        regionLong: "6e_essex",
        region: "6e",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "lakeshore"
    },
    {
        badge: "127",
        officer_name: "John Quincy",
        k9_name: "runner",
        regionLong: "6o_norfolk",
        region: "6o",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "simcoe"
    },
    {
        badge: "128",
        officer_name: "John Haldimand",
        k9_name: "jericho",
        regionLong: "6c_haldimand",
        region: "6c",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "129",
        officer_name: "John King",
        k9_name: "simmer",
        regionLong: "6b_brant",
        region: "6b",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "130",
        officer_name: "John Oscar",
        k9_name: "samson",
        regionLong: "6s_oxford",
        region: "6s",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "131",
        officer_name: "John Brigley",
        k9_name: "cujo",
        regionLong: "6i_southbruce",
        region: "6i",
        skillset: ["gsd", "explosives"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "tiverton"
    },
    {
        badge: "132",
        officer_name: "John Baxter",
        k9_name: "krampus",
        regionLong: "6p_elginchatham",
        region: "6p",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "133",
        officer_name: "John Oak",
        k9_name: "dawg",
        regionLong: "6m_lambton",
        region: "6m",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "134",
        officer_name: "John Perkins",
        k9_name: "loach",
        regionLong: "6n_perth",
        region: "6n",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "135",
        officer_name: "John Lincoln",
        k9_name: "rex",
        regionLong: "6l_greybruce",
        region: "6l",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "136",
        officer_name: "John Wilkes",
        k9_name: "wellsley",
        regionLong: "6t_wellington",
        region: "6t",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
];

export const neighbouringCounties = {
    "6e": ["USA_Michigan", "6d", "6p"],
    "6d": ["6e", "6m", "6p", "6j"],
    "6p": ["6d", "6j", "6s", "6o"],
    "6o": ["6p", "6s", "6b", "6c"],
    "6c": ["6b", "6o", "5c"],
    "6b": ["5i", "5c", "6c", "6o", "6s"],
    "6s": ["6n", "5i", "6b", "6o", "6p", "6j"],
    "6j": ["6g", "6n", "6s", "6p", "6d", "6m"],
    "6m": ["USA_Michigan", "6g", "6j", "6p", "6d"],
    "6g": ["6i", "6l", "6t", "6n", "6j", "6m"],
    "6n": ["6g", "6t", "5i", "6s", "6j"],
    "5i": ["6t", "5c", "5b", "5f", "1s"],
    "5c": ["USA_Newyork", "6c", "6b", "5i"], //ADD 5B 5F
    "6t": ["6l", "5c", "5i", "6n", "6g"], //GET CENTRAL MAP
    "6l": ["6t", "6g", "6i"],
    "6i": ["6l", "6t", "6g"]
}