const initialK9Data = [
    {
        badge: "123",
        officer_name: "John Doe",
        k9_name: "alpha",
        region: "6g_huron",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "124",
        officer_name: "John Dane",
        k9_name: "cyprus",
        region: "6j_middlesex",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "lucan"
    },
    {
        badge: "124",
        officer_name: "John Darcy",
        k9_name: "jack",
        region: "6j_middlesex",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "thamesford"
    },
    {
        badge: "126",
        officer_name: "John Deacon",
        k9_name: "vlad",
        region: "6e_essex",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "lakeshore"
    },
    {
        badge: "127",
        officer_name: "John Quincy",
        k9_name: "runner",
        region: "6o_norfolk",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "simcoe"
    },
    {
        badge: "128",
        officer_name: "John Haldimand",
        k9_name: "jericho",
        region: "6c_haldimand",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "129",
        officer_name: "John King",
        k9_name: "simmer",
        region: "6b_brant",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "130",
        officer_name: "John Oscar",
        k9_name: "samson",
        region: "6s_oxford",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "131",
        officer_name: "John Brigley",
        k9_name: "cujo",
        region: "6i_southbruce",
        skillset: ["gsd", "explosives"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: "tiverton"
    },
    {
        badge: "132",
        officer_name: "John Baxter",
        k9_name: "krampus",
        region: "6p_elginchatham",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "133",
        officer_name: "John Oak",
        k9_name: "dawg",
        region: "6m_lambton",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "134",
        officer_name: "John Perkins",
        k9_name: "loach",
        region: "6n_perth",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "135",
        officer_name: "John Lincoln",
        k9_name: "rex",
        region: "6l_greybruce",
        skillset: ["gsd"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
    {
        badge: "136",
        officer_name: "John Wilkes",
        k9_name: "wellsley",
        region: "6t_wellington",
        skillset: ["gsd", "cadaver"],
        phone_number: "123 456-7890",
        page_at: "1234567890@txt.ca",
        notes: ""
    },
];

const neighbouringCountiesData = { //change these to the full name like in the objects above
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