// Function to get URL parameters
function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get values from URL
const lead_id = getParam("leadid");
const campaign = getParam("utm_campaign");
const step = getParam("step");

// Get page name (link name)
let page = window.location.pathname.split("/").pop();

if(page === ""){
    page = "home";
}

const link_name = page.replace(".html","");

// Send event to GA4
gtag("event","page_visit",{
    lead_id: lead_id,
    campaign: campaign,
    step: step,
    link_name: link_name
});

console.log("Tracking Event Sent:",lead_id,campaign,step,link_name);