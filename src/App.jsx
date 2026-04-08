import React,{useEffect,useState} from 'react'
import './App.css'
import AOS from 'aos'
import Audio from './Audio.jsx'
import Audio1 from './Audio1.jsx'
import PasswordGate from './Password.jsx'
import 'aos/dist/aos.css'
import DaysSinceMet from './DaysSinceMet.jsx'
import image1 from  './assets/image1.jpg'
import image2 from './assets/imag2.jpg'
import image3 from './assets/image2.jpg'
import image4 from './assets/image3.jpg'
import image5 from './assets/image4.jpg'
import image6 from './assets/image6.jpeg'
import image7 from './assets/image7.jpeg'
import image8 from './assets/image8.jpeg'
import image9 from './assets/image9.jpeg'
import image10 from './assets/image10.jpeg'
import image11 from './assets/image11.jpeg'
import image12 from './assets/image12.jpeg'
function App(){
  

  
  const [user,setUser]=useState(false)
  const user1=()=>{
    setUser(true)
  }
  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:false,
      mirror:true,
      easing:'ease-in-out',
      
    });
   AOS.refresh()
  },[])
  return(
    
    <>
    <PasswordGate>
    
    <nav className='nav' data-aos="fade-down" >
      <h1>KIRUKII & KIRUKAN </h1>
       <p>- A blessed friendship turned into a beautiful relationship 🌸❤️</p>
    </nav>
    <section className='section' data-aos="flip-right">
      
      <img src={image2} className='image1'  />
      <div className='card3d'>
        <p className='card3d1'>💖 “A true 💖 relationship is two 🤍 imperfect people 🤝 refusing to give up 💫 on each other 🫶✨”</p>
      </div>

    </section>
    <div className='intro' data-aos="fade-up">
      <p>
        🌸 Intro – A Beautiful Bond Called Friendship 🌸

Sometimes, friendship doesn’t start with big moments — it begins with a small smile, a casual “hi,” or just one unexpected glance 👀💫. Little by little, that one person starts meaning more than you ever imagined. What began as a simple connection in class slowly turned into something unforgettable — full of laughter 😂, late-night talks 🌙, care ❤️, fights 😤, and endless memories 💭.

From sharing notes 📚 to sharing feelings 💌, from random conversations to emotional confessions 🥺, every moment became a chapter in our story. You became my comfort zone, my favorite person to talk to, and the one who could change my mood with just a single word 🌈✨.

This is not just a story of friendship — it’s a bond filled with emotions, trust, and countless memories that I’ll cherish forever 💞. Through every smile, every tear, every misunderstanding, and every comeback — our friendship only grew stronger 💪💖.
      </p>
    </div>
    <section className='section' data-aos="flip-left">
        
    <img src={image1}  className="image2" alt="" />
    <div className='card3d'>
        <p className='card3d1'>“The photo that captured not just faces, but a friendship written in laughter 💕.”</p>
      </div>
   
    </section>
   
    <div className='para1' data-aos="fade-down">
      <p>
        The first time I saw you was in class 😍 — and honestly, I looked at you just like how I used to “sight” everyone 😅 but something about you hit different 💫. Then I saw you sitting next to Nive, all serious like a topper 📚😂 and I kept noticing you. After that, wherever I went, somehow you were there too! 😄

Then as usual, you know how it goes — in the lab, because Dhanusiya was talking to you, I also joined in and started a convo 😜. You talked so sweetly, and that day night itself I found your Insta ID 😎✨. I followed you, we started talking little by little 💬💗. You told me about your friends, but deep down I was like, “Hmm, she’s definitely single!” 😏🤣

Slowly, those chats turned into something special 💞. Whenever you talked, I felt so happy and relaxed 😌. Then we started sharing notes and secrets too 🥰. On Sep 21, that Sunday afternoon, when you opened up about your past 💔, I decided I should never hurt this girl again — but now I think I’m the one who’s been torturing you 😅🙃.

On Sep 22, I realized my mistake and felt so hurt 😔. I was scared you’d stop talking to me. You were the first girl (after mom 🥹) who cared for me so much, asked if I ate 🍽️, and genuinely looked after me. That care made me feel special 💖. I told myself, never lose this girl.

Then came that one day when you said, “Close the doors completely.” That hit me harder than Sep 22 🥲. But after that, we became best friends — not just friends, but so close that we knew everything about each other. 🤝💞

I still remember — when you had your problem, you shared it with me before even your mom 😭. That’s when I knew our bond was real ❤️.
 </p>
      
    </div>
    <div className="image3" data-aos="fade-right"><img src={image3} alt="" /></div>
    <div className='para1' data-aos="fade-up">
      <p>
        
        On Oct 2, when you went home 🏡, I missed you badly 🥺 — like, really missed you. Even you missed me too 🥰. When you came back, everything was back to normal. You started walking with me, and no matter what others said, you never left my side 💫.

Then came that unforgettable day — Ayudha Pooja holidays 🎉. When you gave me your hand 🤝, it was the first time I ever held a girl’s hand (except mom & athai 😅). My heart skipped a beat 💓 — that moment, I felt pure happiness. I wanted to hold it again 😳.

Later, when you didn’t let go of my hand for a while, my heart was doing a full happy dance 🕺💃. After that, we got even closer 🥰.

Then one day at the apartment, Vijay came and said hi 👋 — you talked for one minute, and I got super possessive 😤😂. I got tensed, walked away, but later everything went back to normal.

Then came Diwali 🎆 — you went home, and I didn’t expect to miss you that much, but I did 🥺. Those seven days — first three were full of fights 😤, next four full of missing and love ❤️. I’ll never forget when I asked to rest on your shoulder 🥹, and you actually said yes 😳💞. That one-minute moment was unforgettable 🕰️✨.

Even when I felt low, you understood me without me saying a word 💭. You always cared.
      </p>
     
    </div>
    <div className="image4"  data-aos="flip-right"><img src={image4} alt=""/><img src={image5}  alt="" /></div>
    <div className='para1' data-aos="fade-right">
      <p>When you got hurt near your eye 😢, I brought ointment and chocolate 🍫 — and your reaction made me melt 😍. You even said, “I want your shoulder.” That was the cutest moment ever 💕.

Then, everything went normal again until that one day you said you might leave 😭. I cried like crazy 😭 — even my kerchief was fully wet 🥹. That’s why I gave you a 9/10 rating 😂. Please don’t ever do that again 😣.

When you went home again, even for one day, I missed you a lotttttt 😭. Yesterday, when you touched my hand in the SF area, and you said, “Don’t keep it there,” I got scared thinking maybe you don’t like me anymore 😢. But then you said you felt safe and happy — that made my whole day 🥰.

Even when I said I’m taking a break, you were the first person who felt emotional 🥹. You even told your brother that I’m like a small kid to you 🫶. That line made my heart so full 🥺❤️.

You got possessive too when you heard that guy chatting for 6 hours 😂 — and I felt sooo happy because you actually care 💕.

</p>
    </div>
    <div className="card3d2" data-aos="flip-right">
      <p>No music can beat the peace I get from this voice. It’s like instant relief — one word from you, and my whole mood resets.</p>
      <Audio/>
    </div>
    <div className='para1' data-aos="fade-left">
      <p>On November 9, when I gifted you that website 🎁💻, I never imagined it would touch your heart the way it did 💔➡️💖, because in my mind it was just something I made with effort, but for you it became something emotional, something alive ✨, and when you cried 😭—not for a moment, not for an hour, but almost the entire day—I stood there confused, overwhelmed, and a little broken inside 😔🥺, wondering how something I created could make tears fall from your eyes like rain 🌧️. I even asked so many girls 🤔, questioning whether it was really that special, and every answer came back the same—that it was special because it carried my hard work, my time, my intention 💪✨, and that was the day I understood that feelings don’t measure logic, they only feel 💭❤️. That same day, when people casually spoke about video calls 📞, I always said “no chance” ❌ with confidence, but suddenly, without planning, without control, I asked you softly, “Will you do a video call?” 🥹📱, and in that second my heart lifted, my breath changed, and I felt like I was floating in the sky 😄🕊️.</p>
    </div>
    <section className='section' data-aos="flip-right">
      <div >
      <img className='image6' src={image6} alt="" />
    </div>
    <div className='card3d' >
      <p className='car'>Video 📱 calls are like ✨ soft moonlight 🌙 through a screen 🪟, where distance 🌍 melts, hearts 🤍 whisper without words, and every smile 😊 feels like a warm hug 🤍 traveling through pixels and love 💞</p>
    </div>
    </section>
    <div className='para1' data-aos="fade-top">
      <p>
        From that moment, our distance slowly disappeared 🤍, you started booking slots for me 🗓️🤝, standing by me quietly, and with every small help, we moved closer without even realizing it 💞. In special lab, studying Machine Lab together on Google Meet 💻📚 felt less like studying and more like sharing time, and even after college ended, my eyes searched only for your face 😊, finding excuses just to see you again 😅💖. Everything felt smooth, warm, and hopeful 🌈✨, but whenever you failed to clear a slot, every single attempt broke something inside me 😔💔, and though I smiled outside, my heart cried silently for you 😢. One day you didn’t come to college 🏫❌, and during the SF meeting, when I took photos for the first time with Sibi akka 📸 and later with Nivetha akka 😊, your words—asking whether we took pictures without you—cut deep 🥹, and I realised how many times I had unknowingly hurt you, little by little, day by day 💔. After PT exams 📄, classes faded away, slots repeated endlessly 😅🗂️, and when 500rp got deducted because of Joy 😞💸, none of it mattered to you—you walked straight to me, held my hand 🤝, and stayed beside me 🥺💞, and in that quiet moment, my heart screamed that I was not alone anymore 🫶💖.
      </p>
    </div>
    <div className="image4"  data-aos="flip-left"><img src={image7} alt=""/><img src={image8} className='img'  alt="" /></div>
    <div className='para1' data-aos="fade-bottom">
      <p>
      Then came the storms in the Infinity Roast group 😞, misunderstandings, pain, and you standing inside it, getting hurt silently 💔, and during our first Truth or Dare game on Google Meet 🎮💻, when you said you would miss me from this college 🥹💓, my heart overflowed with butterflies 🦋🦋🦋, even though I lied and named someone else as my crush 😔. Small fights came and went 😕, but every time, words failed and eyes spoke 👀🤍, healing what was broken without sound. The day you tried for a slot again and cried in SF 😭, resting your head on my shoulders 🥺, I held that moment close, doing everything I could to protect you 🤍🫂. Then came that Sunday 🏥, when I disappeared into silence, didn’t call, didn’t text, didn’t even ask if you ate 😞, and I know that silence hurt more than words 💔, and for that I am deeply sorry, rasathi 🥺💛. After that, time gifted me the most beautiful week of my life ✨💫, when our special lab sir was absent for ten days 😄, and laughter filled the air 😆💞—hands resting, heads leaning, shy touches 😳🤍, my hand on your waist 😶‍🌫️, yours inside my shirt 😳, and hearts racing with nothing but butterflies 🦋🦋🦋. Watching Sita Ramam together 🎬💖 became a memory stitched into my soul, and on the last day of special lab, when you were on your periods 😔, I tried in every small way to care for you 🤍🫶. I still remember that quiet moment in the veranda 🌅, just you and me, the world paused, my hand on your waist, calling you “my thango” 🥹💞.
      </p>
      </div>
      <section className='section' data-aos="flip-right">
        <div>
          <img className='image9' src={image9} alt="" />

        </div>
        <div className='card3d'>
          <p className='car1'>Every picture 🖼️ holds a beautiful story 🌸 behind it, a quiet moment ⏳ wrapped in memories 🤍, where feelings ✨ pause in time ⏰ and silently learn how to smile forever 😊💫</p>
        </div>
      </section>
      <div className='para1' data-aos="fade-top">
        <p >
          Exams arrived 📚😔, conversations reduced, and my possessiveness grew like a shadow 😞, involving others and hurting you 💔, and I regret that deeply, thango 🙏. That night when I said something careless—that if you loved someone else even my hand wouldn’t touch you 💔—your tears flowed for two long hours 😭, and those tears still echo inside me. Christmas came 🎄, and even while at Joy’s house 🏠, my thoughts walked into shops 🛍️, picking a keychain and a hair band 🎁 just for you, and when I gave them to you on a day we went to college alone 🥹, happiness filled me completely 😊💖, especially when you ate Dairy Milk in front of me 🍫, making me feel like I was feeding you myself 🥺💞. No matter who enters my life, no matter what the future writes—even if a future wife appears—you will always hold a place in my heart 🤍✨. That is how 2025 ended for us 🥹📸, wrapped in memories, and when my madness pulled me away after V2T 😔, my silence hurt you again, and for that I am sorry, thango 🙏; I never said how much I missed you, but I missed you endlessly, kiruki 🥺💔. I became overly possessive through others 😞, yet even when I stayed quiet, you searched for me, came to me, called me kiruka 🥹💖, and slowly, after two days, light returned 😊. When I video-called you from the hostel 📱 and saw your face, tears fell without warning 😭, and once again, you made me feel safe, calm, and whole 🤍🫂. I love the way you are possessive 💕, I love you exactly as you are, and I meant it when I said I continued the Igloo movie only because it was with you 🎬—with anyone else, I would have walked away ❌—because with you, I am comfortable, real, and myself, rasathi 🥹💖, and you truly, deeply, endlessly mean so much to me, thangameeee 🫶✨💛🦋🌙

        </p>
      </div>
      <section className='section' data-aos="flip-left">
         <div>
          <img className='image9' src={image10} alt="" />

        </div>
        <div className='card3d'>
          {
            !user && <p onClick={user1} className='car1'>Are you excited to see wonderfull fact? click the card</p>
          }
          {
            user && <p>
<DaysSinceMet />
            </p>

          }
          
          
        </div>
      </section>

      

    <div className='conclusion' data-aos="fade-up">
      <p>Now, even after all these fights and misunderstandings 😅, we always come back together 🩵. Because truth is —
Kirukii can’t live without Kirukan, and Kirukan can’t live without Kirukii! 💞💞

Love you loads, my crazy bestie 🥰💖
Forever and ever till the sky runs out of clouds ☁️💫.Our friendship is more than just a bond — it’s a melody 🎶 that calms my soul 💖, a light 🌟 that guides me through dark days 🌙, and a story 📖 I’ll cherish forever 💫. No matter how far we go, our hearts will always vibe the same 💕🤝✨.</p>
      <p>Paaa unna vitutu eppothum poga maaten paa ithu yen kiruki mela promise.That one word di thango "PAA" itzz my most memorable word di thangooo</p>
      <p>Ur my only positive and precises thing in 2025 thango</p>
      <p>Love uuu soo much dii kirukii 🤍✨</p>

    </div>
    
   </PasswordGate>
    </>
  )
}
export default App