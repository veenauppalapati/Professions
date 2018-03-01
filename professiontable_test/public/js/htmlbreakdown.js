// This function constructs a post's HTML
function createNewRow(post) {
    //======================================================
    // creating a div and storing it in newPostPanel
    var newPostPanel = $("<div>");
    // adding a class "panel panel-default" to newPostPanel
    newPostPanel.addClass("panel panel-default");
    //======================================================

        // HEADING FOR THE PANEL
        //======================================================
        // creating another div for panel heading  and storing it in newPostPanelHeading
        var newPostPanelHeading = $("<div>");
        // adding a class "panel heading" to newPostPanelHeading
        newPostPanelHeading.addClass("panel-heading");
       
        // DELETE BUTTON
        //======================================================
        // create and storing button in deleteBtn Variable
        var deleteBtn = $("<button>");
        // Adding a text to that button 
        deleteBtn.text("x");
        // adding a class called delete btn btn-danger
        deleteBtn.addClass("delete btn btn-danger");

        // EDIT BUTTON
        //======================================================
        // create and storing button in editBtn Variable
        var editBtn = $("<button>");
        // Adding a text to the button 
        editBtn.text("EDIT");
        // Adding a class called edit btn btn-default
        editBtn.addClass("edit btn btn-default");
        

    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");


    var newPostCategory = $("<h5>");
    newPostCategory.text(post.category);
    newPostCategory.css({
      float: "right",
      "font-weight": "700",
      "margin-top":
      "-15px"
    });

    var newPostPanelBody = $("<div>");
    newPostPanelBody.addClass("panel-body");
    var newPostBody = $("<p>");


    newPostTitle.text(post.title + " ");

    newPostBody.text(post.body);
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    newPostDate.text(formattedDate);


    newPostTitle.append(newPostDate);


    newPostPanelHeading.append(deleteBtn);
    newPostPanelHeading.append(editBtn);
    newPostPanelHeading.append(newPostTitle);
    newPostPanelHeading.append(newPostCategory);


    newPostPanelBody.append(newPostBody);
    newPostPanel.append(newPostPanelHeading);
    newPostPanel.append(newPostPanelBody);
    newPostPanel.data("post", post);
    return newPostPanel;
  }
