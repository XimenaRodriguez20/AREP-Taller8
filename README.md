# AREP-Taller8

Para este taller vamos hacer uso de Amazon Web Service para los microservicios de: Usuario, Stream, Post, donde se va hacer uso de funciones lambda para estos. Se va a manejar un servicio de S3 para el alojamiento de la pagina web, por otro lado, para alojar los datos de Stream y Posts se creo respectivamente una base de datos para cada uno, con ayuda de DynamoDB, además para la autenticación se hizo uso del servcio Cognito y por ultimo se conecto la pagina web con una Api Gateway para comunicar las respectivas peticiones http a los diferentes servicios lambda.  

### Arquitectura 

La arquitectura planteada y manejada para este proyecto fue la siguiente: 

![Diagrama en blanco](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812926/cd5fe303-1906-41d7-abc4-f6c0c85affd9)

### Diseño

Posts: Son las publicaciones que los usuarios pueden hacer y a las cuales los demás usuarios pueden comentar una vez se haya hecho la publicación, estas solamente cuentan, con el autor y el mensaje.

Stream: Son los comentarios que cada uno de los usuarios realizan sobre la publicación de otro usuario, estos comentarios contienen el autor, mensaje y el post al que está relacionado ese comentario.

### Pruebas

Las pruebas se van a realizar por medio del API Gateway, el cual va a activar la función lambda respectiva para hacer la función pedida, es decir, si se envía una petición get, se van a obtener todos los objetos relacionados, si se envía una función post, se va a crear un nuevo objeto.

#### Post

Como se puede evidenciar, se creo un nuevo post:

![image](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812926/8bf65e19-c231-41fa-8029-94acb77d382f)

Ahora se piden todos los post que se han creado hasta el momento:

![image](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812926/c2c2df30-2ead-4abf-a01a-031dd3993c7a)

#### Streams

Como se puede evidenciar, se creo un nuevo comentario:

![image](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812969/0e1bce1a-dca7-45bb-88d4-cfaefc04f222)

Ahora se piden todos los comentarios:

![image](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812969/446bfd50-82bc-4d01-a5a0-62f9d31ca9e2)

## Video

* [Funcionamiento](https://youtu.be/XrMbX1HyBYA)

## Autor

* **Ximena Rodriguez**
* **Jordy Bautista**
* **Santiago Naranjo** 
