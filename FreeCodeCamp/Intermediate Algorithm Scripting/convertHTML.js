
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
    //loop to the str
    for(var i=0;i<str.length;i++)
    {
         // if found &,>,<,"",' -> give their HTML entities
        // & -> &amp;
        // < -> &lt;
        // > -> &gt;
        // " -> &quot; 
        // ' -> &apos;
        if(str[i]==='&')
        str= str.replace('&','&amp;')
        else if(str[i]==='<')
        str= str.replace('<','&lt;')
        else if(str[i]==='>')
        str= str.replace('>','&gt;')
        else if(str[i]==='"')
        str= str.replace('"','&quot;')
        else if(str[i]==="'")
        str= str.replace("'",'&apos;')
        else
        null
    }

    return str;
  }
  
  console.log(convertHTML("Schindler's List"));