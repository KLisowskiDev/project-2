<header class="header">
    <div class="container">
        <div class="row header__row">
            <div class="col-auto">
                <div class="header__logo-container">
                    <a href="/">
                        <img src="assets/images/logo.png" alt="Logo" class="header__logo">
                    </a>
                </div>
            </div>
            <div class="col-auto">
                <?php include("nav.php"); ?>
            </div>
        </div>
    </div>
</header>

<?php 
    if($request === '/') {
        include("slider.php");
    } else {
        include("subheader.php");
    }

?>

