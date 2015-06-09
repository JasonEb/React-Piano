## Janki
<a href="jankiboard.herokuapp.com">Live Demo</a>

Janki is an Janko inspired musical app built with Rails, React, and the Flux architecture. Check it out live he

![Janko layout](http://www.pianoworld.com/images/Janko_layout.jpg)

Even though it's sits on a Rails MVC framework, the mechanics are constructured to follow the Flux flow.

<img src="http://blog.krawaller.se/img/flux-diagram.png" width="480px">

Because of React's components and Virtual DOM performance, creating views and front-end logic was quick to implement. Following the unidirectional data flow helped separate concerns and avoid sphagetti code!

## Development
###### Creating Tones
There are 88 tones, and implementing them required knowing all frequencies. However, an octave(or higher tones) is frequency of the previous tone doubled. Thus, I only needed the 12 base frequencies to generate the rest of the tones.

###### Recording and playing back input
jQuery is used to listen for keypresses. The keycodes are collected and triggers the ```Action Creator``` for the musical notes, packing a payload to the ```Dispatcher```. The Dispatcher broadcasts an event, which triggers the ```Store```, and the KeyStore.js will set the information while it emits a change event. Finally, the ```View``` listens to the store and updates accordingly.

Playback is achieved by recording the notes pressed when the ```View``` triggers a dedicated action for input and time. Implementing the playback was challenging because Javascript's setInterval isn't reliable, so an elapsed time was used for a "fuzzy" playback.

###### CSS and Style
Apple's keyboard layout is the main inspiration for the design. I want users to feel at home with the app, so I used the same font (VAG Rounded) and color scheme. When keys are pressed, the keys are visibly compressed by changing it's scale and color.

Because of JSX, conceptualizing and coding the logic behind each component was extremely easy and satisfying!
