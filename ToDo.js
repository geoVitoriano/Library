
var Task = function (title, date) {
    this.title = title;
    this.date = date;    
}

Task.prototype.getTitle = function() {
	return this.title;
}

Task.prototype.getId = function() {
    return this.date.getTime();
}

var task = new Task('');

function createNewTask() {
	var input = $("#newTask");
	var newTaskTitle = input.val(); 
    if ( newTaskTitle != null && newTaskTitle != "" ) {
        var task = new Task(newTaskTitle, new Date());
        addNewTask(task);
	    input.val('');
        input.focus();
    }
}

$(function(){
	$("#toDo").bind('click', function(){
        var toDoElement = $('#toDo');
        var children = toDoElement.children().children();
        //console.log(" geovani" + children.); 
        //alert("" + children);
        children.map(function(){
        	if ( this.checked ) {
                //alert('TESTE OK');
                var parent = $(this).parent();
                var id = this.id;
                var text = parent[0].innerText;
                var html = "<li class='list-group-item list-group-item-success'><input class='cbToDoItem' id = '" + id +"' type='checkBox' checked/><label>"+text+"</label></li>";
               //var html = parent[0].outerHTML;
                addNewToDoDone(html);
                parent.remove();
            }    
                
        });
        
	});

    $("#toDoDone").bind('click', function () {
       // var toDoDoneElement = $('#toDoDone');
       // var ch = toDoDoneElement.children().children();
        //console.log("geovani " + toDoDoneElement );
        $(":checkBox").map( function() {
            if ( !this.checked ) {
                var pai = $(this).parent();
                var id = this.id;
                var text = pai[0].innerText;
                var html = "<li class='list-group-item list-group-item-info'><input class='cbToDoItem' id = '" + id +"' type='checkBox'/><label>"+text+"</label></li>";
                //console.log( "geovani" + html + "" + text) ;
                addNewToDo(html);
                pai.remove();
            }

        } )
    })
	$("#add").click(function(){
		createNewTask();
    });
});

function addNewToDoDone(html) {
    //alert(html);
    $('#toDoDone').prepend(html); 

}

function addNewToDo(html) {
    $('#toDo').prepend(html);
}

function addNewTask(task){
	var title = task.getTitle();
	var id = task.getId();
    var listItem = "<li class='list-group-item list-group-item-info'><input class='cbToDoItem' id = '" + id +"' type='checkBox'/><label>"+title+"</label></li>";
    $("#toDo").append(listItem);
}