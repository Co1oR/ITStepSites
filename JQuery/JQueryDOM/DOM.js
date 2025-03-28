$("document").ready(function() {
    loadList();

    $("#addBtn").click(function() {
        let inputValue = $("#textInput").val();
        if (inputValue === "") {
            alert("Please enter a valid text");
            return;
        }

        let newItem = `
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    ${inputValue}<button type="button" class="btn btn-success">Success</button>
                </div>
            </li>
        `;

        let currentList = $("#ToDoList").html();
        $("#ToDoList").html(currentList + newItem);
        saveList();

        $("#textInput").val("");
    });

    $("#deleteBtn").click(function() {
        $("#ToDoList").html("");
        localStorage.removeItem("todoList");
    });

    $(document).on("click", ".btn-success", function() {
        if (!$(this).closest("button").is("#addBtn, #deleteBtn")) {
            $(this).closest("li").addClass("bg-success");
            $(this).removeClass("btn-success").addClass("btn-secondary").text("Done").attr("disabled", true);
            saveList();
        }
    });

    $("#ToDoList").on("mouseenter", ".list-group-item", function() {
        if ($(this).hasClass("bg-success")) {
            $(this).removeClass("bg-success").css("background-color", "lightgreen").addClass("completed");
        } else {
            $(this).css("background-color", "lightgray");
        }
    });

    $("#ToDoList").on("mouseleave", ".list-group-item", function() {
        if ($(this).hasClass("completed")) {
            $(this).addClass("bg-success");
        }
        $(this).css("background-color", "");
    });

    function saveList() {
        let listHTML = $("#ToDoList").html();
        localStorage.setItem("todoList", listHTML);
    }

    function loadList() {
        let savedList = localStorage.getItem("todoList");
        if (savedList) {
            $("#ToDoList").html(savedList);
        }
    }
});
