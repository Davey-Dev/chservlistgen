function resizeTextarea (id) {
    var a = document.getElementById(id);
    a.style.height = 'auto';
    a.style.height = a.scrollHeight+'px';
  }
  
  function init() {
    var a = document.getElementsByTagName('textarea');
    for(var i=0,inb=a.length;i<inb;i++) {
       if(a[i].getAttribute('data-resizable')=='true')
        resizeTextarea(a[i].id);
    }
  }
  
 addEventListener('DOMContentLoaded', init);

function generateText() {
    var address = document.getElementById("address").value;
    console.log(address);
    var port = parseInt(document.getElementById("port").value);
    var count = parseInt(document.getElementById("count").value);
    var final = "";
    for(var i = 0; i < count; i++) {
        final = final + "server" + (port+i) + " = " + address + ":" + (port+i) + "\n";
       
    }
    document.getElementById('final').value= final;
    resizeTextarea('final');
}

function copyText() {
    var copyText = document.getElementById('final');

  /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value).then(function() {
        alert("Copied to Clipboard");
    }, function(err) {
        alert("Could not copy text");
    }); 

  /* Alert the copied text */
    //alert("Copied to clipboard");
}