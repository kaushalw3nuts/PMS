
// ====== Sidebar: Start ======

$('.sidebar-toggle').on('click', function() {
    $('.sidebar_section').toggleClass('toggled');
    $('body').toggleClass('tool_block scrolldisable');
    if ($('.sidebar_section').hasClass('toggled')) {
        setTimeout(function() {
            $('.sidebar_section').addClass('toggled-full');
        }, 300);
    } else {
        setTimeout(function() {
            $('.sidebar_section').removeClass('toggled-full');
        }, 200);
    }
});

// ====== Sidebar: End ======

// ====== header fixed ======

$(window).on('scroll', function() {
    let sticky = $('.navbar-wrapper');
    let scroll = $(window).scrollTop();

    if (scroll >= 1) {
        sticky.addClass('fixed');
    } else {
        sticky.removeClass('fixed');
    }
});

// ====== header fixed ======

$(document).ready(function() {

    // ====== Notification & Profile: Start ======

    $('.dropdown .custom_user').on('click', function(e) {
        let dropdown = $(this).parent();
        dropdown.toggleClass('dropdown_active');
        $('.head_notify').removeClass('open_dropdown');
		$('body').addClass("notification_scrolldisable");
        e.stopPropagation();
    });

    $(document).on('click', function(e) {
        let target = $(e.target);
        if (!target.hasClass('custom_user_list')) {
            $('.dropdown').removeClass('dropdown_active');
			$('body').removeClass("notification_scrolldisable");
        }
    });

    $('.navbar-inverse .right_part .head_notify .notify_count').on('click', function(e) {
        let headNotify = $(this).parent();
        headNotify.toggleClass('open_dropdown');
        $('.dropdown').removeClass('dropdown_active');
		$('body').addClass("notification_scrolldisable");
        e.stopPropagation();
    });

    $(document).on('click', function(e) {
        let target = $(e.target);
        if (!target.hasClass('notify_dropdon')) {
            $('.head_notify').removeClass('open_dropdown');
			$('body').removeClass("notification_scrolldisable");
        }
    });

    // ====== Notification & Profile: End ======

    // ====== Tool Tip: Start ======

    $('[data-bs-toggle="tooltip"]').each(function() {
        new bootstrap.Tooltip(this);
    });
    
    // ====== Tool Tip: End ======

    // ====== Add Estimated Time: Start ======

    $(".time_box .add_text").click(function(){
        $('.time_box').toggleClass('time_add');
        $(".add_estimated_time_box").slideToggle(500);
    });

    // ====== Add Estimated Time: End ======

    // ====== Offcanvas: Start ======

    $('.table_data .project-title .project_name, .mobile_table_sec .mobile_project_title .project_name, .table_data .action_green_icon, .mobile_table_sec .action_green_icon').click(function(){
        $('.user_project_listing_offcanvas_section').toggleClass('show');
        $('body').toggleClass('show_scrolldisable');
        if ($('.user_project_listing_offcanvas_section').hasClass('show')) {
            $('<div class="offcanvas-backdrop"></div>').appendTo('body');
            $('.offcanvas-backdrop').addClass('fade');
        } else {
            $('.offcanvas-backdrop').remove();
        }
    });
	
    $('.btn-close').click(function(){
        $('.user_project_listing_offcanvas_section').removeClass('show');
        $('.offcanvas-backdrop').remove();
        $('body').removeClass('show_scrolldisable');
    });
  
    $(document).click(function(event) {
        if (!$(event.target).closest('.user_project_listing_offcanvas_section, .table_data .project-title .project_name, .mobile_table_sec .mobile_project_title .project_name, .table_data .action_green_icon, .mobile_table_sec .action_green_icon').length) {
            $('.user_project_listing_offcanvas_section').removeClass('show');
            $('.offcanvas-backdrop').remove();
            $('body').removeClass('show_scrolldisable');
        }
    });

    // ====== Offcanvas: End ======

    // ====== Comment Box: Start ======

    $(".comment-content .replay-link").click(function(){
        $(".replay_sec").slideToggle(500);
    });

    // ====== Comment Box: End ======

    // ====== Leave Modal: Start ======

    $('.leave_report_box .btn_wrap').on('click', function(e) {
        $('.leave_modal_section').addClass('show');
    });
    $('.leave_modal_section .modal-backdrop').on('click', function() {
		$('.leave_modal_section').removeClass("show");
	});

    // ====== Leave Modal: End ======

    // ====== Profie Image: Start ======

    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });

    // ====== Profie Image: End ======

    // ====== Add Project Modal: Start ======

    $('.add_project_box .btn_wrap').on('click', function() {
		$('.add_project_modal').addClass("show");
	});
	$('.add_project_modal .modal-backdrop').on('click', function() {
		$('.add_project_modal').removeClass("show");
	});

    // ====== Add Project Modal: End ======

    // ====== Edit Project Modal: Start ======

    $('.task-listing .edit_delete_block .edit_box').on('click', function() {
		$('.edit_project_modal').addClass("show");
	});
	$('.edit_project_modal .modal-backdrop').on('click', function() {
		$('.edit_project_modal').removeClass("show");
	});

    // ====== Edit Project Modal: End ======

    // ====== Delete Modal: Start ======

    $('.task-listing .edit_delete_block .delete_box').on('click', function() {
		$('.delete_modal').addClass("show");
	});
	$('.delete_modal .modal-backdrop').on('click', function() {
		$('.delete_modal').removeClass("show");
	});
    $('.delete_modal .modal-footer .btn').on('click', function() {
		$('.delete_modal').removeClass("show");
	});

    // ====== Delete Modal: Start ======
});