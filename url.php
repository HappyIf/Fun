<?php
$value = "";
if ( isset ( $_GET["value"] ) ) {
  $value = $_GET["value"];
}
?>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
  <title>Web Protocol Handler Sample - Register</title>
  <script type="text/javascript">
    navigator.registerProtocolHandler("web+burger",
                                  "https://happyif.github.io/Fun/url.html?uri=%s",
                                  "Burger handler");
  </script>
</head>
<body>
  <h1>Web Protocol Handler Sample - Handler</h1>
  <p>This web page is called when handling a <code>web+burger:</code> protocol action. The data sent:</p>
  <textarea>
<?php echo(htmlspecialchars($value, ENT_QUOTES, 'UTF-8')); ?>
  </textarea>
</body>
</html>
