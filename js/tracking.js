// Get query parameters from current URL
const queryString = window.location.search;

// Extract parameters
const urlParams = new URLSearchParams(queryString);

const lead_id = urlParams.get("leadid");
const campaign = urlParams.get("utm_campaign");
const step = urlParams.get("step");

// Preserve parameters when clicking links
document.querySelectorAll("a").forEach(link => {
    if (!link.href.includes("?") && queryString) {
        link.href = link.href + queryString;
    }
});

// Detect page name
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