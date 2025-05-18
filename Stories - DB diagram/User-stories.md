# PROYECTO INTEGRADOR MÓDULO 3

**ALVARO PAGGI**  
**HISTORIAS DE USUARIOS - AMAZING AMAZONAS TOURS**

1. Cuando un usuario nuevo entra a la página por primera vez, debe poder explorar sus menús y ver de qué se trata la página y qué funcionalidades tiene.

2. Se debe visualizar un menú **“Iniciar sesión”**, accesible desde la página principal, que permita crear un usuario nuevo o loguearse si el usuario ya tiene cuenta.

3. Si el usuario decide crear un nuevo usuario, se debe acceder a un formulario a tales efectos, para crear un nuevo registro en la base de datos. Este formulario permitirá crear:

   - un nombre de usuario,
   - una contraseña,
   - un mail asociado,
   - un número de documento,
   - una fecha de nacimiento,
   - y, opcionalmente, cargar una imagen.

4. Si el usuario ya tiene usuario registrado, se debe acceder a un formulario que permita ingresar **nombre de usuario y contraseña**.

5. Se debe poder acceder a un menú que direccione a una página para **reservar actividades**.

   - Este menú no estará disponible si el usuario **no está logueado**.
   - Si se accede estando logueado, se abre la página con la funcionalidad.

6. Una vez dentro de la funcionalidad, se verá una **lista de las actividades que el usuario tiene agendadas**.

   - Si el usuario no ha agendado actividades, esta lista estará vacía.
   - La lista mostrará las actividades que el usuario tiene agendadas para el futuro y las que ha cancelado.
   - El usuario podrá **filtrar** las actividades: _Todas_, _Activas_, _Canceladas_.
   - La lista mostrará:
     - el título de la actividad,
     - la fecha,
     - la hora,
     - el estado (_activo_, _cancelado_),
     - y un botón **“Cancelar”** (solo visible si la actividad está activa y es posible cancelarla).

7. El **formulario para agendar actividades** debe permitir:
   - ingresar un título para la actividad,
   - elegir una fecha,
   - elegir un horario,
   - y un botón **“Agendar”**, que permitirá agregar el registro a la base de datos, y luego se mostrará en la lista mencionada en el punto anterior.
