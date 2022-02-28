import { Component } from '@angular/core';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JankMedia';

  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions:any = {
      background: {
          color: {
              value: "#1a1a1a"
          }
      },
      fpsLimit: 120,
      interactivity: {
          
          modes: {
              bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
              },
              push: {
                  quantity: 4
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              }
          }
      },
      particles: {
          color: {
              value: "#7A2626"
          },
          links: {
              color: "#FA7878",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
          },
          move: {
              direction: "none",
              enable: true,
              outModes: "bounce",
              random: false,
              speed: 6,
              straight: false
          },
          number: {
              density: {
                  enable: true,
                  area: 800
              },
              value: 80
          },
          opacity: {
              value: 0.5
          },
          shape: {
              type: "circle"
          },
          size: {
              value: { min: 1, max: 5 }
          }
      },
      detectRetina: true
  };

}
