document.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        const btn = document.querySelector("#res");
        btn.click();

    }
});