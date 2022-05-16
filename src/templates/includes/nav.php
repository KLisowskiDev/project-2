<nav class="navbar navbar-expand-md" data-fixed-element="">
    <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link <?php getActiveLink($request, "/"); ?>" aria-current="page" href="/">Strona główna</a>
            </li>
            <li class="nav-item">
                <a class="nav-link <?php getActiveLink($request, "/o-nas"); ?>" href="o-nas">O nas</a>
            </li>
            <li class="nav-item dropdown__toggle">
                <a class="nav-link <?php getActiveLink($request, "/oferta"); ?>" href="oferta">
                    Oferta
                </a>
                <!-- icona do zwijanej listy rwd <i class="fas fa-arrow-circle-down dropdown__toggle--icon d-lg-none d-inline"></i> -->
                <ul class="dropdown__list" aria-labelledby="navbarDropdown">
                    <li>
                        <a href="oferta/trening-personalny">Trening personalny</a>
                    </li>
                    <li>
                        <a href="oferta/trening-grupowy">Trening grupowy</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link  <?php getActiveLink($request, "/galeria"); ?>" href="galeria">Galeria</a>
            </li>
            <li class="nav-item">
                <a class="nav-link <?php getActiveLink($request, "/kontakt"); ?>" href="kontakt">Kontakt</a>
            </li>
        </ul>
    </div>
    <button class="navbar-toggler d-inline d-md-none" type="button" data-bs-toggle="navbarNav" data-bs-target="#navbarNav">     
        <!-- start classic hamburger -->  
        <i class="fas fa-bars navbar-toggler--icon"></i>
        <!-- end classic hamburger --> 
        <!-- start animated hamburger -->
        <!-- <span></span> -->
        <!-- end animated hamburger -->
    </button>
</nav>
