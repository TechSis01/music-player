
import lady from '../image/whitebabe.jpg'
const guitar = `\u{1F3B8}`;
const star = `\u{2B50}`;
const musicNote = `\u{1F3B5}`;
const trumpet = `\u{1F3BA}`;
const keyboard = `\u{1F3B9}`;
const snowflake = `\u{2744}`;
function Shortcut() {
  return (
    <>
      <h2>Shortcuts</h2>
      <section className='emoji-list'>
        <div className="emojis">{snowflake} Chillhits</div>
        <div className="emojis">{guitar} Acoustic</div>
        <div className="emojis">{star} Hop</div>
        <div className="emojis">{musicNote} Indie Pop</div>
        <div className="emojis">{trumpet} Jazz</div>
        <div className="emojis">{keyboard} Piana Blues</div>
      </section>
      <section>
               <h2>Fave Artists</h2>
         <section>
             <div className='fave-artist'>
                 <img src={lady} alt="artist"></img>
                 <div>
                     <p>Taylor Swift</p>
               <p>195 songs in library</p>
               </div>
             </div>
             <div className='fave-artist'>
                 <img src={lady} alt="artist"></img>
                 <div>                    
                     <p>Kanye West</p>
                     <p>124 songs in library</p>
                 </div>
             </div>
             <div className='fave-artist'>
                 <img src={lady} alt="artist"></img>
                 <div>
                     <p>Drake</p>
                     <p>50 songs in library</p>
                 </div>
             </div>
             <div className='fave-artist'>
                 <img src={lady} alt="artist"></img>
                <div>
                    <p>Billie Eilish</p>
                    <p>15 songs in library</p>
                </div>
            </div>
        </section>
    </section>
    </>
  );
}

export default Shortcut;
