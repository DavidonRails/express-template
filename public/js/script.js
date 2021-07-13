$(document).ready(function(){

    lightGallery(document.getElementById('animated-thumbnails'), {
        thumbnail:false,
        animateThumb: false,
        showThumbByDefault: false
    });

    $('.project-slide').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1,
        // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        // nextArrow: '<button type="button" class="slick-prev">Previous</button>',
        
    });
    $('.thumbnail-slide').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 8,
        slidesToScroll: 1,
        // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        // nextArrow: '<button type="button" class="slick-prev">Previous</button>',
        
    });
});

var jobList = [];
var valJobAppForm = null;


$('.filter-links button').click(function(){
    posts = $('.client-logo-card');
    var customType = $( this ).data('filter');

    $('.filter-links button').removeClass('btn-outline-primary');
    $('.filter-links button').addClass('btn-outline-secondary');
    
    $(this).removeClass('btn-outline-secondary');
    $(this).addClass('btn-outline-primary');
    
    posts.hide()
        .filter(function () { 
            return customType == '' || $(this).data('category') === customType;
        })
        .show();
});


$(window).on('load', function () {
    var $container = $('.portfolioContainer');
    $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });

  $('.portfolioFilter a').click(function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
       });
       return false;
  }); 


});


searchJobs = function() {
    var search = $("#search_key").val();
    var location = $("#job_location").val();
    var department = $("#job_department").val();

    var url = 'https://api.manatal.com/open/v3/career-page/exquisite/jobs/?';

    if(search != "") {
        url += "search=" + search + "&";
    }

    if(location != "" && location != "All") {
        var address = location.split(",");
        var city = address[0];
        var state = address[1];
        var country = address[2];

        url += "city__icontains=" + city + "&country__icontains=" + country + "&";
    }

    if(department != "" && department != "All") {
        url += "organization__in=" + department;
    }

    $.ajax({
        url: url,
        type: 'GET',
        success: function(data){
            console.log("=== Search Result ==== : ", data);
            var widget = '';
            jobList = data.results;
            jobList.forEach((e, index) => {
                /*
                widget += `<div class="jobBox col-md-4">
                                <div style="background-color:#eceff8;" class="card border px-3">
                                    <div style="background-color:#eceff8; border-bottom: 1px solid #579dec;" class="card-header px-0"> 
                                        <div class="row px-3">
                                            <div style="font-weight:bold;  overflow: hidden;" class="col-md-8 px-0 text-nowrap">
                                                ${e.organization_name}
                                            </div>
                                            <div style="text-align: right;" class="col-md-4 px-0"> 
                                                <span>
                                                    ${e.contract_details}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div class="row px-3 mt-2">
                                            <div style="font-size:12px; overflow: hidden;" class="col-md-8 px-0 text-nowrap">
                                                ${e.position_name}
                                            </div>
                                            <div style="font-size:12px; text-align: right;" class="col-md-4 px-0">
                                                $63000 - $85000
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div style="height:230px; overflow: hidden; margin-bottom: 15px;" class="card-body px-0">
                                        ${e.description == '' ? "<p>There is no job description</p>" : e.description}
                                    </div>
                                    
                                    <div style="background-color:#eceff8; border-top: 1px solid #579dec;" class="card-footer px-0">
                                        <button type="button" style="background-color:#579dec; font-size:smaller; color:white;" onclick="showJobApplicationForm(${index}, ${e.id})" class="btn pull-right">APPLY</button>
                                        <button type="button" style="background-color:#eb8457; font-size:smaller; color:white;" class="btn pull-right mr-3">LEARN MORE</button>
                                    </div>
                                </div>
                            </div>`
                */
               widget += `<div class="card border">
                            <div id="heading_${index}" data-toggle="collapse" data-target="#collapse_${index}" aria-expanded="true" aria-controls="collapse_${index}" class="card-header">
                                <div class="row px-3">
                                    <div class="col-md-8 px-0 text-nowrap">
                                        <div style="font-weight:bold;  overflow: hidden; color:#007bff;">
                                            ${e.position_name}
                                            ${e.is_remote ? '<span style="background-color:#006400; color:white; padding:3px 8px; font-size:10px; margin-left:10px;">REMOTE</span>' : ''}
                                        </div>
                                        <div style="font-size:12px;  overflow: hidden;">${e.organization_name}</div>
                                    </div>
                                    
                                    <div style="text-align: right;" class="col-md-3 px-0"> 
                                        <div style="font-size:12px;  overflow: hidden; height:20px;">${e.city ? e.city + ', ' + e.state : ''}</div>
                                        <div style="font-size:12px;  overflow: hidden;">${e.is_salary_visible ? '$' + e.salary_min + ' - $' + e.salary_max : ''}</div>
                                    </div>
                        
                                    <div style="text-align: right;" class="col-md-1 px-0"> 
                                        <button onclick="showJobApplicationForm(${index}, ${e.id})" style="float:right; border-radius:0px;" class="btn btn-primary">APPLY</button>
                                    </div>
                                </div>
                            </div>
                            <div id="collapse_${index}" aria-labelledby="heading_${index}" data-parent="#accordion" class="collapse" style="">
                                <div class="card-body px-5">
                                    ${e.description == '' ? "<p>There is no job description</p>" : e.description}
                                </div>
                                <hr class="solid">
                                <div class="row-fluid"> 
                                    <button onclick="showJobApplicationForm(${index}, ${e.id})" style="float:right; margin-bottom: 15px; border-radius:0px;" class="btn btn-primary mr-3">APPLY</button>
                                </div>
                            </div>
                        </div>`;
            });

            if(data.count == 0) {
                $("#formJobList .jobBoxList").html("<p>There is no search result.</p>");
            } else {
                $("#formJobList .jobBoxList").html(widget);
            }
            
        },
        error: function(data) {
            alert('API Error!'); //or whatever
        }
    });
    
}

