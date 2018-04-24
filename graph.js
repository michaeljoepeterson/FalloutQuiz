//this file deals with creating the graph at the end of the quiz
//this function sets the number on the side of the graph
function setGraphNums(arr){
   $(".letter").each(function(index){
    let originalText = $(this).text();
    $(this).text(originalText + arr[index]);
  });
}
//this function sets the widths of the nars
function setWidths(arr){
    $(".bar").each(function(index){
    if(arr[index] === 0){
      $(this).width(1);
    }
    else{
      let tempWidth = arr[index] * 10;
      $(this).width(tempWidth + "%");
    }
    
  });
}
//this function resets the graph
//it is only necessary because I need to constantly reset/recreate the graph as the screen is resized so that it will change with screen size
function graphReset(){
    $(".letter").each(function(index){
      let originalArray = $(this).text().split("");
      if (originalArray.length === 3){
        originalArray.splice(2,1);
        let newText = originalArray.join("");
        //console.log(originalArray);
        //console.log(newText);
        $(this).text(newText);
    }
      else if (originalArray.length === 4){
        originalArray.splice(2,2);
        let newText = originalArray.join("");
        //console.log(originalArray);
        //console.log(newText);
        $(this).text(newText);
      }
  });
}
//this function sets up the graph
function handleGraph(){
  let results = specialArrayCopy;
  const barData = $(".bar");
  const barNums = $(".graphValue");
  //console.log(($(".bar"))[1].attr("data-item-index"));
  //console.log(barData[0].attr("data-item-index"));
  //console.log(barNums);
  setGraphNums(results);
  setWidths(results);
  
}
//this function creates/emptys graph values on screen resize
$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.height() <= 820) { 
        graphReset();
        handleGraph();
        
      }
      else if (win.height() >= 820){
        graphReset();
        handleGraph();
      }
});
//have to do this so that it will call once it loads
$(handleGraph);