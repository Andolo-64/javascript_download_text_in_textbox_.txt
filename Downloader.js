function genBtn() 
  {
        // Get the text from the textarea
        var gettext1 = document.getElementById("name1").value;
        var gettext2 = document.getElementById("name2").value;
        var gettext3 = document.getElementById("name3").value;
        var text = gettext1 + 1 + gettext2 + 2 + gettext3 +3;
        console.log(text)
        // Create a Blob with the text content
        var blob = new Blob([text], { type: 'text/plain'});

        // Create a download link
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = 'Gruper.txt';
        a.style.display = 'none';

        // Add the link to the document and trigger a click event
        document.body.appendChild(a);
        a.click();

        // Clean up
        window.URL.revokeObjectURL(a.href);
        document.body.removeChild(a);
}