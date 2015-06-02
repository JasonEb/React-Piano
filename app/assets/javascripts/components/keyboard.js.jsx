var Keyboard = React.createClass({
  render: function() {
    return (
      <div className="keyboard">

        <div className='black-keys'>
          <span className='group-one'>
            <Key noteName='C#4' qwertyKey='W'/>
            <Key noteName='Eb4' qwertyKey='E'/>
          </span>

          <span className='group-two'>
            <Key noteName='F#4' qwertyKey='T'/>
            <Key noteName='G#4' qwertyKey='Y'/>
            <Key noteName='Bb4' qwertyKey='U'/>
          </span>

          <span className='group-three'>
            <Key noteName='C#5' qwertyKey='O'/>
            <Key noteName='Eb5' qwertyKey='P'/>
          </span>


        </div>

        <div className="white-keys">
          <Key noteName='C4' qwertyKey='A'/>
          <Key noteName='D4' qwertyKey='S'/>
          <Key noteName='E4' qwertyKey='D'/>
          <Key noteName='F4' qwertyKey='F'/>
          <Key noteName='G4' qwertyKey='G'/>
          <Key noteName='A4' qwertyKey='H'/>
          <Key noteName='B4' qwertyKey='J'/>
          <Key noteName='C5' qwertyKey='K'/>
          <Key noteName='D5' qwertyKey='L'/>
          <Key noteName='E5' qwertyKey=';'/>
        </div>

      </div>
    )
  }
});
