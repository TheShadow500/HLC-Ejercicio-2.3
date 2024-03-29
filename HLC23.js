        // Creamos el array bidimensional con los principales datos de base (Tipo de Zapato, Color) e inicializamos la cantidad y las unidades vendidas a 0
        let zapateria = [
            ['Deportivos', 'Blanco', 0, 0],
            ['Deportivos', 'Negro', 0, 0],
            ['Deportivos', 'Marron', 0, 0],
            ['Sandalias', 'Blanco', 0, 0],
            ['Sandalias', 'Negro', 0, 0],
            ['Sandalias', 'Marron', 0, 0],
            ['Botas', 'Blanco', 0, 0],
            ['Botas', 'Negro', 0, 0],
            ['Botas', 'Marron', 0, 0],
            ['Nauticos', 'Blanco', 0, 0],
            ['Nauticos', 'Negro', 0, 0],
            ['Nauticos', 'Marron', 0, 0]
        ];

        // Modificamos el array de manera aleatoria con la cantidad de zapatos de cada tipo en un rango de 0 a 50
        for(let i = 0; i < zapateria.length; i++){
            zapateria[i][2] = Math.floor(Math.random() * (50 + 1));
        }

        // Mostramos por pantalla la lista inicial
        document.write("<div class='container'>");
        document.write("<b>Información</b><br><br>");
        for(let i = 0; i < zapateria.length; i++){
            document.write("<b>Tipo:</b> " + zapateria[i][0] + "<br><b>Color:</b> " + zapateria[i][1] + "<br><b>Cantidad:</b> " + zapateria[i][2] + " <span class='flecha'>←</span><br><b>Vendidos:</b> " + zapateria[i][3] + "<br><br>");
        }
        document.write("</div>");

        // Realizamos de manera aleatoria las ventas realizadas de cada zapato respetando el maximo disponible de unidades
        for(let i = 0; i < zapateria.length; i++){
            zapateria[i][3] = Math.floor(Math.random() * (zapateria[i][2] + 1));
        }

        // Mostramos por pantalla la lista nueva con las ventas realizadas para cada modelo
        document.write("<div class='container'>");
        document.write("<b>Ventas</b><br><br>");
        for(let i = 0; i < zapateria.length; i++){
            document.write("<b>Tipo:</b> " + zapateria[i][0] + "<br><b>Color:</b> " + zapateria[i][1] + "<br><b>Cantidad:</b> " + zapateria[i][2] + " (" + (zapateria[i][2] - zapateria[i][3]) + " rest.)<br><b>Vendidos:</b> " + zapateria[i][3] + " <span class='flecha'>←</span><br><br>");
        }
        document.write("</div>");

        // Por ultimo mostramos los datos finales solicitados por la actividad
        let sumas = [0, 0, 0, 0, 0, 0, 0, 0];   // Deportivos, Sandalias, Botas, Nauticos, Blanco, Negro, Marron, Total
        
        document.write("<div class='container'>");
        document.write("<b>Datos</b><br>");

        for(let i = 0; i < zapateria.length; i++){
            if(zapateria[i][0] == "Deportivos"){
                sumas[0] += zapateria[i][3];
            }
            else if(zapateria[i][0] == "Sandalias"){
                sumas[1] += zapateria[i][3];
            }
            else if(zapateria[i][0] == "Botas"){
                sumas[2] += zapateria[i][3];
            }
            else{
                sumas[3] += zapateria[i][3];
            }

            if(zapateria[i][1] == "Blanco"){
                sumas[4] += zapateria[i][3];
            }
            else if(zapateria[i][1] == "Negro"){
                sumas[5] += zapateria[i][3];
            }
            else{
                sumas[6] += zapateria[i][3];
            }

            sumas[7] += zapateria[i][3];
        }
        document.write("<br><b>Ventas por Tipo<br>Deportivos:</b> " + sumas[0] + "<br><b>Sandalias:</b> " + sumas[1] + "<br><b>Botas:</b> " + sumas[2] + "<br><b>Nauticos:</b> " + sumas[3] + "<br>");
        document.write("<br><b>Ventas por Colores<br>Blanco:</b> " + sumas[4] + "<br><b>Negro:</b> " + sumas[5] + "<br><b>Marron:</b> " + sumas[6] + "<br>");
        document.write("<br><b>Total de Ventas:</b> " + sumas[7]);
        document.write("</div>");