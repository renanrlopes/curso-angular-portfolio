import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Computer Engineering',
        p: 'UNIFEI | 2024 - Present',
      },
      text: '<p>Atualmente curso Engenharia da Computação na UNIFEI, onde venho desenvolvendo uma base sólida em programação, algoritmos, estruturas de dados e fundamentos de sistemas computacionais.<p/> <p>O curso tem contribuído para o aprimoramento do raciocínio lógico, resolução de problemas e entendimento aprofundado de hardware e software.</p>',
    },
    {
      summary: {
        strong: 'Programming with Python and Ethical Hacking',
        p: 'Ackerdemy | 2023',
      },
      text: '<p>Curso voltado ao desenvolvimento em Python e fundamentos de segurança da informação, com foco em lógica de programação, automação de tarefas e análise de vulnerabilidades.</p><p>Foram abordados conceitos de Ethical Hacking, boas práticas de segurança, testes básicos de intrusão e entendimento do funcionamento de sistemas e redes.</p>',
    },
    {
      summary: {
        strong: 'High School',
        p: 'IMB | 2022',
      },
      text: '<p>Conclusão do ensino médio, período em que desenvolvi interesse pela área de tecnologia e computação.</p><p>Durante essa fase, iniciei os primeiros estudos em programação e lógica computacional, servindo como base para a escolha da carreira em Engenharia da Computação.</p>',
    },
  ]);
}
