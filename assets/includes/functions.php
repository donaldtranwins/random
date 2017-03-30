
<?php

$menuItems = [
    'welcome' =>
        [
            'title' => 'welcome',
            'url' => 'pages/welcome.php'
        ],
    'ourMacarons' =>
        [
            'title' => 'our macarons',
            'url' => 'pages/our_macarons.php'
        ],
    'giftsAndParties' =>
        [
            'title' => 'gifts &amp; parties',
            'url' => 'pages/gifts_parties.php'
        ],
    'contact' =>
        [
            'title' => 'contact',
            'url' => 'pages/contact.php'
        ]
];

function makeMenu($menuArray){
    ?>
    <ul>
        <?php
        foreach ($menuArray as $key => $value){?>
            <li>
                <a href="?page=<?= $key ?>">
                    <?= $value['title'] ?>
                </a>
            </li><?php
        }?>
    </ul>
    <?php
}

?>