$('#job_application_dlg').on('hidden.bs.modal', function () {
    
    // $("#job_application_dlg").validate().resetForm();
})

showJobApplicationForm = function(index, jobId) {

    $("#job_application_dlg .alert").hide();
    
    if(jobList.length == 0) jobList = allJobs;
    console.log("Job Detail : ", jobList[index].id);

    $("#job_application_dlg #jobTitle").html("Welcome! Please submit your application for " + jobList[index].position_name + " Job");

    $("#job_application_dlg #jobId").val(jobList[index].id);

    $(".job_application_form .fullname").val("");
    $(".job_application_form .email").val("");
    $(".job_application_form .resume").val("");
    $(".job_application_form .phone-number").val("");
    // $(".job_application_form .linkedin").val("");
    // $(".job_application_form .message").val("");

    valJobAppForm = $(".job_application_form").validate({
        rules: {
          fullname: {
            required: true,
          },
          email: {
            required: true,
            email: true
          },
          resume: {
            required: true,
          },
          phone_number: {
            required: true,
          }
        },
        messages: {
            fullname: {
                required: "Please input your full name",
            },
            email: {
                required: "Please input your email address",
                email: "Your email address must be in the format of name@domain.com"
            },
            resume: {
                required: "Please input your resume file",
            },
            phone_number: {
                required: "Please input your phone number",
            }
        },
        // errorLabelContainer: '.error',
        errorPlacement: function(error, element) {
            error.appendTo( element.next(".error_label") );
        }
    
    }).resetForm();

    $(".job_application_form").find('.error').removeClass('error');

    $('#job_application_dlg').modal('show')
}

alertify.defaults.glossary.title = 'EXQUISITE';

