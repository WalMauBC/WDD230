document.addEventListener("DOMContentLoaded", function() {
    
    var footer = document.querySelector("footer");

    
    var copyrightYearParagraph = footer.querySelector("p:first-child");

    
    var lastModifiedDateParagraph = footer.querySelector("p:nth-child(2)");

    
    var currentYear = new Date().getFullYear();

   
    copyrightYearParagraph.textContent = "Copyright © " + currentYear + " Brigham Young University-Idaho | All rights reserved";

   
    var lastModifiedDate = new Date(document.lastModified);

    
    lastModifiedDateParagraph.textContent = "Last modified: " + lastModifiedDate.toLocaleString();
});
