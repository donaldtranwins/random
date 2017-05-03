<?php
ob_start();
print("mooo");

?>
    hello this is html
<?php
include('what.html');
$stuff = ob_get_contents();

$data = [
    'success'=>true,
    'movies'=>['shawshank redemption','fast and the furious 23']
];
$data['debug']=$stuff;

ob_end_clean();

print(json_encode($data));

print("<marquee>$stuff</marquee>");

?>