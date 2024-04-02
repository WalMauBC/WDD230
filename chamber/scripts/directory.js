const section = document.querySelector("#cards-div");
const url = "https://Zamarr0n.github.io/wdd230/chamber/data/members.json";

// async function to get the data:
async function getLink() {
    try {
        // fetching data 
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // converting data to a JSON object
        const data = await response.json();
        // displaying the information
        displayData(data.members);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayData = (members) => {
    members.forEach(memberGroup => {
        memberGroup.info.forEach(member => {
            // Creating elements to implement the data inside them
            const div = document.createElement("div");
            const h1 = document.createElement("h1");
            const paragraph1 = document.createElement("p");
            const paragraph2 = document.createElement("p");
            const paragraph3 = document.createElement("p");
            const link = document.createElement("a");
            const portrait = document.createElement("img");
            // Implementing the data with the objects created inside the HTML
            h1.textContent = member.name;
            paragraph1.textContent = `Gender: ${member.Gender}`;
            paragraph2.textContent = `Address: ${member.address}`;
            paragraph3.textContent = `Phone: ${member.phone}`;
            link.setAttribute("href", member.url);
            link.textContent = 'Visit website';
            portrait.setAttribute("src", member.image);
            portrait.setAttribute("alt", "Member image");
            portrait.setAttribute("width", '300');
            portrait.setAttribute("loading", 'lazy');
            portrait.setAttribute("height", '300');
            // Appending the child elements
            div.appendChild(h1);
            div.appendChild(portrait);
            div.appendChild(paragraph1);
            div.appendChild(paragraph2);
            div.appendChild(paragraph3);
            div.appendChild(link);
            section.appendChild(div);
            div.classList.add("style");
        });
    });
}

getLink();
