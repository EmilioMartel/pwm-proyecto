import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  barraReducida = false;
  nameInput = '';
  lastNameInput = '';
  emailInput = '';
  customclassboton = "botonR"
  datobotonR = "Cambiar Plan"
  hrefbotonR = "/plan"
  @Input() titulo: string="Guardar Cambios"
  @Input() tituloImagen: string="Cambiar Imagen de Perfil"


  users: User[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getInfoUser('user-1');
  }

  toggleBarraLateral(): void {
    this.barraReducida = !this.barraReducida;
  }

  async getInfoUser(id: string): Promise<void> {
    try {
      const data: User[] | undefined = await this.httpClient.get<User[]>('http://localhost:4200/users').toPromise();

      if (data) {
        const user: User | undefined = data.find((user: User) => user.id === id);

        if (user) {
          this.nameInput = user.name;
          this.lastNameInput = user.lastName;
          this.emailInput = user.email;
        } else {
          console.error('Usuario no encontrado');
        }
      } else {
        console.error('Datos de usuarios no disponibles');
      }
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  }

  fetchUsers(): void {
    this.httpClient.get<User[]>('http://localhost:4200/users').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
