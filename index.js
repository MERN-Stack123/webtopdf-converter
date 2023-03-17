function generatePDF(){
    let specialElementHandlers = {
        'no-export':function(element,renderer){
            return true
        }
    }

    let doc = new jsPDF()

    let source = document.getElementById('demo').innerHTML

    let margins = {
        top:10,
        bottom:10,
        left:20,
        width: 175,
    }

    doc.fromHTML(
        source,
        margins.left,
        margins.top,
        {
            "width":margins.width,
            "elementHandlers":specialElementHandlers
        },
        function(dispose){
            doc.save("output.pdf")
        },margins
    )
}