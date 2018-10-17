$(document).ready(function() {
    $("#trigger").click(function(){
      var ects = $('#ects').val();
      var rowCount = 0;
      //when input is correct
      if($.isNumeric(ects))
      {
        $('#trigger').prop('disabled', true);
        $("#ECTs").html(ects + "  ECTs");
        $("#abbrevs").html("CA = Continuous Assessment");
        $("#header1").html("Module Name");
        $("#header2").html("CA Worth");
        $("#header3").html("CA Marks");
        $("#header4").html("Exam Marks");
        $("input[name='text']").prop("type","text");
        $("input[name='btn']").prop("type","button");
        $("input[name='btn2']").prop("type","button");
        rowCount = addModules(rowCount);
      }

      //error handling
      else {
        alert("You must enter a number!")
        $("#ects").val("Enter ECTs");
        $("#ects").focus(function(e) {
          $("#ects").val("");
        });
      }

      // butt
      $("#btn").click(function(){
        rowCount = addModules(rowCount);
      });

      $("#btn2").click(function(){
        alert("Done!");
      });
    });
});


//create dropdown for Continuous Assessment grades
function createCADropdown(){
    var result = "<td><select id = 'menu'>";
    for(j=0; j<=60; j+=5)
    {
      var x = "<option value ='" + j + "'>" + j +"</option>";
      result += x;
    }
    result += "</select></td>";
    return result;
}

//add more modules to the site
function addModules(rowCount) {
var cells = "";
rowCount += 1;
  var ids = ["modules", "ca", "exam"];
  for (i=0; i< 3; i++){
    //$("#table").append($('<td> <input type = "text" name="name" id="' +ids[i]+ '"></td>'));
    var res = '<td> <input type = "text" name="name" id="' +ids[i]+ '"></td>';
    cells += res;
    if(i==0)
    {
      result = createCADropdown();
      cells += result;
    }
  }
  $("#table").append($('<tr id = "'+  rowCount + '">' + cells + '</tr>'));
  return rowCount;
}
