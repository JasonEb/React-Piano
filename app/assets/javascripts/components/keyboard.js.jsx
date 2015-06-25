var Keyboard = React.createClass({
  render: function() {
    return (
      <div className="keyboard">

        <div className='number-row'>
          <span className='number-row'>
            <Key noteName='C5' qwertyKey='1'/>
            <Key noteName='D5' qwertyKey='2'/>
            <Key noteName='E5' qwertyKey='3'/>
            <Key noteName='F#5' qwertyKey='4'/>
            <Key noteName='G#5' qwertyKey='5'/>
            <Key noteName='Bb5' qwertyKey='6'/>
            <Key noteName='C6' qwertyKey='7'/>
            <Key noteName='D6' qwertyKey='8'/>
            <Key noteName='E6' qwertyKey='9'/>
            <Key noteName='F#6' qwertyKey='0'/>
          </span>
        </div>

        <div className='top-row'>
          <span className='top-row'>
            <Key noteName='C#5' qwertyKey='Q'/>
            <Key noteName='Eb5' qwertyKey='W'/>
            <Key noteName='F5' qwertyKey='E'/>
            <Key noteName='G5' qwertyKey='R'/>
            <Key noteName='A5' qwertyKey='T'/>
            <Key noteName='B5' qwertyKey='Y'/>
            <Key noteName='C#6' qwertyKey='U'/>
            <Key noteName='Eb6' qwertyKey='I'/>
            <Key noteName='F6' qwertyKey='O'/>
            <Key noteName='G6' qwertyKey='P'/>
          </span>
        </div>

        <div className='home-row'>
          <span className='home-row'>
            <Key noteName='C4' qwertyKey='A'/>
            <Key noteName='D4' qwertyKey='S'/>
            <Key noteName='E4' qwertyKey='D'/>
            <Key noteName='F#4' qwertyKey='F'/>
            <Key noteName='G#4' qwertyKey='G'/>
            <Key noteName='Bb4' qwertyKey='H'/>
            <Key noteName='C5' qwertyKey='J'/>
            <Key noteName='D5' qwertyKey='K'/>
            <Key noteName='E5' qwertyKey='L'/>
            <Key noteName='F#5' qwertyKey=';'/>
          </span>
        </div>

        <div className='bottom-row'>
          <span className='bottom-row'>
            <Key noteName='C#4' qwertyKey='Z'/>
            <Key noteName='Eb4' qwertyKey='X'/>
            <Key noteName='F4' qwertyKey='C'/>
            <Key noteName='G4' qwertyKey='V'/>
            <Key noteName='A4' qwertyKey='B'/>
            <Key noteName='B4' qwertyKey='N'/>
            <Key noteName='C#5' qwertyKey='M'/>
            <Key noteName='Eb5' qwertyKey=','/>
            <Key noteName='F5' qwertyKey='.'/>
            <Key noteName='G5' qwertyKey='/'/>
          </span>
        </div>

        <div className="recording">
          <Recorder />
        </div>





      </div>
    )
  }
});
