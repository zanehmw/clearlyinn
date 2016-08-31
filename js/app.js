
david@clearlyinnovative.com
anita@clearlyinnovative.com

"use strict";

(function(){
  angular
  .module("myApp", [])

  .controller("someController", someControllerFunction)

  function someControllerFunction(){
    var vm = this;
    vm.options = ["Option1", "Option2", "Option3"];


    vm.formIsVisible = false;

    vm.toggleForm = function(){
      if(vm.formIsVisible){
        vm.formIsVisible = false;
      }
      else{
        vm.formIsVisible = true;
      }
    };

    vm.myFunction = function(){
      document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick = function(event) {
      // console.log(event)
      if (!event.target.matches('.dropbtn')) {


        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          // I am trying to get the value of an option once it is clicked on. It is logging as undefined. 
          console.log(openDropdown.value);
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }


    this.update = function(){
      console.log("working")
    }
    this.cancel = function(){
      console.log("cancel")
    }


  }
})();
