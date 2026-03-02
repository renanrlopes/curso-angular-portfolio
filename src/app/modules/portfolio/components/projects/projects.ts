import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';
import { EDialogPanelClass } from '../../enum/edialog-panel-class';


@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/portfolio1.png',
      alt: 'Projeto Vida FullStack',
      title: 'Portfolio',
      with: '80px',
      height: '51px',
      description:
        '<p>Venha conferir um dos meus primeiros portfólios.</p>',
      links: [
        {
          name: 'Conheça o Portfolio',
          href: 'https://renanrlopes.infinityfree.me/curriculo.html',
        },
      ],
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto Lista de Tarefas',
      title: 'Lista de Tarefas',
      with: '80px',
      height: '51px',
      description:
        '<p>Aplicação de lista de tarefas desenvolvida com Angular. Permite adicionar, concluir e remover tarefas de forma prática.</p>',
      links: [
        {
          name: 'Ver no GitHub',
          href: 'https://github.com/renanrlopes',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
