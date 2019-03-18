import {trigger, animate, style, group, query, transition} from '@angular/animations';
const color = {
  GREEN: 'lightgreen',
  BLUE: 'lightblue',
  RED: 'tomato'
}


export const routerTransition = trigger('routerTransition', [
  transition('* => bottom', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),
  transition('* => page404', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(10%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ])
])
