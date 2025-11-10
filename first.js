    
    let addBtn = document.querySelector(".add-icon-btn");
    let searchbox = document.querySelector("input");
    

    addBtn.addEventListener("click", () => {
        let iconName = prompt("Name of icon:");
        let iconUrl = prompt("Enter URL:");
        if (!iconName || !iconUrl) return; 

        let iconBox = document.createElement("div");
        iconBox.classList = "iconbox";

        iconBox.innerHTML = `
            <button class='icon'>
                <h1><img src="mic.svg" alt="${iconName}"></h1>
            </button>
            <p>${iconName}</p>
        `;


        iconBox.querySelector(".icon").addEventListener("click", () => {
            window.location.href = iconUrl;
        });


        document.querySelector(".toolbox").append(iconBox);
    });
    searchbox.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const query = searchbox.value.trim();
            if (!query) return;
            const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
            window.location.href = searchUrl; 
        }
    });