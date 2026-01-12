import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.png',
      alt: 'Ícone de conhecimento de Java',
    },
    {
      src: 'assets/icons/knowledge/typescript.png',
      alt: 'Ícone de conhecimento de typescript',
    },
    {
      src: 'assets/icons/knowledge/favicon.ico',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/c-.png',
      alt: 'Ícone de conhecimento de c++',
    },
  ]);
}
