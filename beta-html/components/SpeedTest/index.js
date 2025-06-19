import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import icons from './icons.js';
import $ from 'jquery';

import StepOne from './StepOne';
import StepTwo from './StepTwo';

export default function SpeedArea() {
  const router = useRouter()
  useEffect(() => {
    if(process.browser) {
      // geting canvas by Boujjou Achraf
      var c = document.getElementById("c");
      var ctx = c.getContext("2d");

      //making the canvas full screen
      c.height = 16;
      c.width = 256;
      
      var matrix = "101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010";
      matrix = matrix.split("");

      var font_size = 7;
      var columns = 60; //number of columns for the rain
      //an array of drops - one per column
      var drops = [];
      //x below is the x coordinate
      //1 = y co-ordinate of the drop(same for every drop initially)
      for(var x = 0; x < columns; x++)
          drops[x] = 1; 

      //drawing the characters
      function draw()
      {
          //Black BG for the canvas
          //translucent BG to show trail
          ctx.fillStyle = "rgba(26, 255, 252, 0.4)";
          ctx.fillRect(0, 0, c.width, c.height);

          ctx.fillStyle = "#000";//green text
          ctx.font = font_size + "px Roboto";
          //looping over drops
          for(var i = 0; i < drops.length; i++)
          {
              //a random chinese character to print
              var text = matrix[Math.floor(Math.random()*matrix.length)];
              //x = i*font_size, y = value of drops[i]*font_size
              ctx.fillText(text, i*font_size, drops[i]*font_size);

              //sending the drop back to the top randomly after it has crossed the screen
              //adding a randomness to the reset to make the drops scattered on the Y axis
              if(drops[i]*font_size > c.height && Math.random() > 0.890)
                  drops[i] = 0;

              //incrementing Y coordinate
              drops[i]++;
          }
      }

      setInterval(draw, 90);

    }
    if (process.browser) {
      $(function() {
        var mbps = 0;

        setTimeout(() => {
          $('.test-begin__button').addClass('done');

          $('.js-start-button').on('click', function(e) {
            $(this).addClass('blink');

            setTimeout(() => {
              $('.button-container').removeClass('blink');

              new confettiKit({
                  confettiCount: 35,
                  angle: 0,
                  spread: 400,
                  startVelocity: 50,
                  elements: {
                      'custom': [
                          {
                          count: 3,
                          width: 6,
                          content: icons[0],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },
                          {
                          count: 3,
                          width: 5,
                          content: icons[1],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },  
                          {
                          count: 3,
                          width: 6,
                          content: icons[2],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },
                          {
                          count: 3,
                          width: 7,
                          content: icons[3],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },    
                          {
                          count: 3,
                          width: 6,
                          content: icons[4],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },              
                          {
                          count: 3,
                          width: 8,
                          content: icons[5],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },         
                          {
                          count: 3,
                          width: 8,
                          content: icons[6],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },          
                          {
                          count: 3,
                          width: 7,
                          content: icons[7],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },       
                          {
                          count: 3,
                          width: 6,
                          content: icons[8],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },      
                          {
                          count: 3,
                          width: 7,
                          content: icons[9],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },     
                          {
                          count: 3,
                          width: 6,
                          content: icons[10],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },       
                          {
                          count: 3,
                          width: 6,
                          content: icons[11],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },         
                          {
                          count: 3,
                          width: 5,
                          content: icons[12],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },     
                          {
                          count: 3,
                          width: 6,
                          content: icons[13],
                          contentType: 'svg',
                          direction: 'down',
                          rotation: false,
                        },                                                                                                                                   
                  ]
                  },
                  x: ($('.js-start-button').offset().left + 90),
                  y: ($('.js-start-button').offset().top + 90)
              });        
            }, 450);
            var button = $(this);
            setTimeout(() => {
              $('.js-screen-one').fadeOut();
              $('.js-screen-two').fadeIn();
              $('.js-screen-two').addClass('js-screen-two-active');
              $('.js-gauge').addClass('gauge-active');
              button.remove();

              setTimeout(() => {
                $('.js-animate-arrow').addClass('active');
                
                setInterval(() => {
                  if(mbps < 70) {
                    mbps = mbps + 1;
                    $('.js-mpbs').text(mbps);
                  }
                }, 25);

                setTimeout(() => {
                  router.push('/result');
                }, 10000);
              }, 2000);             
            }, 2300);
          });
        }, 700);

      });
    }    
  }, [])


  return (
    <div>
      <div className="screen-one js-screen-one">
        <StepOne />
      </div>
      <div className="screen-two js-screen-two">
        <StepTwo />
      </div>
    </div>
  );
}
