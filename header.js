document.write('<div id="header-container"></div>');
fetch("shared-header.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById('header-container').innerHTML = html;
    })
    
