<?php
    function validarCampos($post) {
        foreach($post as $field) {
            if($field == "") {
                header("Location: index.html");
                break;
            }
        }
    }

?>