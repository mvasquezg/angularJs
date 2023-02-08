var app=angular.module("studentMvc", []);

app.controller("studentMvcController", function ($scope){
    $scope.arrayStudents=[
        {name:"Juan Blanco", phone:"12345678890", course:"Segundo ESO"},
        {name:"Rosa Luxemburgo", phone:"01234567889", course:"Primer ESO"},
        {name:"Alberto Herrera", phone:"90123456788", course:"Segundo ESO"},
        {name:"Ana Mariño", phone:"89012345678", course:"Primer ESO"},
    ];

});//end studenController