<script type="text/javascript" src="http://code.jquery.com/jquery-3.3.1.js"> </script>
<script>
    
    $(document).ready(function() {
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 100) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
});
});

</script>





























