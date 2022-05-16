<?php  
    include("includes/head.php");
?>

<body class="page">

<?php 
    include("includes/body-open.php");

    switch($request) {
        case '/':
            include("includes/header.php");
            include("views/home.php");
        break;
        case '/o-nas':
            include("includes/header.php");

            include("views/o-nas.php");
        break;
        case '/oferta':
            include("includes/header.php");

            include("views/oferta.php");
        break;
        case '/oferta/trening-personalny':
            include("includes/header.php");

            include("views/oferta/trening-personalny.php");
        break;
        case '/oferta/trening-grupowy':
            include("includes/header.php");

            include("views/oferta/trening-grupowy.php");
        break;
        case '/galeria':
            include("includes/header.php");

            include("views/galeria.php");
        break;
        case '/kontakt':
            include("includes/header.php");

            include("views/kontakt.php");
        break;
        default:
        include("includes/header.php");

            include("views/404.php");
        break;
    }

    include("includes/footer.php");
    include("includes/body-close.php");
?>

</body>
</html>
 

<?php

?>