angular.module('directives', [])

.directive('hive', function( $document, $window, $rootScope, Data){
  var width = $window.innerWidth 
  var height = $window.innerHeight 
  var data = Data
// var margin = {
//     top: 80,
//     right: 20,
//     bottom: 50,
//     left: 80
// },
// width = $(window).width() - margin.left - margin.right,
// height = $(window).height() - 28 - margin.top - margin.bottom;

// var points = [];
// for (var i = 0; i < 8; i++) {
//     for (var j = 0; j < 12; j++) {
//         points.push([Math.floor(width * j / 12), Math.floor(height * i / 8)]);
//     }
// }

// var hexbin = d3.hexbin()
//     .size([width, height])
//     .radius((width / 12) / 2);

// var svg = d3.select($("#grid").get(0)).append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// svg.append("g")
//     .selectAll(".hexagon")
//     .data(hexbin(points))
//     .enter().append("path")
//     .attr("class", "hexagon")
//     .attr("d", function (d) {
//     return hexbin.hexagon();
// })
//     .attr("transform", function (d) {
//     return "translate(" + d.x + "," + d.y + ")";
// })
//     .attr("stroke", "#fff")
//     .attr("stroke-width", "2px")
//     .style("fill", function (d) {
//     return "#dcdcdc"; //color(d.length); 
// });

  return {
    restrict : "E",
    scope:{
      val: "=",
      update: "="    
    },
    controller: function( $scope, $element ){
      //console.log("engine started bitch " )
    },
    link: function( scope, element, attrs ){
      var hexagonGrid = new HexagonGrid("HexCanvas", 60);
      hexagonGrid.drawHexGrid( 3, data.settings.categories.length, 6, 6, true);
      
    }
  }
}) 
