# AREP-Taller8

Para este taller vamos hacer uso de Amazon Web Service para los microservicios de Usuario, Stream, Post, donde se va hacer uso de funciones lambda para estos, se va a manejar S3 para el alojamiento de la pagina web, por otro lado, para alojar los datos de Stream y Posts se creo respectivamente una bases de datos para cada una esto con ayuda de DynamoDB, además para la autenticación se hizo uso del servcio Cognito y por ultimo se conecto la pagina web con una Api Gateway para comunicar las respectivas peticiones http a los diferentes servicios lambda.  

### Arquitectura 

La arquitectura planteada y manejada para este proyecto fue la siguiente: 

![Diagrama en blanco](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812926/cd5fe303-1906-41d7-abc4-f6c0c85affd9)

### Diseño

Posts: 

Stream: 

### Pruebas

#### Post

Para cada uno de Posts o de los Streams se manejo una base de datos hacemos peticiones get y post y podemos observar que esto esta funcionando:

![image](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812926/8bf65e19-c231-41fa-8029-94acb77d382f)

![image](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812926/c2c2df30-2ead-4abf-a01a-031dd3993c7a)

#### Streams

![image](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812969/0e1bce1a-dca7-45bb-88d4-cfaefc04f222)

![image](https://github.com/XimenaRodriguez20/AREP-Taller8/assets/123812969/446bfd50-82bc-4d01-a5a0-62f9d31ca9e2)
