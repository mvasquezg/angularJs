var app=angular.module('studentApp', []);
            
app.controller('ControllerStudent', function($scope){
    $scope.arrayStudents=[
        {name: "Miguel Vasquez", phone: "12345", course: "4to Redes"},
        {name: "Ramon Verdejo", phone: "67890", course: "Ing Civil"},
        {name: "Janeth Pech", phone: "23456", course: "Derecho"},
        {name: "Guadalupe Esquivel", phone: "78901", course: "Contabilidad"},
        {name: "Roman Arias", phone: "34567", course: "Diseño Gráfico"}
    ];

    $scope.saveStudent=function(){
        $scope.arrayStudents.push({name:$scope.newStudent.name, phone:$scope.newStudent.phone, course:$scope.newStudent.course});
        $scope.formVisibility=false;
    }

    $scope.formVisibility=false;

    $scope.showForm=function(){
        $scope.formVisibility=true;

    }

});

