
$(document).ready(()=>{
  $('#lookup').click(()=>{
    var word= $('#word').val();
    $.ajax({
      "url": "http://localhost:5577/?word="+word, 
    
      "type": "GET",
      "success": (data)=>{
        window.updateHtml(data);
      }, 
      "error": ()=> console.log('Error ocured from the server')
      });
  })

}
);

$(document).ready(()=>{
  $("#word").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#lookup").click();
    }
  });
})




