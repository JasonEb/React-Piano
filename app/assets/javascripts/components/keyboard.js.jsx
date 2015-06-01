var Keyboard = React.createClass({
  render: function() {
    return (
      <div className="keyboard">
        {/* White Keys */}
        <Key noteName='C4' qwertyKey='A'/>
        <Key noteName='D4' qwertyKey='S'/>
        <Key noteName='E4' qwertyKey='D'/>
        <Key noteName='F4' qwertyKey='F'/>
        <Key noteName='G4' qwertyKey='G'/>
        <Key noteName='A4' qwertyKey='H'/>
        <Key noteName='B4' qwertyKey='J'/>
        <Key noteName='C5' qwertyKey='K'/>
        <Key noteName='D5' qwertyKey='L'/>
      </div>
    )
  }
});
