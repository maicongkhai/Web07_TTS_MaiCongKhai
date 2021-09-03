/**
 * Ẩn hiện sidebar
 * Author:MCKhai(27/08/2021)
 */
$('#btn_hide_sidebar').on('click', function() {
    var left_sidebar = $('.sidebar-left').css('left');
    if (left_sidebar == '0px') {
        $('.sidebar-left').css('left', '-180px');
        $('.header').css('margin-left', '0px');
        $('.content').css('margin-left', '0px');
    } else {
        $('.sidebar-left').css('left', '0px');
        $('.header ').css('margin-left', '180px');
        $('.content').css('margin-left', '180px');
    }
});

/**
 * Thực hiện chức năng cho button sửa trong bảng
 * Author: MCKhai (Ngày 2/9/2021)
 */
$('#btn-repair').click(btnAddOnClick);

// $('#btn-repair').click(function() {
//     $('#id-dialog').show();
// })

//ẩn hiện btn chức năng
$('#btn-dropdown').click(function() {
    $('#drop').show();
})




/*
 *   Xóa 1 dòng trong bảng
 */
$(document).ready(function() {
    $('#delete').on('click', function() {
        //Hiển thị dialog thông báo có muốn xóa nhân viên không
        $('#delete-tr').show();
        //click button có thì xóa dòng được chọn
        $('#yes-tr').on('click', function() {
            $('#delete').closest('tr').remove();
            $('#delete-tr').hide();
        })
        $('#no-tr').on('click', function() {
            $('#delete-tr').hide();
            $('#drop').hide();
        })

    });
})



//Khởi tạo  sự kiện cho các button chức năng
//1.Thêm mới nhân viên
$('#btnAddOnClick').click(btnAddOnClick);

function btnAddOnClick() {
    $('#id-dialog').show();

    $('#EmployeeCode').focus();


    //reset Form
    $('#id-dialog input').val(null);
}

// Bấm chọn nút X ở góc của dialog

$('#btnDeleteOnClick').click(function() {
        $('#question').toggle();
        $('#id-dialog').hide();
        $('#delete-question').on('click', function() {
            $('#question').hide();
            $('#id-dialog').show();
        })
        $('#no-question').on('click', function() {
            $('#question').hide();
            $('#id-dialog').hide();
        })
        $('#yes-question').on('click', function() {
            $('#question').hide();
            alert('Dữ liệu đã được cất thành công');
            $('#id-dialog').hide();

        })
    })
    //2.Hủy diaglog
$('#btn-delete-dialog').click(function() {
    $('#id-dialog').hide();
})

//3.Validate các trường bắt buộc nhập
$('input[required]').blur(function() {
        //Kiểm tra thông tin có nhập hay không:
        let value = $(this).val();
        if (value == '') {
            //Thay đổi boder của input sang trạng thái lỗi
            $(this).css('border', '1px solid red');
            $(this).attr('title', 'Thông tin này bắt buộc nhập');
        } else {
            $(this).css('border', '1px solid #bbbbbb');
            $(this).removeAttr('title');
        }

    })
    // 4.lấy mã nhân viên mới và thực hiện binding vào input mã nhân viên
$.ajax({
    url: 'https://192.168.0.100:44311/api/Employees',
    method: 'GET'
}).done(res => {
    $('#EmployeeCode').val(res);
    $('#EmployeeCode').focus();
})

/**
 * set sự kiện click  nút button hiện thị dropdown số trang
 */

$('#btn-page').on('click', function() {

    $('.dropdown-bottom').toggle();

})


// if (showOrHide == true) {
//     $('.dropdown-bottom').show();
// } else if (showOrHide == false) {
//     $('.dropdown-bottom').hide();
// }