import React,{useEffect} from 'react'
import './App.css'
import AOS from 'aos'
import Audio from './Audio.jsx'
import 'aos/dist/aos.css'

import image1 from  './assets/image1.jpg'
import image2 from './assets/imag2.jpg'
import image3 from './assets/image2.jpg'
import image4 from './assets/image3.jpg'
import image5 from './assets/image4.jpg'
function App(){
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
    
    <nav className='nav' data-aos="fade-down" >
      <h1>KIRUKII & KIRUKAN </h1>
       <p>- A blessing friendship</p>
    </nav>
    <section className='section' data-aos="flip-right">
      
      <img src={image2} className='image1'  />
      <div className='card3d'>
        <p className='card3d1'>💖 “A best friend is the one who can make you laugh 😂 even when your heart wants to cry 💧.”</p>
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

Now, even after all these fights and misunderstandings 😅, we always come back together 🩵. Because truth is —
Kirukii can’t live without Kirukan, and Kirukan can’t live without Kirukii! 💞💞

Love you loads, my crazy bestie 🥰💖
Forever and ever till the sky runs out of clouds ☁️💫</p>
    </div>
    <div className="card3d2" data-aos="flip-right">
      <p>No music can beat the peace I get from this voice. It’s like instant relief — one word from you, and my whole mood resets.</p>
      <Audio/>
    </div>
    <div className='conclusion' data-aos="fade-up">
      <p>Our friendship is more than just a bond — it’s a melody 🎶 that calms my soul 💖, a light 🌟 that guides me through dark days 🌙, and a story 📖 I’ll cherish forever 💫. No matter how far we go, our hearts will always vibe the same 💕🤝✨.</p>
      <p>Paaa unna vitutu eppothum poga maaten paa ithu yen kiruki mela promise.That one word di thango "PAA" itzz my most memorable word di thangooo</p>
      <p>Ur my only positive and precises thing in 2025 thango</p>
      <p>Love uuu soo much dii kirukii 🤍✨</p>

    </div>
    
    
    </>
  )
}
export default App