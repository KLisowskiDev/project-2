<?php
    include("config.php");
?>
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
    <?php foreach ($metatags as $key => $value): ?>
    <meta name="<?php echo $key;?>" content="<?php echo $value; ?>">
    <?php endforeach; ?>
    <link rel="canonical" href="<?php echo $canonical; ?>">
    <base href="/">
    <link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/images/favicon/site.webmanifest">
    <link rel="mask-icon" href="assets/images/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="preload" href="assets/fonts/all.min.css" as="style">
    <link rel="preload" href="assets/css/style.css" as="style">
    <link rel="preload" href="assets/js/page.js" as="script">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="preload" as="font" href="assets/webfonts/fa-regular-400.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="assets/webfonts/fa-brands-400.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="assets/webfonts/fa-solid-900.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/fonts/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<?php
?>
