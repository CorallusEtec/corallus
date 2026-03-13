<?php
    function validarCampos($post) {
        foreach($post as $field) {
            if($field == "") {
                header("Location: index.html?empty=true#fale-conosco");
                break;
            }
        }
    }

?>