alertify.YoutubeDialog || alertify.dialog('YoutubeDialog',function(){
    var iframe;
    return {
        // dialog constructor function, this will be called when the user calls alertify.YoutubeDialog(videoId)
        main:function(videoId){
            //set the videoId setting and return current instance for chaining.
            return this.set({ 
                'videoId': videoId
            });
        },
        // we only want to override two options (padding and overflow).
        setup:function(){
            return {
                options:{
                    //disable both padding and overflow control.
                    padding : !1,
                    overflow: !1,
                }
            };
        },
        // This will be called once the DOM is ready and will never be invoked again.
        // Here we create the iframe to embed the video.
        build:function(){           
            // create the iframe element
            iframe = document.createElement('iframe');
            iframe.frameBorder = "no";
            iframe.width = "100%";
            iframe.height = "100%";
            // add it to the dialog
            this.elements.content.appendChild(iframe);

            //give the dialog initial height (half the screen height).
            this.elements.body.style.minHeight = screen.height * .5 + 'px';
        },
        // dialog custom settings
        settings:{
            videoId:undefined
        },
        // listen and respond to changes in dialog settings.
        settingUpdated:function(key, oldValue, newValue){
            switch(key){
               case 'videoId':
                    // iframe.src = "https://www.youtube.com/embed/" + newValue + "?enablejsapi=1";
                    iframe.src = "https://player.vimeo.com/video/553814563?autoplay=1&autopause=0";
                    
                break;   
            }
        },
        // listen to internal dialog events.
        hooks:{
            // triggered when the dialog is closed, this is seperate from user defined onclose
            onclose: function(){
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
            },
            // triggered when a dialog option gets update.
            // warning! this will not be triggered for settings updates.
            onupdate: function(option,oldValue, newValue){
                switch(option){
                    case 'resizable':
                        if(newValue){
                            this.elements.content.removeAttribute('style');
                            iframe && iframe.removeAttribute('style');
                        }else{
                            this.elements.content.style.minHeight = 'inherit';
                            iframe && (iframe.style.minHeight = 'inherit');
                        }
                    break;    
                }    
            }
        }
    };
});

sendJobApplicationSuccessEmail = function(user) {
    
    $.ajax({
        type: "POST",
        url: '/application-success',
        dataType: 'json',
        data: user,
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log("Error : ", data);            
        }
    });
}

sendApplication = function() {

    valid = $(".job_application_form").valid();

    if(valid) {

        var form = $('.job_application_form').serializeArray();
         
        form = JSON.stringify( form );

        console.log("serialzie form : ", form);

        var fd = new FormData();    
        
        fd.append('full_name', $(".job_application_form .fullname").val());
        
        fd.append('email', $(".job_application_form .email").val());

        fd.append('resume',  $(".job_application_form .resume")[0].files[0] );

        fd.append('phone_number', $(".job_application_form .phone-number").val());
        
        // if($(".job_application_form .linkedin").val() != '') {
        //     fd.append('linkedin', 'https://www.linkedin.com/in/' + $(".job_application_form .linkedin").val());
        // }
        
        // if($(".job_application_form .message").val() != '') {
        //     fd.append('message', $(".job_application_form .message").val());
        // }

        var jobId = $("#job_application_dlg #jobId").val();

        var url = `https://api.manatal.com/open/v3/career-page/exquisite/jobs/${jobId}/apply/`;
        
        $("#job_application_dlg #sendApplication").html('<i class="fa fa-spinner fa-spin"></i>');
        $("#job_application_dlg #sendApplication").attr('disabled', 'disabled'); 
        
        
        $.ajax({
            type: "POST",
            url: url,
            cache: false,
            contentType: false,
            processData: false,
            data: fd,
            success: function(data) {
                $("#job_application_dlg #sendApplication").html('Apply');
                $("#job_application_dlg #sendApplication").removeAttr('disabled'); 
                
                var params = {
                    "full_name" : $(".job_application_form .fullname").val(),
                    "email" : $(".job_application_form .email").val(),
                };
                sendJobApplicationSuccessEmail(params);

                setTimeout(function(){ 
                    $('#job_application_dlg').modal('hide'); 
                    alertify.YoutubeDialog('vimeo').set({frameless:false});
                }, 1000);
            },
            error: function(data) {
                console.log("Error : ", data);
                
                $("#job_application_dlg #sendApplication").html('Apply');
                $("#job_application_dlg #sendApplication").removeAttr('disabled'); 

                alertify.alert('Warning', 'Sorry! Your job application is failed.');
            }
        });
        
    }
}
