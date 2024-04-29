import { Component } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})

export class LandingPageComponent {
  contenido1: string="¡Mantente al tanto de eventos importantes con nuestro calendario integrado y recibe notificaciones para que no se te escape nada!"
  contenido2: string="Crea tu propio espacio personal donde puedes subir y almacenar resúmenes, exámenes y una amplia variedad de recursos. ¡Además, explora los recursos compartidos por tus amigos!"
  contenido3: string="Conéctate fácilmente con tus amigos a través de nuestro chat individual y grupal. Organiza eventos, comparte ideas y mantén la comunicación constante."
  contenido4: string="Personaliza tu perfil a tu manera. Actualiza tu información personal, gestiona tus preferencias y disfruta de una experiencia única adaptada a tus necesidades académicas."
  imagen1: string='../../assets/images/caracteristica1.png'
  imagen2: string="../../assets/images/caracteristica2.png"
  imagen3: string="../../assets/images/caracteristica3.png"
  imagen4: string="../../assets/images/caracteristica4.png"
}
