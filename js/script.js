$(document).ready(function(){
  var url = window.location.href;
  var the_arr = url.split('/');
  the_arr.pop();
  the_arr = the_arr.join('/')
  $(".navigatethis").on("click", function(e){
    e.preventDefault();
    var slug = $(this).attr("data-navigate");
    window.location = the_arr +"/"+ slug;
  })

  $(".mobile_menu .btn").on("click", function(){
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
    $(".nav_end").toggleClass("d-block")
  })
    $(".project_wrap").on("click", function(){
      var el = $(this);
      var elimg = el.children("img").attr("src");
      $(".img_modal_wrap").children("img").attr("src", elimg);
      $(".img_modal_wrap").removeClass("d-none");
    });

    $(".close_modal").on("click", function(){
      $(".img_modal_wrap").addClass("d-none");
    })

    setTimeout(function () {
      $("#manufacture_slow polyline").css(
        "stroke",
        "#bebebe"
      );
    }, 2000);

    $(".work_wrap").on("click", function(){
      var el = $(this);
      var elimg = el.attr("data-imglink");
      $(".img_modal_wrap").children("img").attr("src", elimg);
      $(".img_modal_wrap").removeClass("d-none");
    });

    $(".close_modal").on("click", function(){
      $(".img_modal_wrap").addClass("d-none");
    })
})
