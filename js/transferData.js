var ep=new ExcelPlus();
// we call openLocal() and when the file is loaded then we want to display its content
// openLocal() will use the FileAPI if exists, otherwise it will use a Flash object
ep.openLocal({
  "flashPath":"/js/excelplus/2.4/swfobject/",
  "labelButton":"Open an Excel file"
},function() {
  // show the content of the first sheet
  console.table(ep.selectSheet(1).readAll())
})
